import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () => {
 
return (
    <Navbar bg="light" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{color:'gold'}}>
                <FontAwesomeIcon icon ={faBook}/> RateSphere
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    <NavLink className="nav-link" to="/" style={{ color: 'black', textDecoration: 'none' }}>
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/watchList" style={{ color: 'black', textDecoration: 'none' }}>
                        Watch List
                    </NavLink>
      
                </Nav>
                <Button style={{ color: 'white', backgroundColor: 'black', borderColor: 'black' }} className="me-2"> Login </Button>

                <Button style={{ color: 'black', backgroundColor: 'white', borderColor: 'black' }}>Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header