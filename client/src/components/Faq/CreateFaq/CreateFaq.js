import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFaq, updateFaq } from "../../../actions/faqAct";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import "../styles.css";

const CreateFaq = ({ currentId, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const faqs = useSelector((state) => state.faqs);
  const [postData, setPostData] = useState({
    subject: "",
    description: "",
  });

  //finding and matching the ID with the article we are going to edit
  const post = useSelector((state) =>
    state.faqs.find((a) => a._id === rest.match.params.id)
  );

  //useEffect to edit the article
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post?._id) {
      dispatch(updateFaq(post?._id, postData));
    } else {
      dispatch(createFaq(postData));
    }
    clear();
    history.push("/FAQs");
  };

  const clear = () => {
    // setarticle._id(null);
    setPostData({
      subject: "",
      description: "",
    });
  };

  return (
    <Container className="faq-form">
      <Form onSubmit={handleSubmit}>
        <Form.Text className="fs-2 fw-bold text-white ">
          {post?._id ? "Edit" : "Create"} A Question
        </Form.Text>
        <Form.Group className="mb-3">
          <Form.Label className="mt-3">Subject:</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={postData?.subject}
            onChange={(e) =>
              setPostData({ ...postData, subject: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            type="text"
            id="description"
            name="description"
            value={postData?.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
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

export default CreateFaq;
