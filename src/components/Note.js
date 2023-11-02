import React, { useState } from "react";
import classes from "./Input.module.css";

const Note = () => {
  const [note, setNote] = useState([]);
  const [noteValue, setNoteValue] = useState("");

  const changeNoteHandler = (e) => {
    setNoteValue(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter" && noteValue.trim() !== "") {
      e.preventDefault();
      addNoteHandler(e);
    }
  };

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (noteValue.trim() === "") {
      alert("Please enter a note.");
      return;
    }
    const newNote = (
      <div className={classes.input} key={note.length}>
        {noteValue}
      </div>
    );
    setNote((prevNote) => [...prevNote, newNote]);
    setNoteValue("");
  };

  const removeNoteHandler = (e) => {
    e.preventDefault();
    const newArray = [...note];
    newArray.pop();
    setNote(newArray);
  };

  return (
    <div className={classes.note}>
      <input
        className={classes.input}
        type="text"
        value={noteValue}
        onChange={changeNoteHandler}
        placeholder="New Note"
        onKeyDown={keyDownHandler}
      ></input>
      {note}
      <div className={classes.secondDiv}>
        <button className={classes.button} onClick={addNoteHandler}>
          Add
        </button>
        <button className={classes.button} onClick={removeNoteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
