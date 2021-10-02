import React from "react";
import Image from "next/image";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "../styles/footer.module.css";
import * as Icon from "react-bootstrap-icons";
import * as IconName from "react-icons/gi";
import * as Ai from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className={styles.copyright}>
        <Container>
          <Row>
            <Col xs={12} md={6} className={styles.copyright1}>
              <p>&copy; 2021 - 2023</p>
              <p>BLOOM MARINE LIMITED</p>
            </Col>
            <Col xs={12} md={6} className={styles.copyright2}>
              <IconName.GiMedal size={30} style={{ marginRight: "1rem" }} />
              <IconName.GiCheckedShield
                size={30}
                style={{ marginRight: "1rem" }}
              />
              <IconName.GiShipWheel size={30} style={{ marginRight: "1rem" }} />
              <Ai.AiFillSafetyCertificate
                size={30}
                style={{ marginRight: "1rem" }}
              />
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Image
                variant="top"
                alt="footer logo"
                src="/logo1.png"
                width={80}
                height={130}
              />
            </Col>
            <Col xs={12} md={3} className={styles.footerlinks}>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
              </ul>
            </Col>
            <Col xs={12} md={3} className={styles.footerlinks}>
              <ul>
                <li>Contact</li>
                <li>Gallery</li>
                <li>News and Updates</li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <p>
                <Icon.TelephonePlus
                  size={20}
                  style={{ color: "#6ED8FF", marginRight: "10px" }}
                />
                <span>+2348032516519</span>
              </p>
              <p>
                <Icon.GeoFill
                  size={20}
                  style={{ color: "#6ED8FF", marginRight: "10px" }}
                />
                <span>+2348032516519</span>
              </p>
              <p>
                <Icon.EnvelopeFill
                  size={20}
                  style={{ color: "#6ED8FF", marginRight: "10px" }}
                />
                <span>+2348032516519</span>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
