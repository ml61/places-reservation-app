export const areThereAnyFreePlaces = (allSeats) => {
  return allSeats.filter((seat) => !seat.reserved) ? true : false;
};
export const setAnyPlaces = (allSeats, reservationPlacesQuantity) => {
  return allSeats
    .filter((seat) => !seat.reserved)
    .slice(0, reservationPlacesQuantity);
};
export const setPlacesNextToEachOther = (
  allSeats,
  reservationPlacesQuantity
) => {
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
  return defaultPlacesNextToEachOther;
};

export const makeNormalizedHallScheme = (allSeats) => {
  const { xLength, yLength } = countHallSizes(allSeats);
  let emptyHallScheme = [];
  for (let x = 0; x < xLength; x++) {
    for (let y = 0; y < yLength; y++) {
      emptyHallScheme.push({ isExist: false, x, y });
    }
  }
  const normalizedSeatsScheme = emptyHallScheme.map(
    (seatFromEmptyHallScheme) => {
      const seatFromRealScheme = allSeats.find(
        (el) =>
          el.cords.x === seatFromEmptyHallScheme.x &&
          el.cords.y === seatFromEmptyHallScheme.y
      );
      if (seatFromRealScheme) return seatFromRealScheme;
      return seatFromEmptyHallScheme;
    }
  );
  return normalizedSeatsScheme;
};

// this func works correctly only if x and y cords begin from zero.
const countHallSizes = (allSeats) => {
  const xLength = allSeats[allSeats.length - 1].cords.x + 1;
  const yLength = allSeats[allSeats.length - 1].cords.y + 1;
  return { xLength, yLength };
};
