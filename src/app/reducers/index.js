import { combineReducers } from "redux";
import { requestReducer } from "./requestsReducer";

export default combineReducers({
  allSeats: requestReducer,
});
