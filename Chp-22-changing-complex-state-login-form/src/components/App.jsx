import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    // synthetic events.
    // Never try to access event or related stuff
    // inside stateful setter.
    // here do not use in setFullName
    const { value, name } = event.target;
    console.log(value);
    console.log(name);

    setFullName((prevValue) => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      } else if (name === "lName") {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          // value={fullName.firstName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          // value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
