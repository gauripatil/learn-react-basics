import React from "react";
import ReactDOM from "react-dom";

import PI, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
