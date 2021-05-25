import { GET_SEATS } from "../types";

export const requestReducer = (state = null, action) => {
  switch (action.type) {
    case GET_SEATS:
      return action.payload;

    default:
      return state;
  }
};
