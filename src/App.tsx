import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {};

  const removeHandler = (id: number) => {
    console.log(id);
    
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    </>
  );
};

export default App;
