import React, { useContext } from "react";
import { DisplayContext } from "./Calc.js";
// import onEqual from "./hooks/onEqual";

function CalcEqual() {
  const display = useContext(DisplayContext);
  const distate = display.state;

  return (
    <div
      id="equals"
      className="keys_style"
      onClick={() => {
        console.log(distate);
        if (distate !== 0) {
          // onEqual(distate);

          display.dispatch([display.state, "equal"]);
        }
      }}
    >
      =
    </div>
  );
}
export default CalcEqual;
