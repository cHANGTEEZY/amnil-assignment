import React, { useState } from "react";
import Child from "./Children";

function Parent({ parentCount }) {
  const [childCount, setChildCount] = useState(0);
  console.log("Parent rendered");

  return (
    <div className={`component }`}>
      <h3>Parent Component</h3>
      <p>Received prop from Grandparent: {parentCount}</p>
      <button onClick={() => setChildCount(childCount + 1)}>
        Update Parent State ({childCount})
      </button>
      <Child value={childCount} />
    </div>
  );
}

export default Parent;
