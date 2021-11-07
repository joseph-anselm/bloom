import React from "react";
import Header2 from "../components/header2";
import styles from "../styles/About.module.css";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import * as IconName from "react-icons/gi";
Header2.title = "About Us";
Header2.slogan = "Our Story is from a place where commitment and Passion meets";
export default function about() {
  return (
    <div>
      <section className={styles.section1}>
        <Container>
          <Row>
            <Col xs={12} md={6} className={styles.col}>
              <h1>Capt. Olufemi Otone</h1>
              <h5>CEO, Director Bloom Marine</h5>

              <p>
                Welcome to Bloom Marine website, We are a people of Passion,
                Focus, Commitment and Excellence.
              </p>
              <p>
                Capt Olufemi Otone, I am an experienced Mariner and Captain with
                skills and over 15years experience in the Nigerian Oil and Gas
                sector. worked with the industry top players and multinationals.
              </p>
              <p>
                As a certified expert Captain, I have enjoyed working with key
                players a unique opportunity that has strongly enabled me to
                create a system that seeks to provide exceptional solutions to
                our clients and avoid mediocrity while offering a topnotch
                services to our esteemed clients.
              </p>
              <p>
                <b>Feel free to reach to us today</b>{" "}
              </p>
            </Col>
            <Col xs={12} md={6} className={styles.profilecol}>
              <Image
                alt="CEO"
                src="/img/ceo.png"
                width={350}
                height={394}
                styles={{}}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section2}>
        <Container>
          <Row>
            <Col>
              <h2>Facts about us</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={{ size: 4 }} className={styles.col}>
              <h6>Our Partners</h6>
              <p>
                Our unique partnership with vendors & Manufacturers is a core
                part of our services delivery
              </p>
              <p>
                We have established corporate relationship with key players in
                the oil and gas sectors especially in Nigeria.
              </p>
              <p>
                with a key focus towards ensuring we meet client expectations
                and demands always
              </p>
            </Col>
            <Col xs={12} sm={{ size: 4, offset: 1 }} className={styles.col}>
              <h6>Certificates for Operations</h6>
              <p>Corporate Affairs Commission, Nigeria.</p>
              <p> Nigeria Maritime Administration and Safety Agency.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
            <Col xs={12} sm={{ size: 4, offset: 1 }} className={styles.col}>
              <h6>Operational Locations</h6>

              <p>Warri Delta state, Nigeria.</p>
              <p>Port harcourt, Rivers state, Nigeria.</p>
              <p>Bayelsa, Nigeria.</p>
              <p>Lagos state and other parts of Nigeria.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section3}>
        <Container>
          <Row>
            <Col>
              <h1>Why choose us</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                <Col>
                  <div
                    style={{
                      color: "#016DA4",
                      display: "flex",
                      marginBottom: "2em",
                    }}
                  >
                    <IconName.GiProgression size={30} />
                    <h4>Professionally Deliver</h4>
                  </div>
                  <p>Focused on quality service delivery.</p>
                  <p>Industry standard compliance always </p>
                  <p>Client first approach.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div
                    style={{
                      color: "#016DA4",
                      display: "flex",
                      marginBottom: "2em",
                    }}
                  >
                    <IconName.GiPowerGenerator size={30} />
                    <h4>Testing for strenght</h4>
                  </div>
                  <p>Setting the Pace at all times.</p>
                  <p>Adopting Unique standards for best solutions</p>
                  <p>Staying updated always.</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  color: "#016DA4",
                  display: "flex",
                  marginBottom: "2em",
                }}
              >
                <IconName.GiChoice size={30} />
                <h4>Why customers choose us</h4>
              </div>
              <p className={styles.para}>
                We have set standards using outstanding and highly professional
                approach to ensure our clients gets a topnotch service delivery
                at all times.
              </p>
              <p>
                {" "}
                Our customer first approach is designed with industry leading
                professional strategies, which guarantees success whenever
                needed.
              </p>{" "}
              <p>
                {" "}
                Our team makes sure quality and excellence is never compromised
                while designing a solution for a client project
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.vision}>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <IconName.GiShipWheel
                size={70}
                style={{
                  color: "#016DA4",
                }}
              />
              <h2>Our Vision</h2>
              <p>
                Our main focus is to become leading providers of exceptional
                services and solutions to the oil and gas sector.
              </p>
            </Col>

            <Col xs={12} md={12}>
              <IconName.GiRoad size={60} className={styles.icons} />
              <h2>Our Mission</h2>
              <p>
                Dedicated towards ensuring our aim is acomplished through
                strategic operations and client satisfaction in every project
                delivery. our corporate effort is completely centered on
                achieveing excellence always{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
