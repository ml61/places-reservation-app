import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllSeats } from "../app/actions";
import StartForm from "../components/StartForm";

function WelcomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSeats());
  }, []);

  return <StartForm />;
}

export default WelcomePage;
