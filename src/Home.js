import React from "react";
import { Button } from "reactstrap";
import Login from "./Login";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                {!this.props.isLoggedIn ? <Login setToken={this.props.setToken} /> : <Button color="danger" onClick={() => this.props.logout()}>Logout</Button>}
            </div>
        )
    }
}
