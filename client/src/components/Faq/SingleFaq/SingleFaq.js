import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteFaq, editFaq, getFaq } from "../../../actions/faqAct";
import { Card, Button, Container, Row, Col, Stack } from "react-bootstrap";

const SingleFaq = ({ post, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  post = useSelector((state) => state.faqs[0]);
  const postId = post?._id;
  const history = useHistory();
  const [postData, setPostData] = useState({
    subject: post?.subject,
    description: post?.description,
  });
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getFaq(rest.match.params.id));
    setPostData(post);
  }, [dispatch]);

  const handleEdit = (e) => {
    if (postId) {
      dispatch(editFaq(postId, postData));
      history.push(`/CreateFaq/${postId}`);
    }
  };

  const handleDelete = (e) => {
    dispatch(deleteFaq(postId));
    history.push(`/FAQs`);
  };
  return (
    <Container>
      <Row className="mb-3 pt-3">
        <Col lg="10" className="text-white fs-2">
          FAQs
        </Col>
      </Row>
      <Card>
        <Card.Header className="fs-6">
          <Stack direction="horizontal" gap={3}>
            <div>{post?.subject}</div>
            <div className="ms-auto">
              <Button onClick={() => history.goBack()} variant="secondary">
                X
              </Button>
            </div>
          </Stack>
        </Card.Header>
        <Container>
          <Card.Body>
            <Card.Text>{post?.description}</Card.Text>
          </Card.Body>
        </Container>

        {user?.result?.name && (
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
        )}
      </Card>
    </Container>
  );
};

export default SingleFaq;
