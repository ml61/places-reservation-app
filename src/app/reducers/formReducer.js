import { SUBMIT_FORM } from "../types";

export const formReducer = (state = null, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;

    default:
      return state;
  }
};
