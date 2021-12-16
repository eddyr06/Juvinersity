import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../images/logo-dark.svg";
import juvoffice from "../../images/juvoffice.jpg";
import CarouselComp from "../Carousel/CarouselComp";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="home">
      <div className="home-header">
        <h1>Welcome to</h1>
        <img src={logo} alt="logo" />
        <p>
          Search from our library of lessons and learn new skills for Juvo
          Platforms
        </p>
      </div>
      <Container>
        <CarouselComp />
      </Container>
      <div>
        <h2>Menu</h2>
      </div>
      <Row xs={1} md={2} lg={2} className="pt-3">
        <Col>
          <Link to="/Topics">
            <Card>
              <Card.Img src={juvoffice} alt="juvoffice" />
              <Card.Title className="text-center">Topics</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/FAQs">
            <Card>
              <Card.Img src={juvoffice} alt="juvoffice" />
              <Card.Title className="text-center">FAQs</Card.Title>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

// /Users/eddy/Programming/juniversity/client/src/images/logo.svg
