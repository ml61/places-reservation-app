import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setPlacesToReservation } from "../app/actions";

function ReservationSchemePage() {
  const [isThereEnoughPlaces, setIsThereEnoughPlaces] = useState(true);
  const { reservationPlacesQuantity, isPlacesNextToOneAnother } = useSelector(
    (state) => state.formState
  );
  const selectedPlaces = useSelector((state) => state.selectedPlaces);

  const allSeats = useSelector((state) => state.allSeats);

  const dispatch = useDispatch();

  const setDefaultPlaces = () => {
    const defaultPlaces = allSeats
      .filter((seat) => !seat.reserved)
      .slice(0, reservationPlacesQuantity);
    if (defaultPlaces.length < reservationPlacesQuantity)
      setIsThereEnoughPlaces(false);
    dispatch(setPlacesToReservation(defaultPlaces));
  };

  const setPlacesNextToEachOther = () => {
    const indexOfFirstFreePlace = allSeats.findIndex((seat) => !seat.reserved);
    let defaultPlacesNextToEachOther = [allSeats[indexOfFirstFreePlace]];
    for (let i = indexOfFirstFreePlace + 1; i < allSeats.length; i++) {
      if (defaultPlacesNextToEachOther.length === reservationPlacesQuantity)
        break;
      if (
        allSeats[i].cords.x === allSeats[i - 1].cords.x &&
        allSeats[i].cords.y === allSeats[i - 1].cords.y + 1 &&
        !allSeats[i].reserved
      ) {
        defaultPlacesNextToEachOther.push(allSeats[i]);
      } else {
        defaultPlacesNextToEachOther = [];
      }
    }
    dispatch(setPlacesToReservation(defaultPlacesNextToEachOther));
  };
  useEffect(() => {
    isPlacesNextToOneAnother ? setPlacesNextToEachOther() : setDefaultPlaces();
  }, []);

  return (
    <>
      <div>Mahon</div>
      <div>{reservationPlacesQuantity}</div>
      <div>{isPlacesNextToOneAnother ? "nextTo" : "random"}</div>
    </>
  );
}

export default ReservationSchemePage;
