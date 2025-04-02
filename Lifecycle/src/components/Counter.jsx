import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(" Component is now in the DOM");

    return () => {
      console.log("Component is being removed from the DOM");
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log(`Current count: ${count}`);
    }

    return () => {
      if (count !== 0) {
        console.log(`Cleaning up effect for count: ${count}`);
      }
    };
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  console.log(" Rendering component with count:", count);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        maxWidth: "300px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>React Hooks Lifecycle Counter</h2>
      <p>
        Current Count: <span style={{ fontWeight: "bold" }}>{count}</span>
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={decrementCount}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={incrementCount}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
