import {
  SET_PLACES_TO_RESERVATION,
  ADD_PLACE_TO_RESERVATION,
  DELETE_PLACE_FROM_RESERVATION,
} from "../types";

export const setPlacesReducer = (state = null, action) => {
  switch (action.type) {
    case SET_PLACES_TO_RESERVATION:
      return action.payload;
    case ADD_PLACE_TO_RESERVATION:
      return [...state, action.payload];
    case DELETE_PLACE_FROM_RESERVATION:
      return state.filter((seatId) => seatId !== action.payload);
    default:
      return state;
  }
};
