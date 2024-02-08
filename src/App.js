import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <OnOffButton
          data-testId="on/off-button"
          onClick={() => {
            setDisabled((prev) => !prev);
          }}
        >
          on/off
        </OnOffButton>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <Button
            data-testId="minus-button"
            onClick={() => {
              setCounter((prev) => prev - 1);
            }}
            disabled={disabled}
          >
            -
          </Button>
          <h3 data-testId="counter" style={{ fontSize: "3rem" }}>
            {counter}
          </h3>
          <Button
            data-testId="plus-button"
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
            disabled={disabled}
          >
            +
          </Button>
        </div>
      </header>
    </div>
  );
}
const OnOffButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: blue;
  color: white;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: green;
  }
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

export default App;
