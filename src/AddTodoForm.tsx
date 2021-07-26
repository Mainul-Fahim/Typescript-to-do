import React, { useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="p-5">
      <input type="text" value={newTodo} onChange={handleChange} />
      <button className="btn btn-primary pe-2" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
