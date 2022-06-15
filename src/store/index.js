import { combineReducers } from "redux";
import countReducer from "./countReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  countReducer,
  postsReducer,
});
