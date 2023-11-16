import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

export default function NavbarComponent(props) {
    return (
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='home'>
                    <img src="logo.png" alt="go green logo" width="150" height="150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                    <Nav.Link className='nav_click' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to='/emissions_calculator'>Emissions Calculator</Nav.Link>
                    <Nav.Link activeStyle={{color:'#006D04'}} as={Link} to='/resources'>Resources</Nav.Link>
                    <Nav.Link as={Link} to='/knowledge_quiz'>Knowledge Quiz</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}