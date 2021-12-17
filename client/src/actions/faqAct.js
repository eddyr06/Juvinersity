import * as api from "../api";
import {
  CREATE,
  DELETE,
  UPDATE,
  FETCH_ALL,
  FETCH,
  LIKE,
} from "../constants/actionTypes.js";

//these are the actions that are called when you dispatch anything through redux
//in this case it is the getAllArticles action
export const GetAllFaqs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFaqs();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFaq = (id) => async (dispatch) => {
  try {
    await api.getFaq(id);
    dispatch({ type: FETCH, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createFaq = (post) => async (dispatch) => {
  try {
    const { data } = await api.createFaq(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("we are here", error.message);
  }
};

export const updateFaq = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateFaq(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editFaq = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFaq = (id) => async (dispatch) => {
  try {
    await api.deleteFaq(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
