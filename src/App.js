import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReservationSchemePage from "./pages/ReservationSchemePage";
import ReservationRaportPage from "./pages/ReservationRaportPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/reservation-scheme">
            <ReservationSchemePage />
          </Route>
          <Route path="/reservation-raport">
            <ReservationRaportPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
