import {
  GET_SEATS,
  SUBMIT_FORM,
  SET_PLACES_TO_RESERVATION,
  NORMALIZED_HALL_SCHEME,
  ADD_PLACE_TO_RESERVATION,
  DELETE_PLACE_FROM_RESERVATION,
  ARE_THERE_ENOUGH_PLACES,
  IS_HALL_FULL,
} from "../types";

import {
  makeNormalizedHallScheme,
  areThereAnyFreePlaces,
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
    dispatch({ type: IS_HALL_FULL, payload: areThereAnyFreePlaces(data) });
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

export const addPlaceToReservation = (id) => {
  return { type: ADD_PLACE_TO_RESERVATION, payload: id };
};
export const deletePlaceFromReservation = (id) => {
  return { type: DELETE_PLACE_FROM_RESERVATION, payload: id };
};
