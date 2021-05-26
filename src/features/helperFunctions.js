export const areThereAnyFreePlaces = (allSeats) => {
  return allSeats.filter((seat) => !seat.reserved) ? true : false;
};
export const setAnyPlaces = (allSeats, reservationPlacesQuantity) => {
  return allSeats
    .filter((seat) => !seat.reserved)
    .slice(0, reservationPlacesQuantity)
    .map((seat) => seat.id);
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
      defaultPlacesNextToEachOther.push(allSeats[i].id);
    } else {
      defaultPlacesNextToEachOther = [];
    }
  }
  return defaultPlacesNextToEachOther;
};

export const makeNormalizedHallScheme = (allSeats) => {
  const { xLength, yLength } = countHallSizes(allSeats);
  const emptyHallScheme = makeEmptyHallScheme(xLength, yLength);
  const emptyHallWithRealPlaces = setRealPlacesToEmptyHall(
    emptyHallScheme,
    allSeats
  );

  const normalizedSeatsScheme = formatScheme(emptyHallWithRealPlaces, xLength);
  return normalizedSeatsScheme;
};

const makeEmptyHallScheme = (xLength, yLength) => {
  let emptyHallScheme = [];
  for (let x = 0; x < xLength; x++) {
    for (let y = 0; y < yLength; y++) {
      emptyHallScheme.push({ isExist: false, cords: { x, y } });
    }
  }
  return emptyHallScheme;
};

const setRealPlacesToEmptyHall = (emptyHallScheme, allSeats) => {
  const emptyHallWithRealPlaces = emptyHallScheme.map(
    (seatFromEmptyHallScheme) => {
      const seatFromRealScheme = allSeats.find(
        (el) =>
          el.cords.x === seatFromEmptyHallScheme.cords.x &&
          el.cords.y === seatFromEmptyHallScheme.cords.y
      );
      if (seatFromRealScheme) return seatFromRealScheme;
      return seatFromEmptyHallScheme;
    }
  );
  return emptyHallWithRealPlaces;
};

const formatScheme = (scheme, xLength) => {
  let formattedScheme = [];
  for (let x = 0; x < xLength; x++) {
    const rowArray = scheme.filter((seat) => seat.cords.x === x);
    formattedScheme.push(rowArray);
  }
  return formattedScheme;
};

// this func works correctly only if x and y cords begin from zero.
const countHallSizes = (allSeats) => {
  const xLength = allSeats[allSeats.length - 1].cords.x + 1;
  const yLength = allSeats[allSeats.length - 1].cords.y + 1;
  return { xLength, yLength };
};
