import React from "react";
import { ITodo } from "../interfaces";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push(".completed");
        }

        return (
          <li key={todo.id}>
            <label className={classes.join(" ")} onChange={onToggle.bind(null, todo.id)}>
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={onRemove.bind(null, todo.id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
