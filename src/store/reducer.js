import { combineReducers } from "redux";

// import storyReducer from "./reducers/storySlice";
import userReducer from "./reducers/userSlice";
import pageReducer from "./reducers/pageSlice";

const rootReducer = combineReducers({
  user: userReducer,
  page: pageReducer,
});

export default rootReducer;
