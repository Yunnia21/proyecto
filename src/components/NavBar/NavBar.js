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
                        <Nav.Link><Link to={"/productos/duelo"}>Duelo</Link></Nav.Link>                        
                        <Nav.Link><Link to={"/productos/reencuentro"}>Reencuentro</Link></Nav.Link>                        
                        <Nav.Link><Link to={"/productos/suenios"}>Sueños</Link></Nav.Link>
                        </Nav>
                </Container> 
            
            <Link to="cart"><CartWidget/></Link> 
        
            </Navbar>
        </header>
                
    )
}