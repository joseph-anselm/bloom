import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import * as Icon from "react-bootstrap-icons";
import * as IconName from "react-icons/gi";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bloom Marine</title>
        <meta name="description" content="Bloom Marine company" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>

      <section className={styles.section1}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>About our team</h2>
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
                products supply to the Upstream and Downstream oil and gas
                sector. We constantly focus on delivering cutting edge solutions
                and services always
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Image
                alt="Team"
                src="/bloom-banner1.jpg"
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
                essentially focused on making your offshore experience a
                stressfree operation
              </p>
            </Col>
          </Row>
          <Row className={styles.section2tabs}>
            <Col xs={12} md={{ size: 3, offset: 1 }} className={styles.tabs}>
              <div>
                <span>
                  <IconName.GiShipBow size={70} />
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
                  <IconName.GiMeal size={70} />
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
              <h1>Our Commitment</h1>
              <p>
                Our whole business process is designed to making sure all
                principles and guidelines for a smooth operations is strictly
                adhered leaving nothing to doubts or mediocrity
              </p>
            </Col>
          </Row>
          <Row className={styles.card}>
            <Card
              style={{
                width: "18rem",
                margin: "1rem .2rem",
                borderRadius: "1em",
                padding: "0",
              }}
            >
              <Image
                variant="top"
                alt="Team"
                src="/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Integrity</Card.Title>
                <Card.Text>
                  We put integrity first in our business transactions, it
                  remains a key factor and highly relevant in various idea
                  conceptions to executions.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

            <Card
              style={{ width: "18rem", margin: "1rem .2rem", padding: "0" }}
            >
              <Image
                variant="top"
                alt="Team"
                src="/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Growth</Card.Title>
                <Card.Text>
                  Strategically committed to a growth pattern ensuring we are
                  always better than our previous service delivery, also
                  introducing a unique touch in our next client&apos;s deals.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "18rem", margin: "1rem .2rem", padding: "0" }}
            >
              <Image
                variant="top"
                alt="Team"
                src="/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Compliance</Card.Title>
                <Card.Text>
                  We are strongly guided by industry ethics and best practices
                  compliance protocols which is constantly reflected in all
                  business processes.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "18rem", margin: "1rem .2rem", padding: "0" }}
            >
              <Image
                variant="top"
                alt="Team"
                src="/team.jpg"
                width={450}
                height={300}
              />
              <Card.Body>
                <Card.Title>Health & Safety</Card.Title>
                <Card.Text>
                  Our highly professional and dedicated trained personnel knows
                  so well to operate only and under strict HSE policies. keeping
                  you and us safe always is a main priority.
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
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              margin: "0 auto",
              width: "30%",
              whiteSpace: "normal",
            }}
          >
            More about us
          </Button>
        </Container>
      </section>
    </div>
  );
}
