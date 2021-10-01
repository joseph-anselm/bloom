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
        <p>We focus on professionalism and quality delivery always.</p>
        <Button
          size="lg"
          variant="outline-secondary"
          style={{
            borderRadius: "1rem",
            background: "#6AD8FC",
            color: "#000000",
            border: "none",
            marginTop: "1rem",
            marginBottom: "4rem",
            display: "block",
            textAlign: "center",
            width: "35%",
            zIndex: "15",
          }}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
