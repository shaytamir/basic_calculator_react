import React, { useReducer } from "react";
import CalcDysplay from "./CalcDysplay";
import CalcKeys from "./CalcKeys";
import reducerValue from "./hooks/displayReducer.js";

export const DisplayContext = React.createContext();

function Calc() {
  const [reducer, initialState] = reducerValue;
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main_calc_div">
      <DisplayContext.Provider value={{ state: value, dispatch: dispatch }}>
        <CalcDysplay />
        <CalcKeys />
      </DisplayContext.Provider>
    </div>
  );
}

export default Calc;
