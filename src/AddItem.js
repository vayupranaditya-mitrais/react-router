import axios from 'axios';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            basePrice: 0,
            imageUrl: '',
            description: '',
            stock: 0
        }
    }

    updateState(name, value) {
        this.setState({
            [name]: value
        });
    }

    addItem() {
        let token = localStorage.getItem('token');
        axios.post(
            'http://localhost:8000/merchant/product',
            this.state,
            {
                headers: {
                    authorization: `bearer ${token}`
                }
            }
        ).then(res => {
            if (res.status === 201) {
                alert('Item added')
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Item</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            required="required"
                            placeholder="Monitor"
                            onChange={(elem) => {
                                this.updateState('name', elem.target.value);
                            }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="base_price">Base Price</Label>
                        <Input
                            type="number"
                            name="base_price"
                            id="base_price"
                            min="0"
                            required="required"
                            placeholder="1000"
                            onChange={(elem) => {
                                this.updateState('basePrice', elem.target.value);
                            }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image_url">Image URL</Label>
                        <Input
                            type="url"
                            name="image_url"
                            id="image_url"
                            required="required"
                            placeholder="https://img.blabla.com/a.png"
                            onChange={(elem) => {
                                this.updateState('image_url', elem.target.value);
                            }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            required="required"
                            placeholder="21 inch monitor"
                            onChange={(elem) => {
                                this.updateState('description', elem.target.value);
                            }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="stock">Stock</Label>
                        <Input
                            type="number"
                            name="stock"
                            id="stock"
                            min="1"
                            required="required"
                            placeholder="Stock"
                            onChange={(elem) => {
                                this.updateState('stock', elem.target.value);
                            }}
                            />
                    </FormGroup>
                    <FormGroup >
                        <Button color="success" onClick={() => this.addItem()}>Add</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}