import { Link } from 'react-router-dom';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

export default function NavBar() {
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
                                <Link to="/items">Items</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/items/new">Add New</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}
