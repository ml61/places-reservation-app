import { combineReducers } from "redux";
import { requestReducer } from "./requestsReducer";
import { setPlacesReducer } from "./setPlacesReducer";
import { normalizedSchemeReducer } from "./normalizedSchemeReducer";
import { interfaceReducer } from "./UIReducers";

export default combineReducers({
  allSeats: requestReducer,
  selectedPlaces: setPlacesReducer,
  normalizedScheme: normalizedSchemeReducer,
  interface: interfaceReducer,
});
