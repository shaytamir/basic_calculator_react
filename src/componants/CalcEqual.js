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
      onClick={async () => {
        // const formula = distate;
        if (distate !== 0) {
          // onEqual(distate);
          display.dispatch([distate, "equal"]);

          const historyDisplay = distate + " = ";
          display.dispatchistory([historyDisplay, "history"]);
        }
      }}
    >
      =
    </div>
  );
}
export default CalcEqual;
