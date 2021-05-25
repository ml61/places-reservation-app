import { NORMALIZED_HALL_SCHEME } from "../types";

export const normalizedSchemeReducer = (state = null, action) => {
  switch (action.type) {
    case NORMALIZED_HALL_SCHEME:
      return action.payload;
    default:
      return state;
  }
};
