import React from "react";
import styles from "../styles/header2.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../pages/about";
Header2.title;
Header2.slogan;
export default function Header2() {
  return (
    <div>
      <div className={styles.hero}>
        <h1>
          {/* <br />
          Bloom Mariner 2
          <br /> */}
          <span>{Header2.title}</span>
        </h1>
        <p>
          {Header2.slogan}
          With a strong focus on professionalism and quality delivery at all
          times.
        </p>
        {/* <Button
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
        </Button> */}
      </div>
    </div>
  );
}
