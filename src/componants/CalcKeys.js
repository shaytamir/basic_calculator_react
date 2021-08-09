import React, { useContext } from "react";
import { DisplayContext } from "./Calc.js";
import { keysArr } from "../calcServices/data/keysArr.js";
import CalcEqual from "./CalcEqual.js";

function CalcKeys() {
  const display = useContext(DisplayContext);

  function createKeys() {
    let keys = [];
    for (let key of keysArr) {
      let addKey = (
        <button
          key={key.id}
          id={key.id}
          className="keys_style"
          style={{ gridArea: key.id }}
          onClick={() => display.dispatch([key.value, key.action, "-"])}
        >
          {key.value}
        </button>
      );
      keys.push(addKey);
    }
    return keys;
  }

  return (
    <div id="keys_div">
      {createKeys()}
      <CalcEqual
        onClick={() => {
          console.log(display.state);
          display.dispatch([" = ", "equal"]);
        }}
      />
    </div>
  );
}

export default CalcKeys;
