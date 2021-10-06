import React from "react";
import Header2 from "../components/header2";
import styles from "../styles/About.module.css";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-bootstrap-icons";
import * as IconName from "react-icons/gi";
Header2.title = "About Us";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, iure quasi earum id reprehenderit rem explicabo illum
                ad deserunt ratione?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione molestiae dolores vero eligendi ullam accusantium
                ducimus, corrupti cum reprehenderit soluta iste repudiandae
                neque quia ipsa? Quo quas illo harum sunt in repudiandae, iusto,
                ea libero voluptatum minima non quis quisquam recusandae.
                Sapiente voluptate aperiam nisi.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Image alt="CEO" src="/img/ceo.png" width={350} height={394} />
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
