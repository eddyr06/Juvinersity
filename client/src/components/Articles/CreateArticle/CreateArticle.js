import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle, updateArticle } from "../../../actions/articlesAct";
import { useHistory, Link } from "react-router-dom";
import { Form, Container, Row, Col, Button, Modal } from "react-bootstrap";

const CreateArticle = ({ currentId, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector((state) => state.articles);
  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    fullDescription: "",
    topic: "",
    module: "",
  });
  let topics = ["Printer", "Reports", "Menus", "Hardware", "Operations"];
  let modules = ["Point Of Sale", "Backoffice", "Admin"];
  const user = JSON.parse(localStorage.getItem("profile"));

  //finding and matching the ID with the article we are going to edit
  const article = useSelector((state) =>
    state.articles.find((a) => a._id === rest.match.params.id)
  );

  //useEffect to edit the article
  useEffect(() => {
    if (article) setArticleData(article);
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (article?._id) {
      dispatch(
        updateArticle(article?._id, {
          ...articleData,
          name: user?.result?.name,
        })
      );
    } else {
      dispatch(createArticle({ ...articleData, name: user?.result?.name }));
    }
    clear();
    history.push("/Topics");
  };

  const clear = () => {
    // setCurrentId(0);
    setArticleData({
      title: "",
      description: "",
      fullDescription: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Action Needed</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You must Sign In or Sign Up to use this function.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => history.goBack()} variant="outline-secondary">
            Go Back
          </Button>
          <Link to="/auth">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }

  return (
    <Container className="create-article">
      <Form onSubmit={handleSubmit}>
        <Form.Text className="fs-2 fw-bold text-white ">
          {article?._id ? "Editing" : "Creating"} An Article
        </Form.Text>

        <Row className="mt-4">
          <Form.Group as={Col} controlId="title" xs={7}>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              value={articleData?.title}
              onChange={(e) =>
                setArticleData({ ...articleData, title: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Topic:</Form.Label>
            <Form.Select
              defaultValue="Select a Topic"
              name="topic"
              id="topic"
              onChange={(e) => {
                setArticleData({ ...articleData, topic: e.target.value });
              }}
            >
              <option>Select a Topic</option>
              {topics.map((text) => {
                return <option value={text}>{text}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Module:</Form.Label>
            <Form.Select
              defaultValue="Select a Module"
              name="module"
              id="module"
              onChange={(e) => {
                setArticleData({ ...articleData, module: e.target.value });
              }}
            >
              <option>Select a Module</option>
              {modules.map((text) => {
                return <option value={text}>{text}</option>;
              })}
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group as={Col} className="mt-4" controlId="description">
          <Form.Label>Short Description:</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "80px" }}
            type="text"
            id="description"
            name="description"
            value={articleData?.description}
            onChange={(e) =>
              setArticleData({ ...articleData, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mt-3 pb-4" controlId="fullDescription">
          <Form.Label>Full Description:</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            type="text"
            id="fullDescription"
            name="fullDescription"
            value={articleData?.fullDescription}
            onChange={(e) =>
              setArticleData({
                ...articleData,
                fullDescription: e.target.value,
              })
            }
          />
        </Form.Group>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-1"
          type="submit"
          active
        >
          Submit
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-4"
          onClick={clear}
        >
          Clear
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-4"
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default CreateArticle;
