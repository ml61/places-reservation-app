import React, { useEffect } from "react";
import RowOfSeats from "./RowOfSeats";

function HallScheme({ normalizedScheme, selectedPlaces }) {
  return (
    <div class="container d-flex flex-column align-items-center ">
      {normalizedScheme.map((row, index) => (
        <RowOfSeats key={index} row={row} selectedPlaces={selectedPlaces} />
      ))}
    </div>
  );
}

export default HallScheme;
