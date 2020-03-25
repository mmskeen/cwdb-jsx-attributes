import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <img alt="random" src={img + "?grayscale"} />
      <img
        alt="random"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm6FL_Z_cKcvJnIpeDsYMIaquVUKAc8gNu5N9dQQeu6FitSxsf"
      />
      <img
        alt="random"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw55lGYQ63etgGDG2vcDjOdGEFgoUrNz5h9Qu9bO9_EOq9Vx9M"
      />
      <img
        alt="random"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu40jnBcLLCaD7j3qwnS02ExcdAQ9FbBMMJHW9Xhv7JlKvNwSw"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
