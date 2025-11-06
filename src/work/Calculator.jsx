import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const appendValue = (val) => setInput(input + val);
  const clearInput = () => setInput("");
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="page-wrapper page-light">
      <div className="page-container">
        <div className="calculator-page">
          <div className="calculator-box">
            <h1 className="calculator-title">Calculator</h1>
            <input
              className="calculator-screen"
              type="text"
              value={input}
              readOnly
            />

            <div className="calculator-buttons">
              {[
                "7",
                "8",
                "9",
                "/",
                "4",
                "5",
                "6",
                "*",
                "1",
                "2",
                "3",
                "-",
                "0",
                ".",
                "=",
                "+",
              ].map((btn) =>
                btn === "=" ? (
                  <button
                    key={btn}
                    className="calc-btn calc-btn-equal"
                    onClick={calculate}
                  >
                    {btn}
                  </button>
                ) : (
                  <button
                    key={btn}
                    className="calc-btn"
                    onClick={() => appendValue(btn)}
                  >
                    {btn}
                  </button>
                )
              )}
              <button className="calc-btn calc-btn-clear" onClick={clearInput}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
