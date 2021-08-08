import React, { useContext } from "react";
import { DisplayContext } from "./Calc.js";

function CalcHistory(prop) {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div id="calc_history">
      <h4>History</h4>
      <ul id="history_ul">
        {prop.history.map((line, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                let lineSlice = line.slice(0, line.indexOf("=") - 1);
                // console.log("lineSlice", lineSlice);
                display.dispatch([lineSlice, "fromHistory"]);
              }}
            >
              {line}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CalcHistory;
