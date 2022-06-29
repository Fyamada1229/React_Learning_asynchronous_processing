import { combineReducers } from "redux";
import countReducer from "./countReducer";
import postsReducer from "./postsReducer";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  countReducer,
  postsReducer,
  form: reduxFormReducer,
});
