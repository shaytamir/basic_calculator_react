import React from "react";
import "./App.css";

import Calc from "./componants/Calc.js";
import CalcHistory from "./componants/CalcHistory";

function App() {
  return (
    <div className="App">
      <Calc />
      <CalcHistory />
    </div>
  );
}

export default App;
