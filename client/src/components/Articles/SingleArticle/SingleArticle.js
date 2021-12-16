import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteArticle,
  editArticle,
  getAnArticle,
} from "../../../actions/articlesAct";
import { Card, Button } from "react-bootstrap";

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

  return (
    <Card className="single-article mb-3">
      <Card.Header as="h5">Title: {article?.title}</Card.Header>
      <Card.Body>
        <Card.Text>Description: {article?.description}</Card.Text>
        <Card.Text>Full Description: {article?.fullDescription}</Card.Text>
        <Card.Text>Topic: {article?.topic}</Card.Text>
        <Card.Text>Module: {article?.module}</Card.Text>
        <Card.Text>Created At: {article?.createdAt}</Card.Text>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={() => dispatch(deleteArticle(articleId))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
