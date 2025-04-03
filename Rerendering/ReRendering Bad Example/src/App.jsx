import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("State rerendered");

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 123123123; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div>
      <h1>Expensive Calculation Result: {result}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
