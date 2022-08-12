import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function handleTitleChange(event) {
    const title = event.target.value;
    setNoteTitle(title);
    console.log("handleTitleChange", title);
  }

  function handleContentChange(event) {
    const content = event.target.value;
    setNoteContent(content);
    console.log("handleContentChange", content);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onAdd(noteTitle, noteContent);
          setNoteTitle("");
          setNoteContent("");
          e.preventDefault();
        }}
      >
        <input
          onChange={handleTitleChange}
          value={noteTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteContent}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
