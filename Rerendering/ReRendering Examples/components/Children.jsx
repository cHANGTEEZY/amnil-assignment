import React, { useState } from "react";

const Child = ({ value }) => {
  const [localCount, setLocalCount] = useState(0);
  console.log("Child rendered");

  return (
    <div className={`component `}>
      <h4>Child Component</h4>
      <p>Received prop from Parent: {value}</p>
      <button onClick={() => setLocalCount(localCount + 1)}>
        Update Child State ({localCount})
      </button>
    </div>
  );
};

export default Child;
