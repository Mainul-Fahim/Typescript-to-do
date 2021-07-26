import React, { useState } from "react";
import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
const styles ={
  border: "2px",
  borderRadius: "15px",
  backgroundColor: "#DAF7A6 ",
  width: "30%",
  marginLeft: "35%",
}
  return (
    <main style={styles} className="text-center mt-5 p-3">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </main>
  );
};

export default App;
