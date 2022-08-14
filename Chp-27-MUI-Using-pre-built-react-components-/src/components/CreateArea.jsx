import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isZoomedIn, setZoomedIn] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setZoomedIn(false);
    event.preventDefault();
  }

  function handleFocus(event) {
    setZoomedIn(true);
  }

  function handleBlur(event) {
    setZoomedIn(false);
  }

  return (
    <div>
      <form className="create-note">
        { isZoomedIn && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />  }
        <textarea
          name="content"
          onFocus={handleFocus}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ isZoomedIn ? "3" : "1"}
        />
        <Zoom in={ isZoomedIn ? true : false}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
