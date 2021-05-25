import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { formSubmitAction } from "../app/actions";

function StartForm() {
  const placesQuantity = useRef(null);
  const isPlacesNextToOneAnother = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      formSubmitAction({
        reservationPlacesQuantity: placesQuantity.current.value * 1,
        isPlacesNextToOneAnother: isPlacesNextToOneAnother.current.checked,
      })
    );
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
            ref={placesQuantity}
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
