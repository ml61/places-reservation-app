import React from "react";
import ReservationButton from "./ReservationButton";

function SchemeDescription() {
  return (
    <div className="container d-flex justify-content-around align-items-center mt-5">
      <div className="d-flex align-items-center">
        <div className="seat mx-1 reserved"></div>
        <div>Miejsca zarezerwowane</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="seat mx-1"></div>
        <div>Miejsca dostępne</div>
      </div>
      <div className="d-flex align-items-center">
        <div className="seat mx-1 selected"></div>
        <div>Twój wybór</div>
      </div>
      <ReservationButton />
    </div>
  );
}

export default SchemeDescription;
