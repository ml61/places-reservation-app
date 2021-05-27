import React from "react";
import SingleSeat from "./SingleSeat";

function RowOfSeats({ row, selectedPlaces }) {
  const doesPlaceExist = (flag) => {
    return flag ? true : false;
  };

  return (
    <div className="row mb-2 flex-nowrap">
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
