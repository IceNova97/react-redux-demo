import postRenducer from "./postReducer";
import countRenducer from "./countReducer";
import loadReducer from "./loadReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  count: countRenducer,
  post: postRenducer,
  load: loadReducer,
});

export default reducers;
