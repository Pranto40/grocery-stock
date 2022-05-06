import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { auth } from '../../Firebase/firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar className='sticky-top' style={{backgroundColor: '#AAFF00'}} collapseOnSelect expand="lg">
            <Container>
            <Link className="navbar-brand" to="/">Grocery Stock</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <CustomLink className="nav-link active" aria-current="page" to="/home">Home</CustomLink>
                <CustomLink className="nav-link" to="/InventoryItems">Inventory Items</CustomLink>
                <CustomLink className="nav-link" to='/manageInventories'>Manage Inventories</CustomLink>
                
                {
                    user && <>
                    <CustomLink className="nav-link" to='/addProduct'>Add item</CustomLink>
                    </>
                }
                {
                    user ? (
                        <CustomLink className="nav-link" to='' onClick={() => signOut(auth)}>Logout</CustomLink>
                    ) : (
                        <CustomLink className="nav-link" to="/login">Login</CustomLink>
                    )
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
            <ToastContainer />
        </Navbar>
    );
};

export default Header;