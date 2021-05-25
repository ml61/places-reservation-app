import { combineReducers } from "redux";
import { requestReducer } from "./requestsReducer";
import { formReducer } from "./formReducer";
import { setPlacesReducer } from "./setPlacesReducer";

export default combineReducers({
  allSeats: requestReducer,
  formState: formReducer,
  selectedPlaces: setPlacesReducer,
});
