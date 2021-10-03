import React from "react";
import Header2 from "../components/header2";
import styles from "../styles/About.module.css";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import Image from "next/image";
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
              <Image alt="CEO" src="/img/logo1.png" width={233} height={377} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.section2}>
        <Container>
          <Row>
            <h2>Facts about us</h2>
          </Row>

          <Row>
            <Col xs={12} sm={{ size: 3, offset: 1 }} className={styles.col}>
              <h6>Our Partners</h6>
            </Col>
            <Col xs={12} sm={{ size: 3, offset: 1 }} className={styles.col}>
              <h6>Certificates for Operations</h6>
            </Col>
            <Col xs={12} sm={{ size: 3, offset: 1 }} className={styles.col}>
              <h6>Operational Locations</h6>
            </Col>
            <Col xs={12} sm={{ size: 3, offset: 1 }} className={styles.col}>
              <h6>Operational Locations</h6>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
