import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addPlaceToReservation,
  deletePlaceFromReservation,
} from "../app/actions";

function SingleSeat({ selectedPlaces, id, reserved, doesExist, cords }) {
  const isCurrentSeatSelected = selectedPlaces
    .map((seat) => seat.id)
    .includes(id);
  const dispatch = useDispatch();

  const addToSelected = () => {
    dispatch(addPlaceToReservation({ id, cords }));
  };
  const deleteFromSelected = () => {
    dispatch(deletePlaceFromReservation({ id, cords }));
  };

  const onPlaceClick = () => {
    if (reserved) return;
    isCurrentSeatSelected ? deleteFromSelected() : addToSelected();
  };

  return (
    <div
      onClick={onPlaceClick}
      className={`col seat mx-1 ${reserved ? "reserved" : ""} ${
        isCurrentSeatSelected ? "selected" : ""
      } ${doesExist ? "" : "not-exist"}`}
    ></div>
  );
}

export default SingleSeat;
