import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function ShoppingNav() {
  return (
    <Navbar expand="lg" className="p-3">
      <Navbar.Brand href="#home">Shopping Together</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Receipts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
