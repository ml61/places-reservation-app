import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setPlacesToReservation } from "../app/actions";
import { ARE_THERE_ENOUGH_PLACES } from "../app/types";
import {
  setAnyPlaces,
  setPlacesNextToEachOther,
} from "../features/helperFunctions";

function StartForm() {
  const reservationPlacesQuantity = useRef(null);
  const isPlacesNextToOneAnother = useRef(null);
  const allSeats = useSelector((state) => state.allSeats);

  const dispatch = useDispatch();
  const history = useHistory();

  const setDefaultPlaces = () => {
    let selectedPlaces;
    if (isPlacesNextToOneAnother.current.checked) {
      selectedPlaces = setPlacesNextToEachOther(
        allSeats,
        reservationPlacesQuantity.current.value * 1
      );
      dispatch(setPlacesToReservation(selectedPlaces));
    }
    if (!isPlacesNextToOneAnother.current.checked) {
      selectedPlaces = setAnyPlaces(
        allSeats,
        reservationPlacesQuantity.current.value * 1
      );
      dispatch(setPlacesToReservation(selectedPlaces));
    }
    selectedPlaces.length < reservationPlacesQuantity.current.value * 1
      ? dispatch({ type: ARE_THERE_ENOUGH_PLACES, payload: false })
      : dispatch({ type: ARE_THERE_ENOUGH_PLACES, payload: true });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setDefaultPlaces();
    history.push("/reservation-scheme");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-height-100vh">
      <form className="d-flex flex-column" onSubmit={onFormSubmit}>
        <div className="d-flex align-items-center mb-4">
          <label className="mx-2 min-width-7rem" htmlFor="inputPlacesQuantity">
            Liczba miejsc:
          </label>
          <input
            type="number"
            name="points"
            step="1"
            min="1"
            ref={reservationPlacesQuantity}
            className="form-control"
            id="inputPlacesQuantity"
            required
          />
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            ref={isPlacesNextToOneAnother}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Czy miejsca mają być obok siebie?
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Wybierz miejsca
        </button>
      </form>
    </div>
  );
}

export default StartForm;
