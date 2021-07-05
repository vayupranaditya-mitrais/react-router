import React from "react";
import { Link } from "react-router-dom";

export default class ProtectedLink extends React.Component {
    render() {
        if (this.props.isLoggedIn) return (
            <Link to={this.props.to}>
                {this.props.children}
            </Link>
        )
        return null;
    }
}