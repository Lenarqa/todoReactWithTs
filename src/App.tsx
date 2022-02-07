import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const localTodos = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as ITodo[];
    setTodos(localTodos);
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    console.log("toggleHandler");

    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm(
      "Вы уверены что хотите удалить элемент?"
    );
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
