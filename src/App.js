import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import Home from './Home';
import ItemList from './ItemList';
import AddItem from './AddItem';
import EditItem from './EditItem';
import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import User from './helpers/User';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: null,
        user: new User()
    };
  }

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = async () => {
      this.setState({ isLoggedIn: await this.state.user.check() });
  }

  setToken = (token) => {
      this.state.user.saveToken(token);
      this.checkLogin();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar isLoggedIn={this.state.isLoggedIn} />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home setToken={this.setToken} isLoggedIn={this.state.isLoggedIn} />
              </Route>
              <ProtectedRoute isLoggedIn={this.state.isLoggedIn} path="/items/new">
                <AddItem />
              </ProtectedRoute>
              <ProtectedRoute isLoggedIn={this.state.isLoggedIn} path="/items/:id">
                <EditItem />
              </ProtectedRoute>
              <ProtectedRoute isLoggedIn={this.state.isLoggedIn} path="/items">
                <ItemList />
              </ProtectedRoute>
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
