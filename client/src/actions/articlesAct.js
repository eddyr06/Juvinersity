import * as api from "../api";
import {
  CREATE,
  DELETE,
  UPDATE,
  FETCH_ALL,
  FETCH,
} from "../constants/actionTypes.js";

//these are the actions that are called when you dispatch anything through redux
//in this case it is the getAllArticles action
export const GetAllArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAnArticle = (id) => async (dispatch) => {
  try {
    await api.getAnArticle(id);
    dispatch({ type: FETCH, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    console.log("this is data", article);
    const { data } = await api.createArticle(article);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("we are here", error.message);
  }
};

export const updateArticle = (id, article) => async (dispatch) => {
  try {
    const { data } = await api.updateArticle(id, article);
    console.log("this is data", data);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editArticle = (id, article) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE, payload: article });
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await api.deleteArticle(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
