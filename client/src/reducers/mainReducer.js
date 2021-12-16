/* eslint-disable import/no-anonymous-default-export */

import {
  CREATE,
  DELETE,
  UPDATE,
  FETCH_ALL,
  FETCH,
  GET,
} from "../constants/actionTypes.js";

const mainReducer = (data = [], action) => {
  switch (action.type) {
    case FETCH:
      return data.filter((data) => data._id === action.payload);
    case DELETE:
      return data.filter((data) => data._id !== action.payload);
    case UPDATE:
      return data.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...data, action.payload];
    case GET:
      //once the reduer gets hit it stores all the data into the data component
      //that is no longer empty
      return action.payload;

    default:
      return data;
  }
};

export default mainReducer;
