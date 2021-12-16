import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteArticle,
  editArticle,
  getAnArticle,
} from "../../../actions/articlesAct";
import { Container, Button, Card, Stack, Row, Col } from "react-bootstrap";

const SingleArticle = ({ article = {}, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  article = useSelector((state) => state.articles[0]);
  const articleId = article?._id;
  const history = useHistory();
  const [articleData, setArticleData] = useState({
    title: article?.title,
    description: article?.description,
    fullDescription: article?.fullDescription,
    topic: article?.topic,
    module: article?.module,
  });

  useEffect(() => {
    dispatch(getAnArticle(rest.match.params.id));
    setArticleData(article);
  }, [dispatch]);

  const handleEdit = (e) => {
    if (article._id) {
      console.log("this is article data", articleData);
      dispatch(editArticle(article._id, articleData));
      history.push(`/CreateArticle/${article._id}`);
    }
  };

  const handleDelete = (e) => {
    dispatch(deleteArticle(articleId));
    history.push("/Topics");
  };

  return (
    <Container>
      <Row className="mb-3 pt-3">
        <Col lg="10" className="text-white fs-2">
          Articles Section
        </Col>
      </Row>
      <Card>
        <Card.Header className="fs-6">
          {article?.module} - {article?.topic}
        </Card.Header>
        <Row>
          <Stack direction="horizontal" gap={5}>
            <Container>
              <Col>
                <Card.Text className="fs-5 fw-bolder text-decoration-underline">
                  {article?.title}
                </Card.Text>
              </Col>
            </Container>
            <Container>
              <Stack
                direction="horizontal"
                gap={2}
                className="col-md-5 pt-3 mx-auto fs-6"
              >
                <Row>
                  <Col>
                    <Card.Text className="fw-bold">Topic:</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>{article?.topic}</Card.Text>
                  </Col>
                </Row>
              </Stack>
              <Stack
                direction="horizontal"
                gap={2}
                className="col-md-5 pt-3 mx-auto fs-6"
              >
                <Row>
                  <Col>
                    <Card.Text className="fw-bold">Module:</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>{article?.module}</Card.Text>
                  </Col>
                </Row>
              </Stack>
            </Container>
          </Stack>
        </Row>
        <Container className="pt-5 fs-5">
          <Card.Body className="pb-5">
            <Card.Text>{article?.fullDescription}</Card.Text>
          </Card.Body>
        </Container>

        <Card.Footer>
          <Button
            active
            variant="outline-secondary"
            size="md"
            className="ms-1"
            onClick={handleEdit}
          >
            Edit
          </Button>

          <Button
            variant="outline-secondary"
            size="md"
            className="ms-4"
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            variant="outline-secondary"
            size="md"
            className="ms-4"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SingleArticle;
