import {CartWidget} from '../CartWidget/CartWidget'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import './NavBar.css'
export const NavBar = ({cart}) => {

    return (
        <Navbar bg="light" expand="lg" className="BarraNav">
        <Container>
            <Navbar.Brand>Bienvenid@</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">                
                <NavDropdown title="Powered by the Apocalypse" id="basic-nav-dropdown">
                <NavDropdown.Item>Apocalypse World</NavDropdown.Item>
                <NavDropdown.Item>The Warren</NavDropdown.Item>
                <NavDropdown.Item>Dungeon World</NavDropdown.Item>                
                <NavDropdown.Item>Worlds in Peril</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <CartWidget
             ItemCount= {cart}/>            
        </Container>
        </Navbar>        
    )
}