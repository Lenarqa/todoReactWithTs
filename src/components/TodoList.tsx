import React from "react";
import { ITodo } from "../interfaces";

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();

        onRemove(id);
    }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li key={todo.id}>
            <label className={classes.join(" ")}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event => removeHandler(event, todo.id))}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
      {todos.length === 0 && (
        <p className="center">У вас еще нет дел сегодня!</p>
      )}
    </ul>
  );
};

export default TodoList;
