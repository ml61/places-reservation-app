import {
  GET_SEATS,
  SUBMIT_FORM,
  SET_PLACES_TO_RESERVATION,
  NORMALIZED_HALL_SCHEME,
} from "../types";

import { makeNormalizedHallScheme } from "../../features/helperFunctions";

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
  } catch (err) {
    console.log(err);
  }
};

export const formSubmitAction = (formState) => {
  return { type: SUBMIT_FORM, payload: formState };
};

export const setPlacesToReservation = (selectedPlaces) => {
  return { type: SET_PLACES_TO_RESERVATION, payload: selectedPlaces };
};
