import React from "react";

function NotEnoughPlacesAlert() {
  return (
    <div
      className="alert alert-danger d-flex justify-content-center"
      role="alert"
    >
      Niestety, nie udało się znaleźć miejsca według twoich kryteriów. Prosimy o
      dobranie miejsc ręcznie.
    </div>
  );
}

export default NotEnoughPlacesAlert;
