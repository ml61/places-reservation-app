import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReservationButton() {
  const selectedPlaces = useSelector((state) => state.selectedPlaces);
  const isSelectedEmpty = selectedPlaces.length < 1;
  return (
    <Link
      to="/reservation-raport"
      type="button"
      className={`btn btn-success btn-lg ${
        isSelectedEmpty && "disabled-link"
      } `}
    >
      Rezerwuj
    </Link>
  );
}

export default ReservationButton;
