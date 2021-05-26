import { ARE_THERE_ENOUGH_PLACES, IS_HALL_FULL } from "../types";

export const interfaceReducer = (state = null, action) => {
  switch (action.type) {
    case IS_HALL_FULL:
      return { ...state, isHallFull: action.payload };
    case ARE_THERE_ENOUGH_PLACES:
      return { ...state, enoughFreePlaces: action.payload };
    default:
      return state;
  }
};
