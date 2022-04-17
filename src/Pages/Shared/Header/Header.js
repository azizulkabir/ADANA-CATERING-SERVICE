import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, Collapse } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <>
                <Navbar bg="info" variant="dark" expand={true}>
                    <Container>
                        <Navbar.Brand href="/">ADANA CATERING SERVICE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    
                        <Nav className="ms-auto">
                            <Nav.Link href="home"  >Home</Nav.Link>
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="blog">Blogs</Nav.Link>
                            <Nav.Link href="contact">Contact Us</Nav.Link>

                        </Nav>
                        {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header; <h1>This is header </h1>