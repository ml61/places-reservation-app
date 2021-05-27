import React from "react";

function HallIsFullAlert() {
  return (
    <div
      className="alert alert-danger d-flex justify-content-center"
      role="alert"
    >
      Niestety, nie ma wolnych miejsc. Spróbuj później
    </div>
  );
}

export default HallIsFullAlert;
