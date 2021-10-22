import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                <Nav className="me-auto">
                    <Link to="/home" >
                        Home
                    </Link>
                    <Link to="/about" >
                        About
                    </Link>
                    <Link to="/contact" >
                        Contact
                    </Link>
                    <Link to="/student" >
                        Student
                    </Link>
                    <Link to="/c1" >
                        Prop type
                    </Link>

                </Nav>
            </Container>
        </Navbar>
    )
}
