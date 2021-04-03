import React from "react";
import NavBar from "./NavBar";
import Coffee from "./Coffee";
import Blueberries from "./Blueberries";
import Pizza from "./Pizza";
import VendingMachine from "./VeningMachine";

import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/>
      <Route exact path="/">
      <VendingMachine/>
      </Route>


        <Route exact path="/coffee">
          <Coffee />
        </Route>
        <Route exact path="/blueberries">
          <Blueberries />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
