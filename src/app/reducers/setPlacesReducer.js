import { SET_PLACES_TO_RESERVATION } from "../types";

export const setPlacesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_PLACES_TO_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};
