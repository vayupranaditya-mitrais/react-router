import axios from "axios";
import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login() {
        let url = 'http://localhost:8000/auth/login';
        axios.post(
            url,
            {
                username: this.state.username,
                password: this.state.password
            }
        ).then(res => {
            if (res.status !== 201) {
                window.alert('Login failed');
                return;
            }

            this.props.setToken(res.data.token);
        })
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onChange={(elem) => {
                                this.setState({username: elem.target.value});
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={(elem) => {
                                this.setState({password: elem.target.value});
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" onClick={() => this.login()}>Login</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}