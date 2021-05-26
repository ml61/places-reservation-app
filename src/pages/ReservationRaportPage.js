import React from "react";
import { useSelector } from "react-redux";

function ReservationRaportPage() {
  const selectedPlaces = useSelector((state) => state.selectedPlaces);

  const generateListOfSelectedPlaces = (seat) => {
    return (
      <li key={seat.id}>
        rząd {seat.cords.x}, miejsce {seat.cords.y} ({seat.id})
      </li>
    );
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-height-100vh">
      <div>
        <h2>Twoja rezerwacja przebiegła pomyślnie!</h2>
        <div className="d-flex flex-column">
          <div>Twoje miejsca:</div>
          <ul>
            {selectedPlaces.map((seat) => generateListOfSelectedPlaces(seat))}
          </ul>
        </div>
        <h2>
          Dziękujemy! W razie problemów prosimy o kontakt z działem
          administracji.
        </h2>
      </div>
    </div>
  );
}

export default ReservationRaportPage;
