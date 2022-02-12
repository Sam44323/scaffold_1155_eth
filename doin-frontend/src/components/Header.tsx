import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" expand="xxl">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "#fff",
          }}
        >
          Doin NFT
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            style={{
              color: "white",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{
              color: "white",
            }}
          >
            Link
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="justify-content-end flex-grow-1 pe-3">
        <Button variant="primary">Connect</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
