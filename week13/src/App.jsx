import { useState } from "react";

import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Simple Calculator
      </h1>
      <Calculator />
    </div>
  );
}

export default App;
