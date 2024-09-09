import React, { useState } from "react";

import "./index.css";
// import ModeToggler from "./ModeToggler"
// import Promo from "./Promo";
// import Parent from "./Parent";

export default function App() {
  const [name, setName] = useState("Huzair");

  const handleClick = () => {
    if (name === "Huzair") {
      setName("Abdullah");
    } else {
      setName("Huzair");
    }
  };
  return (
    <div className="App">
      <h1>{"My name is " + name}</h1>
      <button onClick={handleClick}>Click here </button>
    </div>
  );
}
