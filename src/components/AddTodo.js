import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        selectedDateTime,
      });
      setTitle("");
      setSelectedDateTime("");
      notifySuccess("Task added successfully!");
    }
  };

  const notifySuccess = (message) => {
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="datetime-picker-container">
        <input
          type="datetime-local"
          value={selectedDateTime}
          onChange={(e) => setSelectedDateTime(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button>Add</button>
      </div>
    </form>
  );
};

export default AddTodo;
