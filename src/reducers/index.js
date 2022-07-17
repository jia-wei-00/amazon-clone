import { combineReducers } from "redux";
import checkoutReducer from "./checkout";

const rootReducer = combineReducers({
  checkoutState: checkoutReducer,
});

export default rootReducer;
