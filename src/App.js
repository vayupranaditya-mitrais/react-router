import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './NavBar';
import Home from './Home';
import ItemList from './ItemList';
import AddItem from './AddItem';
import EditItem from './EditItem';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/items">
              <ItemList />
            </Route>
            <Route exact path="/items/new">
              <AddItem />
            </Route>
            <Route exact path="/items/:id">
              <EditItem />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
