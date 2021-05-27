import React from "react";
import RowOfSeats from "./RowOfSeats";
import SchemeDescription from "./SchemeDescription";

function HallScheme({ normalizedScheme, selectedPlaces }) {
  return (
    <>
      <div
        className="container alert alert-primary d-flex justify-content-center mb-5"
        role="alert"
      >
        Ekran
      </div>
      <div className="d-flex flex-column align-items-center ">
        {normalizedScheme.map((row, index) => (
          <RowOfSeats key={index} row={row} selectedPlaces={selectedPlaces} />
        ))}
      </div>
      <SchemeDescription />
    </>
  );
}

export default HallScheme;
