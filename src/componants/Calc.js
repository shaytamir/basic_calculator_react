import React, { useReducer } from "react";
import CalcDysplay from "./CalcDysplay";
import CalcHistory from "./CalcHistory";
import CalcKeys from "./CalcKeys";
import reducerValue from "./hooks/displayReducer.js";

export const DisplayContext = React.createContext();

function Calc() {
  const [reducer, initialState] = reducerValue;
  const [value, dispatch] = useReducer(reducer, initialState);

  let initialHistory = [];
  const historyReducer = (state, action) => {
    const [val, act] = action;
    // console.log("value", value);
    switch (act) {
      case "history":
        return [...state, val + value];
      case "clearHhistory":
        return initialHistory;
      default:
        return state;
    }
  };
  const [historyValue, dispatchistory] = useReducer(
    historyReducer,
    initialHistory
  );

  return (
    <div id="main_calc_div">
      <DisplayContext.Provider
        value={{
          state: value,
          dispatch: dispatch,
          historyState: historyValue,
          dispatchistory: dispatchistory,
        }}
      >
        <CalcDysplay />
        <CalcKeys />
        <CalcHistory history={historyValue} />
      </DisplayContext.Provider>
    </div>
  );
}

export default Calc;
