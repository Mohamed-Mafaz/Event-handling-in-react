import React, { useState } from "react";

function App() {
  const [heading, event] = useState("Hello");
  const [mouse, mouseOver] = useState(false);

  function handle() {
    event("Submitted Successfully");
  }

  function overEvent() {
    mouseOver(true);
  }

  function outEvent() {
    mouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouse ? "black" : "white" }}
        onClick={handle}
        onMouseOver={overEvent}
        onMouseOut={outEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
