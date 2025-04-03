import React, { useState } from "react";
import Parent from "./Parent";

function Grandparent() {
  const [count, setCount] = useState(0);
  console.log("Grandparent rendered");

  return (
    <div className={`component `}>
      <h2>Grandparent Component</h2>
      <button onClick={() => setCount(count + 1)}>
        Update Grandparent State ({count})
      </button>
      <Parent parentCount={count} />
    </div>
  );
}

export default Grandparent;
