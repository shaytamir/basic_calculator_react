import React, { useState } from "react";
import "./App.css";

import Calc from "./componants/Calc.js";
import CalcHistory from "./componants/CalcHistory";

function App() {
  const [History, setHistory] = useState(false);
  return (
    <div className="App">
      <Calc />
      {History && <CalcHistory />}
    </div>
  );
}

export default App;
