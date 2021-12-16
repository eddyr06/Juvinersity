import * as api from "../api";
import { CREATE, UPDATE } from "../constants/actionTypes.js";

export const getUser = (id) => async (dispatch) => {
  try {
    let result = await api.getUser(id);

    dispatch({ type: CREATE, payload: result.data });
    //once it received the id from user.js it hits the recuder
    // the reducer GET returns the action.payload and then
    //asigns the result to the payload inside the dispatch
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (profile) => async (dispatch) => {
  try {
    const { data } = await api.createFaq(profile);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("we are here", error.message);
  }
};

export const updateUser = (id, profile) => async (dispatch) => {
  try {
    const { data } = await api.updateFaq(id, profile);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (id, profile) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE, payload: profile });
  } catch (error) {
    console.log(error);
  }
};
