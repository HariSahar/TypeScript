import React from "react";
import "./Inputfield.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
function InputField({ todo, setTodo, handleAdd }: props) {
  const intRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        intRef.current?.blur();
      }}
    >
      <input
        ref={intRef}
        type="text"
        placeholder="Enter a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        Submit
      </button>
    </form>
  );
}

export default InputField;
