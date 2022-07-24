import { combineReducers } from "redux";
import checkoutReducer from "./checkout";
import authReducer from "./auth";

const rootReducer = combineReducers({
  checkoutState: checkoutReducer,
  authState: authReducer,
});

export default rootReducer;
