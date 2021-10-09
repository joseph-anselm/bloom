import React from "react";
import styles from "../styles/header2.module.css";
import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import about from "../pages/about";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import * as Icon from "react-bootstrap-icons";
import * as IconName from "react-icons/gi";

Header2.title;
Header2.slogan;
Header2.pagelink;
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
        <p>{Header2.slogan}</p>
        <div
          style={{
            textAlign: "center",
            display: "block",
            margin: "0 auto",
            zIndex: "50",
          }}
        >
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="/" className={styles.breadcrumb}>
              <span>
                <IconName.GiHouse
                  size={15}
                  style={{
                    color: "#6DD8FF",
                    marginRight: "3px",
                  }}
                />
              </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active
              style={{
                color: "#016DA4",
                marginRight: "3px",
                fontWeight: "400",
              }}
            >
              {Header2.title}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
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
