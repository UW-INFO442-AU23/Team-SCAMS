import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

export default function NavbarComponent(props) {
    return (
        <Navbar expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={Link} to='home'>
                    <img src="logo.png" alt="go green logo" width="160" height="90" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link className='nav-link' as={NavLink} to="/home" >Home</Nav.Link>
                        <Nav.Link className='nav-link' as={NavLink} to='/emissions_calculator'>Emissions Calculator</Nav.Link>
                        <Nav.Link className='nav-link' as={NavLink} to='/resources'>Resources</Nav.Link>
                        <Nav.Link className='nav-link' as={NavLink} to='/knowledge_quiz'>Knowledge Quiz</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}