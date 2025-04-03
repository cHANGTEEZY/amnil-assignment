import React, { useState, useMemo, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("State rerendered");

  const result = () => {
    let sum = 0;
    for (let i = 0; i < 123123123; i++) {
      sum += i;
    }
    return sum;
  };

  return (
    <div>
      <h1>Expensive Calculation Result: {result()}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Input />
    </div>
  );
}

function Input() {
  const usernameRef = useRef("");
  console.log("Input Component Rerendered");

  return (
    <div className="welcome-container">
      <h1>Welcome to Our App</h1>
      <div className="user-input">
        <label htmlFor="username">Enter your name:</label>
        <input
          id="username"
          type="text"
          defaultValue={usernameRef.current}
          onChange={(e) => (usernameRef.current = e.target.value)}
          placeholder="Type your name here"
        />
      </div>
    </div>
  );
}

export default App;
