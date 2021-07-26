import React, { useContext } from "react";
import { DisplayContext } from "./Calc.js";

function CalcDysplay() {
  let display = useContext(DisplayContext),
    show = display.state;
  // if (show.length === 4) {
  //   console.log(",");
  //   // show.split("").splice(1, 0, ",").join("");
  // }
  console.log("show", String(show));
  return <div id="display">{show}</div>;
}

export default CalcDysplay;
