import React from "react";
import { Route } from "react-router-dom";

export default class ProtectedRoute extends React.Component {
    render() {
        if (this.props.isLoggedIn) return (
            <Route exact path={this.props.path}>
              {this.props.children}
            </Route>
        )
        return null;
    }
}