import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* Way 1 */}
      {currentTime > 12 ? (
        <h1>Why are you still logged in (Using Ternary Operator)?</h1>
      ) : null}
      {/* Way 2 */}
      {currentTime > 12 && (
        <h1>Why are you still logged in (Using && operator)?</h1>
      )}
    </div>
  );
}

export default App;
