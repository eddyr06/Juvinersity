import { AUTH } from "../constants/actionTypes.js";
import * as api from "../api";

//these are the actions that are called when you dispatch anything through redux
//in this case it is the signin action
export const signIn = (formData, history) => async (dispatch) => {
  try {
    //log in user
    //this action is hitting our API with the same name of the action
    //in api/index there is the signin action exported in which
    //it hits axios and the url to post to the backend and return it
    //this gets stored in the data var.
    const { data } = await api.signIn(formData);

    //once we have the data we have to dispatch it with an action declared
    //in line 1 in our constants folder and pass the data to the reducer
    dispatch({ type: AUTH, data });

    //pushing this to the main page with the history prop that was passed

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    //sign up user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
