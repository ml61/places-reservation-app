import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ARE_THERE_ENOUGH_PLACES } from "../app/types";

import HallScheme from "../components/HallScheme";
import HallIsFullAlert from "../components/HallIsFullAlert";
import NotEnoughPlacesAlert from "../components/NotEnoughPlacesAlert";

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

  return (
    <>
      {isHallFull ? (
        <HallIsFullAlert />
      ) : (
        !enoughFreePlaces && <NotEnoughPlacesAlert />
      )}
      <HallScheme
        normalizedScheme={normalizedScheme}
        selectedPlaces={selectedPlaces}
      />
    </>
  );
}

export default ReservationSchemePage;
