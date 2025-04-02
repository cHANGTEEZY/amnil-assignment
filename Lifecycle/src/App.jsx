import React, { useEffect } from "react";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  useEffect(() => {
    console.log("App component console log inside useeffect");
  });

  console.log("App component console log");

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setShowCounter(!showCounter)}
        style={{
          padding: "8px 16px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {showCounter ? "Unmount Counter" : "Mount Counter"}
      </button>

      {showCounter && <Counter />}
    </div>
  );
}

export default App;
