export const isHallFull = (allSeats) => {
  return allSeats.filter((seat) => !seat.reserved).length > 0 ? false : true;
};
export const setAnyPlaces = (allSeats, reservationPlacesQuantity) => {
  return allSeats
    .filter((seat) => !seat.reserved)
    .slice(0, reservationPlacesQuantity)
    .map((seat) => ({ id: seat.id, cords: seat.cords }));
};
export const setPlacesNextToEachOther = (
  allSeats,
  reservationPlacesQuantity
) => {
  const freePlaces = allSeats.filter((seat) => !seat.reserved);
  let defaultPlacesNextToEachOther = [
    { id: freePlaces[0].id, cords: freePlaces[0].cords },
  ];
  for (let i = 1; i < freePlaces.length; i++) {
    if (defaultPlacesNextToEachOther.length === reservationPlacesQuantity)
      break;
    if (
      freePlaces[i].cords.x === freePlaces[i - 1].cords.x &&
      freePlaces[i].cords.y === freePlaces[i - 1].cords.y + 1
    ) {
      defaultPlacesNextToEachOther.push({
        id: freePlaces[i].id,
        cords: freePlaces[i].cords,
      });
    } else {
      defaultPlacesNextToEachOther = [
        { id: freePlaces[i].id, cords: freePlaces[i].cords },
      ];
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
