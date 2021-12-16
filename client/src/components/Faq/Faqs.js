import React, { useEffect, useState } from "react";
import SingleFaq from "./SingleFaq/SingleFaq";
import { useDispatch } from "react-redux";
import { GetAllFaqs } from "../../actions/faqAct";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";

const Faqs = () => {
  const [currentId, setCurrentId] = useState(null);
  const faqs = useSelector((state) => state.faqs);
  //state.articles come from the reducers in index.js that were created
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllFaqs());
  }, [currentId, dispatch]);

  return (
    <Container className="faq-section">
      <Row className="pt-3">
        <Col lg={10} className="text-white fs-2">
          FAQs
        </Col>
        <Col className="pb-4" lg={2}>
          <Link
            to="/CreateFaq"
            props={{ setCurrentId: setCurrentId, currentId: currentId }}
          >
            <Button variant="secondary">Create New Post</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {faqs.map((post) => {
          return (
            <Accordion
              className="mb-3"
              bg="light"
              border="secondary"
              style={{ width: "70rem" }}
            >
              <Accordion.Item>
                <Accordion.Header>
                  <Link to={`/SingleFaq/${post._id}`}>{post.subject}</Link>
                </Accordion.Header>
                <Accordion.Body>{post.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
      </Row>
    </Container>
  );
};

export default Faqs;
