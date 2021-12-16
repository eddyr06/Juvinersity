import React, { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle/SingleArticle";
import { useDispatch } from "react-redux";
import { GetAllArticles } from "../../actions/articlesAct";
import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Articles = () => {
  const [currentId, setCurrentId] = useState(null);
  const articles = useSelector((state) => state.articles);
  //state.articles come from the reducers in index.js that were created
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllArticles());
  }, [currentId, dispatch]);

  return (
    <div className="article-section">
      <div className="articles">
        {articles.map((article) => {
          return (
            <Link to={{ pathname: `/SingleArticle/${article._id}` }}>
              <h3>Title: {article.title}</h3>
              <p>Description: {article.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="create-article">
        <Link
          to="/CreateArticle"
          props={{ setCurrentId: setCurrentId, currentId: currentId }}
        >
          Create New Article
        </Link>
        {/* <CreateArticle setCurrentId={setCurrentId} currentId={currentId} /> */}
      </div>
    </div>
  );
};

export default Articles;
