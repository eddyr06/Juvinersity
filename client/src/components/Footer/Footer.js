import React from "react";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="footer-section pb-2">
      <Row className="pt-5 mt-3 text-white-50">
        <p>
          Copyright © 2021 <a href="#a">JuvoMOS</a>. All Rights Reserved.
          JuvoMOS™ is a registered trademark.
        </p>
      </Row>
      <Row className="text-white fs-5 pt-1">
        <Col xs={6} md={4} lg={4} xl={4}>
          Company
        </Col>
        <Col xs={6} md={4} lg={4} xl={4}>
          Learn & Get Help
        </Col>
        <Col xs={6} md={4} lg={4} xl={4}>
          Social
        </Col>
      </Row>

      <Row className="fs-6 pb-1">
        <Col xs={6} md={4} lg={4} xl={4}>
          <ul>
            <li>
              <a href="#a">About Us</a>
            </li>
            <li>
              <a href="#a">Careers</a>
            </li>
            <li>
              <a href="#a">Terms & Conditions</a>
            </li>
            <li>
              <a href="#a">Privacy Policy</a>
            </li>
          </ul>
        </Col>
        <Col xs={6} md={4} lg={4} xl={4}>
          <ul>
            <li>
              <a href="#a">Courses</a>
            </li>
            <li>
              {" "}
              <a href="#a">Webinars</a>
            </li>
            <li>
              {" "}
              <a href="#a">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#a">Ebooks</a>
            </li>
          </ul>
        </Col>
        <Col xs={6} md={4} lg={4} xl={4}>
          <ul>
            <li>
              {" "}
              <a href="#a">Youtube</a>
            </li>
            <li>
              {" "}
              <a href="#a">Facebook</a>
            </li>
            <li>
              {" "}
              <a href="#a">Instagram</a>
            </li>
            <li>
              {" "}
              <a href="#a">Linked In</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
