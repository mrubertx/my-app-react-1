import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar =() => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
           <Navbar.Brand>COMIC STORE</Navbar.Brand>
              <Nav className="me-auto">
                <NavLink className="nav-link text-light" to={"/"}>Inicio</NavLink>
                <NavLink className="nav-link text-light" to={"/category/marvel"}>Marvel</NavLink>
                <NavLink className="nav-link text-light" to={"/category/dccomics"}>DC Comics</NavLink>
              </Nav>
              <CartWidget/>
           </Container>
      </Navbar>
    </div>
  )
}

export default NavBar