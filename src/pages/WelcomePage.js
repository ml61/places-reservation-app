import React, { useEffect } from "react";
import axios from "axios";

function WelcomePage() {
  const getDogs = async () => {
    const res = await axios.get("http://localhost:3000/seats");
    const { data } = res;

    console.log(data);
  };

  useEffect(() => {
    getDogs();
  }, []);

  return <div>WelcomePage</div>;
}

export default WelcomePage;
