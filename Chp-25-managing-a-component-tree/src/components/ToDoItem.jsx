import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    console.log("clicked...");
    setIsDone(!isDone);
  }

  return (
    // <li
    //   onClick={handleClick}
    //   style={{ textDecoration: isDone && "line-through" }}
    // >
    //   {props.item}
    // </li>
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
