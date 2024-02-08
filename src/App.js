import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testId="counter">{counter}</h3>
        <button
          data-testId="minus-button"
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testId="plus-button"
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
          disabled={disabled}
        >
          +
        </button>
        <button
          data-testId="on/off-button"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setDisabled((prev) => !prev);
          }}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
