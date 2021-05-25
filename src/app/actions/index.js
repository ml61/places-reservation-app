import { GET_SEATS } from "../types";
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
