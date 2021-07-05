import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: '',
            basePrice: 0,
            imageUrl: '',
            description: '',
            stock: 0
        }
    }

    async componentDidMount() {
        await this.setState({ id: this.props.match.params.id });
        this.initData();
    }

    updateState(name, value) {
        this.setState({
            [name]: value
        });
    }

    initData() {
        let token = localStorage.getItem('token');
        axios.get(
            `http://localhost:8000/merchant/product/${this.state.id}`,
            {
                headers: {
                    authorization: `bearer ${token}`
                }
            }
        ).then(res => {
            this.setState({
                name: res.data.name,
                basePrice: res.data.base_price,
                imageUrl: res.data.image_url,
                description: res.data.description,
                stock: res.data.stock
            })
        })
    }

    save = () => {
        let url = `http://localhost:8000/merchant/product/${this.state.id}`;
        let token = localStorage.getItem('token');
        axios.patch(
            url,
            {
                name: this.state.name,
                basePrice: this.state.basePrice,
                description: this.state.description,
                stock: this.state.stock
            },
            {
                headers: {
                    authorization: `bearer ${token}`
                }
            }
        ).then(res => {
            window.alert('Updated!');
            this.props.history.push('/items');
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Edit Item</h1>
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
                            value={this.state.name}
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
                            value={this.state.basePrice}
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
                            value={this.state.description}
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
                            value={this.state.stock}
                            />
                    </FormGroup>
                    <FormGroup >
                        <Button color="success" onClick={() => this.save()}>Update</Button>
                        <Button color="danger" onClick={() => this.props.history.push('/items')}>Cancel</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}

export default withRouter(EditItem);
