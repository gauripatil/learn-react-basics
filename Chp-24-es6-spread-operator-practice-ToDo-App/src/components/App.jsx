import React, { useState } from "react";

function App() {
  const [allNotes, updateAllNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setCurrentNote(value);
  }

  function onAddClicked() {
    console.log("currentNote >>", currentNote);
    updateAllNotes((prevValue) => {
      console.log("prevValue >> ", prevValue);
      console.log("trial >> ", [...allNotes, currentNote]);
      const finaleNotes = [...allNotes, currentNote];
      setCurrentNote("");
      return finaleNotes;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="item"
          value={currentNote}
          onChange={handleChange}
          type="text"
        />
        <button>
          <span onClick={onAddClicked}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {allNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
