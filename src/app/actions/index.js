import {
  GET_SEATS,
  SET_PLACES_TO_RESERVATION,
  NORMALIZED_HALL_SCHEME,
  ADD_PLACE_TO_RESERVATION,
  DELETE_PLACE_FROM_RESERVATION,
  IS_HALL_FULL,
} from "../types";

import {
  makeNormalizedHallScheme,
  isHallFull,
} from "../../features/helperFunctions";

import axios from "axios";

export const getAllSeats = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/seats");
    const { data } = res;
    dispatch({ type: GET_SEATS, payload: data });
    dispatch({
      type: NORMALIZED_HALL_SCHEME,
      payload: makeNormalizedHallScheme(data),
    });
    dispatch({ type: IS_HALL_FULL, payload: isHallFull(data) });
  } catch (err) {
    console.log(err);
  }
};

export const setPlacesToReservation = (selectedPlaces) => {
  return { type: SET_PLACES_TO_RESERVATION, payload: selectedPlaces };
};

export const addPlaceToReservation = (seat) => {
  return { type: ADD_PLACE_TO_RESERVATION, payload: seat };
};
export const deletePlaceFromReservation = (seat) => {
  return { type: DELETE_PLACE_FROM_RESERVATION, payload: seat };
};
