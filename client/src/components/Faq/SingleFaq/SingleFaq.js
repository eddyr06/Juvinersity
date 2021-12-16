import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteFaq, editFaq, getFaq } from "../../../actions/faqAct";
import { Card, Button } from "react-bootstrap";

const SingleFaq = ({ post, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  post = useSelector((state) => state.faqs[0]);
  const postId = post?._id;
  const history = useHistory();
  const [postData, setPostData] = useState({
    subject: post?.subject,
    description: post?.description,
  });

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

  return (
    <Card className="single-post mb-3">
      <Card.Header>Subject: {post?.subject}</Card.Header>
      <Card.Body>
        <Card.Text>Description: {post?.description}</Card.Text>
        <Button onClick={handleEdit}>Edit</Button>
        <Button className="ms-4" onClick={() => dispatch(deleteFaq(postId))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleFaq;
