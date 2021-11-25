import {CartWidget} from '../CartWidget/CartWidget'
import {Navbar, Container, Nav} from 'react-bootstrap'
import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = ({cart}) => {

    return (
        <header>
            <h1>¡A Leer!</h1>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/">Tienda</Link>
                        <Nav className="me-auto">
                        <Nav.Link to="/libros/duelo">Duelo</Nav.Link>                        
                        <Nav.Link to="/libros/reencuentro">Reencuentro</Nav.Link>                        
                        <Nav.Link to="/libros/suenios">Sueños</Nav.Link>
                        </Nav>
                </Container> 
            
            <Link to="cart"><CartWidget/></Link> 
        
            </Navbar>
        </header>
                
    )
}