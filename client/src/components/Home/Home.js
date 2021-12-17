import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../images/logo-dark.svg";
import juvoffice from "../../images/juvoffice.jpg";
import CarouselComp from "../Carousel/CarouselComp";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="home">
      <div className="home-header">
        <h1 className="text-white fs-1">Welcome to</h1>
        <Image className="pt-3" fluid src={logo} alt="logo" />
        <p className="ms-5 ps-5 text-white">
          Search from our library of lessons and learn new skills for Juvo
          Platforms
        </p>
      </div>
      <Container className="pt-4">
        <CarouselComp />
      </Container>
      <div>
        <h2 className="text-white" style={{ textAlign: "center" }}>
          Menu
        </h2>
      </div>
      <Row xs={1} md={2} lg={2} className="pt-3">
        <Col>
          <Link to="/Topics">
            <Card className="hovereffect">
              <img src={juvoffice} alt="juvoffice" />
              <div className="overlay">
                <h2>Topics</h2>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/FAQs">
            <Card className="hovereffect">
              <img src={juvoffice} alt="juvoffice" />
              <div className="overlay">
                <h2>FAQs</h2>
              </div>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

// /Users/eddy/Programming/juniversity/client/src/images/logo.svg
