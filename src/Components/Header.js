import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from './logo192.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {
    render(){
        return(
            <div>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> My site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="d-inline mx-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                </Routes>
            </Router>
        </div>
        )
    }
}