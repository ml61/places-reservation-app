import { GET_SEATS } from "../types";
import { SUBMIT_FORM } from "../types";
import { SET_PLACES_TO_RESERVATION } from "../types";
import axios from "axios";

export const getAllSeats = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/seats");
    const { data } = res;
    dispatch({ type: GET_SEATS, payload: data });
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
