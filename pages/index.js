import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import * as Icon from "react-bootstrap-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bloom Marine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section1}>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <h2>About our Team</h2>
              <p>
                <b>
                  We pride in quality delivery, professionalism, dedication and
                  competence. With a multinational status, Its operations span
                  across Africa but predominantly Nigeria and West Africa
                  Countries.
                </b>
              </p>
              <p>
                Bloom Marine is involved in four essential lines of delivering
                solutions, which includes Jackup barges consultancy, Offshore &
                Onshore catering services, Crewing solutions and General
                products supply to the oil and gas sector. We constantly focus
                on delivering cutting edge solutions and services always
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Image
                alt="Team"
                src="/../public/img/team.jpg"
                width={450}
                height={300}
                className={styles.tabimage}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section2}>
        <Container>
          <Row className={styles.section2head}>
            <Col>
              <h1>Services Overview</h1>
              <p>
                {" "}
                We Concentrate on delivering topnotch quality services that is
                focused on making your offshore experience a stressfree
                adventure
              </p>
            </Col>
          </Row>
          <Row className={styles.section2tabs}>
            <Col xs={12} md={{ size: 3, offset: 1 }} className={styles.tabs}>
              <div>
                <span>
                  <Icon.ConeStriped size={70} />
                </span>

                <p>JACK UP BARGE RENTAL & CONSULTATIONS</p>
              </div>
            </Col>
            <Col
              xs={12}
              md={{ size: 3, offset: 1 }}
              className={styles.tabs}
              offset-2
            >
              <div>
                <span>
                  <Icon.InboxesFill size={70} />
                </span>
                <p>OFFSHORE & ONSHORE CATERING</p>
              </div>
            </Col>
            <Col xs={12} md={{ size: 3, offset: 1 }} className={styles.tabs}>
              <div>
                <span>
                  <Icon.PeopleFill size={70} />
                </span>
                <p>QUALITY CREWING SOLUTIONS</p>
              </div>
            </Col>
            <Col xs={12} md={{ size: 3, offset: 1 }} className={styles.tabs}>
              <div>
                <span>
                  <Icon.CollectionFill size={70} />
                </span>
                <p>GENERAL SUPPLIES & MERCHANDISE</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.section2btn}>
          <Button size="lg" variant="outline-secondary">
            <a href="">Leave a request</a>{" "}
          </Button>
        </div>
      </section>

      <section className={styles.section3}>
        <Container fluid>
          <Row className={styles.section3head}>
            <Col>
              <h1>Gallery</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam assumenda et repellat natus dolor labore vero expedita
                nam amet ut.
              </p>
            </Col>
          </Row>
          <Row>
            <Card
              style={{
                width: "18rem",
                margin: "1rem .2rem",
                borderRadius: "1em",
              }}
            >
              <Image
                variant="top"
                alt="Team"
                src="/../public/img/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "1rem .2rem" }}>
              <Image
                variant="top"
                alt="Team"
                src="/../public/img/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "1rem .2rem" }}>
              <Image
                variant="top"
                alt="Team"
                src="/../public/img/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "1rem .2rem" }}>
              <Image
                variant="top"
                alt="Team"
                src="/../public/img/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Button
            variant="primary"
            style={{
              borderRadius: "1rem",
              background: "#6ED8FF",
              color: "#000000",
              border: "none",
              marginTop: "3rem",
              marginBottom: "5rem",
              display: "block",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto",
              width: "25%",
            }}
          >
            More Images
          </Button>
        </Container>
      </section>
    </div>
  );
}
