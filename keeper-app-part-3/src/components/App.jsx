import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevValues) => {
      // const note = {
      //   title: title,
      //   content: content
      // };
      // const newArr = [...prevValues, note];
      // console.log(newArr);
      // return newArr;
      return [...prevValues, note];
    });
  }

  function deleteNote(id) {
    console.log(id);
    setNotes((prevValues) => {
      return prevValues.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteItem={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
