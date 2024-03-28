import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navBar/NavBar.css';
import '../cartWidget/CartWidget.css';
import { CartWidget } from '../cartWidget/CartWidget';
export const NavBar = () => (
    <>
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="logo">
                        <span className="brand">KLOT</span>
                        <span>HES</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">T-shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Glasses</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Contact</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    </>
);
