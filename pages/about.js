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
                create a system that seeks to provide e exceptional solutions to
                our clients and address mediocrity while offering a topnotch
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
                vitae!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, fugiat laborum.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi, culpa.
              </p>
            </Col>
            <Col xs={12} sm={{ size: 4, offset: 1 }} className={styles.col}>
              <h6>Certificates for Operations</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </Col>
            <Col xs={12} sm={{ size: 4, offset: 1 }} className={styles.col}>
              <h6>Operational Locations</h6>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.section3} fluid>
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
                    <IconName.GiShipBow size={30} />
                    <h4>Professionally Deliver</h4>
                  </div>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
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
                    <IconName.GiShipBow size={30} />
                    <h4>Testing for strenght</h4>
                  </div>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem, ipsum dolor.</p>
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
                <IconName.GiShipBow size={30} />
                <h4>Why customers choose us</h4>
              </div>
              <p className={styles.para}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                voluptate unde non temporibus quaerat porro error cum culpa,
                rerum similique, atque, dolorem earum! Accusantium dignissimos
                ratione culpa. Corrupti pariatur dignissimos fugit autem
                adipisci veniam quas mollitia earum soluta quo, asperiores
                fugiat et ut molestiae consequatur sequi animi sit tenetur
                officia!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
