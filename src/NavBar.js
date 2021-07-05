import { Link } from 'react-router-dom';
import ProtectedLink from './ProtectedLink';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

export default function NavBar(props) {
    return (
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand>
                    <Link to="/">React Route & XHR</Link>
                </NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <ProtectedLink isLoggedIn={props.isLoggedIn} to="/items">Items</ProtectedLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <ProtectedLink isLoggedIn={props.isLoggedIn} to="/items/new">Add New</ProtectedLink>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}
