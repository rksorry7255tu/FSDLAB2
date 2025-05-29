import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Evaluate the expression
  const calculate = () => {
    try {
      // Avoid eval security risk in production, this is simple demo
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Clear the input
  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly placeholder="0" />
        <div className="result">{result ? `= ${result}` : ""}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        {["0", ".", "=", "+"].map((btn) =>
          btn === "=" ? (
            <button key={btn} className="equals" onClick={calculate}>
              {btn}
            </button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          )
        )}
        <button className="clear" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
