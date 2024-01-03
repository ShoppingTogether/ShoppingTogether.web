import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import cat from "../assets/images/cat.jpg";
import { ReactComponent as CartIcon } from "../assets/images/cart.svg";

export default function Header() {
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Row className="w-100">
          <Col className="order-2 order-lg-1" xs={3}>
            <Navbar.Brand href="/">Shopping Together</Navbar.Brand>
          </Col>
          <Col className="order-1 order-lg-2" xs={2} lg={4}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/receipt">Receipts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="order-3" xs={7} lg={5}>
            <Nav className="d-flex flex-row justify-content-end">
              <Nav.Link href="/cart" className="px-10">
                <CartIcon />
              </Nav.Link>
              <Navbar.Text className="px-10">
                <Image className="profile_image" src={cat} roundedCircle />
              </Navbar.Text>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
