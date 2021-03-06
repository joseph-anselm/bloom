import React from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/menubar.module.css";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";

export default function Menubar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/" className={styles.logoimg}>
            <Image
              src="/logo.png"
              width="30"
              height="40"
              className="d-inline-block align-top logoimg"
              alt="Bloom logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Container>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/updates">News and Updates</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link></Nav.Link>
                <Nav.Link href="#" className={styles.contactinfo}>
                  <span>
                    <Icon.TelephoneForwardFill
                      size={40}
                      style={{ color: "#016DA4" }}
                    />
                  </span>
                  <div>
                    <h6>+2348052085357</h6>
                    <h6>info@bloommarine.com</h6>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
}
