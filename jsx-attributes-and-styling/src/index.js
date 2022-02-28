import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/300";
ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="true" contentEditable="true">
      My Favourite Foods & Places
    </h1>
    <img
      src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1-500x500.jpg"
      alt="pizza"
    />
    <img
      src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/white-sauce-pasta-500x500.jpg"
      alt="pasta"
    />
    <img
      src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      alt="burger"
    />

    <img src={img + "?random=5"} alt="randomimage" />
    <img src={img + "?random=4&grayscale"} alt="randomimage" />
    <img src={img + "?random=3"} alt="randomimage" />
    <img src={img + "?random=2&grayscale"} alt="randomimage" />
    <img src={img + "?random=1&grayscale"} alt="randomimage" />
  </div>,
  document.getElementById("root")
);
