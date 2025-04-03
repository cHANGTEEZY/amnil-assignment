import React, { useState } from "react";

function Input() {
  const [username, setUsername] = useState("");
  console.log("Component Rerendered");

  return (
    <div className="welcome-container">
      <h1>Welcome to Our App</h1>
      <div className="user-input">
        <label htmlFor="username">Enter your name:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type your name here"
        />
      </div>
    </div>
  );
}

export default Input;
