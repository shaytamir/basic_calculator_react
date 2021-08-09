import React, { useContext, useEffect } from "react";
import { DisplayContext } from "./Calc.js";
import { keysArr } from "../calcServices/data/keysArr.js";
import CalcEqual from "./CalcEqual.js";

function CalcKeys() {
  const display = useContext(DisplayContext);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      console.log(e.key);
    });
  }, []);

  function createKeys(e) {
    let keys = [];
    for (let key of keysArr) {
      let addKey = (
        <button
          key={key.id}
          id={key.id}
          className="keys_style"
          style={{ gridArea: key.id }}
          onClick={() => display.dispatch([key.value, key.action, "-"])}
          onKeyPress={(e) => {
            console.log(e.key);
            if (e.which === key.keyCode) {
              display.dispatch([key.value, key.action, "-"]);
            }
          }}
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
      <CalcEqual />
    </div>
  );
}

export default CalcKeys;
