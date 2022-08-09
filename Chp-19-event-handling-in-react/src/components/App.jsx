import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function clicked() {
    console.log("clicked");
    setHeadingText("Submitted");
  }
  function mouseEntered() {
    console.log("enter");
    setMouseOver(true);
  }
  function mouseExited() {
    console.log("exit");
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={clicked}
        onMouseOver={mouseEntered}
        onMouseOut={mouseExited}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
