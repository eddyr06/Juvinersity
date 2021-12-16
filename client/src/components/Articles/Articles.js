import React, { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle/SingleArticle";
import { useDispatch } from "react-redux";
import { GetAllArticles } from "../../actions/articlesAct";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Articles = () => {
  const [currentId, setCurrentId] = useState(null);
  const articles = useSelector((state) => state.articles);
  //state.articles come from the reducers in index.js that were created
  const dispatch = useDispatch();
  // console.log(currentId);

  useEffect(() => {
    dispatch(GetAllArticles());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Row className="mb-3 pt-3">
        <Col lg="10" className="text-white fs-2">
          Articles
        </Col>
        <Col className="pb-4" lg="2">
          <Link
            to="/CreateArticle"
            props={{ setCurrentId: setCurrentId, currentId: currentId }}
          >
            <Button variant="secondary">Create New Article</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        {articles.map((article) => {
          return (
            <Card
              className="mb-3"
              bg="light"
              border="secondary"
              style={{ width: "70rem" }}
            >
              <Card.Header>
                <Link to={`/SingleArticle/${article._id}`}>
                  <Card.Title>{article.title}</Card.Title>
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Footer>{article.createdAt}</Card.Footer>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Articles;
