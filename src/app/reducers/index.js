import { combineReducers } from "redux";
import { requestReducer } from "./requestsReducer";
import { formReducer } from "./formReducer";
import { setPlacesReducer } from "./setPlacesReducer";
import { normalizedSchemeReducer } from "./normalizedSchemeReducer";

export default combineReducers({
  allSeats: requestReducer,
  formState: formReducer,
  selectedPlaces: setPlacesReducer,
  normalizedScheme: normalizedSchemeReducer,
});
