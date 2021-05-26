import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPlacesToReservation } from "../app/actions";
import {
  areThereAnyFreePlaces,
  setAnyPlaces,
  setPlacesNextToEachOther,
} from "../features/helperFunctions";
import HallScheme from "../components/HallScheme";

function ReservationSchemePage() {
  const { isHallFull } = useSelector((state) => state.interface);
  const [isPlacesEnough, setIsPlacesEnough] = useState(true);
  const { reservationPlacesQuantity, isPlacesNextToOneAnother } = useSelector(
    (state) => state.formState
  );
  const selectedPlaces = useSelector((state) => state.selectedPlaces);
  const allSeats = useSelector((state) => state.allSeats);
  const normalizedScheme = useSelector((state) => state.normalizedScheme);
  const dispatch = useDispatch();

  const setDefaultPlaces = () => {
    if (selectedPlaces) return;
    isPlacesNextToOneAnother
      ? dispatch(
          setPlacesToReservation(
            setPlacesNextToEachOther(allSeats, reservationPlacesQuantity)
          )
        )
      : dispatch(
          setPlacesToReservation(
            setAnyPlaces(allSeats, reservationPlacesQuantity)
          )
        );
  };

  useEffect(() => {
    if (!isHallFull) setDefaultPlaces();

    if (selectedPlaces.length < reservationPlacesQuantity)
      setIsPlacesEnough(false);
    const timerId = setTimeout(() => {
      setIsPlacesEnough(true);
    }, 5000);
    console.log(selectedPlaces);
    return () => clearTimeout(timerId);
  }, []);

  return (
    // <>
    //   {!isPlacesEnough && (
    //     <div>There is not enough places for your req. Try select manually</div>
    //   )}
    //   <div>Mahon</div>
    //   <div>{reservationPlacesQuantity}</div>
    //   <div>{isPlacesNextToOneAnother ? "nextTo" : "random"}</div>
    // </>
    <HallScheme
      normalizedScheme={normalizedScheme}
      selectedPlaces={selectedPlaces}
    />
  );
}

export default ReservationSchemePage;
