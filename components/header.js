import React from "react";
import styles from "../styles/header.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <div className={styles.hero}>
        <h1>
          <br />
          Bloom Marine
          <br />
          <span>We represent excellence always</span>
        </h1>
        <p>
          With a strong focus on professionalism and quality delivery at all
          times.
        </p>
        <div className={styles.headerbtn}>
          <Button
            size="lg"
            variant="primary"
            style={{
              borderRadius: "2rem",
              background: "#6AD8FC",
              color: "#000000",
              border: "none",
              display: "block",
              padding: "0.6rem 1.5rem",
              marginTop: "1rem",
              marginBottom: "4rem",
              textAlign: "center",
              zIndex: "15",
            }}
          >
            Leave a request
          </Button>
        </div>
      </div>
    </div>
  );
}
