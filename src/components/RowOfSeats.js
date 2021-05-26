import React from "react";
import SingleSeat from "./SingleSeat";

function RowOfSeats({ row, selectedPlaces }) {
  const doesPlaceExist = (flag) => {
    return flag ? true : false;
  };

  return (
    <div class="row mb-2">
      {row.map((seat) => (
        <SingleSeat
          key={"" + seat.cords.x + seat.cords.y}
          selectedPlaces={selectedPlaces}
          doesExist={doesPlaceExist(seat.id)}
          {...seat}
        />
      ))}
    </div>
  );
}

export default RowOfSeats;
