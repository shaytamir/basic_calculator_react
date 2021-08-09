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
        if (distate !== 0 && distate.includes(" ")) {
          display.dispatch([distate, "equal"]);

          const historyDisplay = distate + " = ";
          display.dispatchistory([historyDisplay, "history"]);
        }
      }}
      onKeyPress={(e) => {
        console.log(e);
      }}
    >
      =
    </div>
  );
}
export default CalcEqual;
