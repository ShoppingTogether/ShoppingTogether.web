import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

import cat from "../assets/images/cat.jpg";

export default function ShoppingNav() {
  return (
    <Navbar expand="lg" className="p-3">
      <Container>
        <Row className="w-100">
          <Col className="order-2 order-lg-1" xs={3}>
            <Navbar.Brand href="#home">Shopping Together</Navbar.Brand>
          </Col>
          <Col className="order-1 order-lg-2" xs={2} lg={4}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Receipts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="order-3" xs={7} lg={5}>
            <Nav className="d-flex flex-row justify-content-end">
              <Nav.Link href="#home" className="px-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  className="bi bi-basket"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                </svg>
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
