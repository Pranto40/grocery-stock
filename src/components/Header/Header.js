import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar style={{backgroundColor: '#AAFF00'}} collapseOnSelect expand="lg">
            <Container>
            <Link className="navbar-brand" to="/">Grocery Stock</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink>
                <CustomLink className="nav-link" to="/fa">Pricing</CustomLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;