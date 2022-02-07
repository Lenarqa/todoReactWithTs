import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  //   const [title, setTitle] = useState<string>("");

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  //   }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (titleRef.current!.value.trim() === "") {
        return;
      }

      props.onAdd(titleRef.current!.value);
      titleRef.current!.value = "";

      // console.log(title);
      // setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Введите название дела"
        // value={title}
        // onChange={changeHandler}
        ref={titleRef}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
