import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <>
                <Navbar bg="success" variant="light" >
                    <Container >
                        <Nav className="mx-auto my-3"  >
                            <Stack direction="horizontal" gap={5}  >
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none",

                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/contactUs"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none",
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Contact Us
                                </NavLink>
                            </Stack>
                            {/* <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <Nav.Link href="/Services">Services</Nav.Link>
                            <Nav.Link href="/Blog">Blog</Nav.Link>
                            <Nav.Link href="/contactUs">Contact Us</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;