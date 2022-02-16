import React from "react";
import {Container, Navbar, NavDropdown, Nav, Form, FormControl,} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

export default function (){
        return (
            <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Comic Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action">Inicio</Nav.Link>
            <Nav.Link href="#action1">Marvel</Nav.Link>
            <Nav.Link href="#action2">DC Comics</Nav.Link>
            <NavDropdown title="Comics Variados" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Image Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Comics Independientes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action5">Mangas</Nav.Link>
            <Nav.Link href="#action6">Merchandising</Nav.Link>
            <Nav.Link href="#action7">Contactanos</Nav.Link>
          </Nav>
          <CartWidget/>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-4"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
        )
    }
    
