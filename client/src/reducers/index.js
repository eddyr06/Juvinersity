import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
  articles: mainReducer,
  faqs: mainReducer,
  users: mainReducer,
  auth: authReducer,
});
