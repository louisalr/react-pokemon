import React from "react";

import { Navbar, Nav, Container} from 'react-bootstrap';

export default function Navigation(){
    
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Page d'accueil</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/chercher"> Chercher un pokémon</Nav.Link>
                    <Nav.Link href="/poster"> Ajouter un pokémon</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}