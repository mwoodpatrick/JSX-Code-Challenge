//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import { render } from "react-dom";

render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Steak & Kidney pie</li>
      <li>Trifle</li>
      <li>Roast duck</li>
    </ul>
  </div>,
  document.getElementById("root")
);
