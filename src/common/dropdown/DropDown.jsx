import "./style.css";
import React from "react";

export default function DropDown({ menu }) {
  return (
    <div id="dropdown">
      {menu.map((option) => (
        <a key={option} href="/">
          {option}
        </a>
      ))}
    </div>
  );
}
