import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllSeats } from "../app/actions";

function WelcomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSeats());
  }, []);

  return <div>WelcomePage</div>;
}

export default WelcomePage;
