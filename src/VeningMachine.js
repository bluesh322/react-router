import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  const styles = {
    container: {
      width: "500px",
      height: "500px",
      padding: "1em",
      margin: "1em",
    },
  };
  return (
    <div>
      <h1>Hello, please select an option from the vending machine</h1>
      <img
        style={styles.container}
        src="https://static.wikia.nocookie.net/to-aru-majutsu-no-index/images/2/26/Jihanki.png/revision/latest/scale-to-width-down/340?cb=20120504161315"
        alt=""
      />
      <Link exact to="/coffee">
        coffee
      </Link>
      <Link exact to="/blueberries">
        blueberries
      </Link>
      <Link exact to="/pizza">
        pizza
      </Link>
    </div>
  );
};

export default VendingMachine;
