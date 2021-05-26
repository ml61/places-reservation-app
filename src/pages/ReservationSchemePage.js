import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ARE_THERE_ENOUGH_PLACES } from "../app/types";

import HallScheme from "../components/HallScheme";
import HallIsFull from "../components/HallIsFull";

function ReservationSchemePage() {
  const { isHallFull, enoughFreePlaces } = useSelector(
    (state) => state.interface
  );
  const selectedPlaces = useSelector((state) => state.selectedPlaces);
  const normalizedScheme = useSelector((state) => state.normalizedScheme);

  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch({ type: ARE_THERE_ENOUGH_PLACES, payload: true });
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  if (isHallFull) return <HallIsFull />;

  return (
    <>
      {!enoughFreePlaces && (
        <div
          class="alert alert-danger d-flex justify-content-center"
          role="alert"
        >
          Unfortunately, we cannot find places due to your requirments. Please
          try to select the seats manually.
        </div>
      )}

      <HallScheme
        normalizedScheme={normalizedScheme}
        selectedPlaces={selectedPlaces}
      />
    </>
  );
}

export default ReservationSchemePage;
