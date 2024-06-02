import React from "react";
import "./general.css";

export default function SearchBar({ title, setTitle }) {
  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder={title}
        value={setTitle}
        onChange={handleInput}
      />
    </div>
  );
}
