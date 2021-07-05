import React from "react";
import Login from "./Login";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                {!this.props.isLoggedIn ? <Login setToken={this.props.setToken} /> : <h3>Hi there</h3>}
            </div>
        )
    }
}
