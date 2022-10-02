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
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faBook,
  faCoffee,
  faContactCard,
  faGears,
  faHouse,
  faImages,
  faInfo,
  faInfoCircle,
  faPersonCircleCheck,
  faPersonCirclePlus,
  faUserCircle,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";

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
              <Nav className="mx-auto">
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faHouse} className={styles.faicon} />
                  Home
                </Nav.Link>
                <Nav.Link href="/about">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className={styles.faicon}
                  />
                  About us
                </Nav.Link>
                <Nav.Link href="/services">
                  <FontAwesomeIcon icon={faGears} className={styles.faicon} />
                  Services
                </Nav.Link>
                <Nav.Link href="/gallery">
                  {" "}
                  <FontAwesomeIcon
                    icon={faImages}
                    className={styles.faicon}
                  />{" "}
                  Gallery
                </Nav.Link>
                <Nav.Link href="/updates">
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className={styles.faicon}
                  />
                  News and Updates
                </Nav.Link>
                <Nav.Link href="/contact">
                  <FontAwesomeIcon
                    icon={faContactCard}
                    className={styles.faicon}
                  />
                  Contact
                </Nav.Link>
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
