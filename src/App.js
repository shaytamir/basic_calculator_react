import React, { useState, useReducer } from "react";
import "./App.css";

import Calc from "./componants/Calc.js";
import CalcHistory from "./componants/CalcHistory";
export const historyContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  const [act] = action;
  //let num = state;
  // let lastNum = num[num.length - 1];

  switch (act) {
    case "history":
      return (state = 1);
    case "clearHistory":
      return initialState;
    default:
      return state;
  }
};
function App() {
  // const [History, setHistory] = useState(false);
  // const reducer, initialState;
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <historyContext.Provider value={{ state: value, dispatch: dispatch }}>
        <Calc />
        {value && <CalcHistory />}
      </historyContext.Provider>
    </div>
  );
}

export default App;
