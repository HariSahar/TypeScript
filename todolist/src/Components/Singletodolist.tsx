import React from "react";
import Todo from "../Model";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaListCheck } from "react-icons/fa6";
import "./styles.css";
interface props {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Singletodolist: React.FC<props> = ({ todo, todos, settodos }) => {
  const handledelete = (id: number) => {
    settodos(todos.filter((t) => t.id !== todo.id));
  };

  const handlecheck = (id: number) => {
    settodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const [edit, setedit] = React.useState<boolean>(false);
  const [editTodo, seteditTodo] = React.useState<string>(todo.todo);
  const handleedit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, todo: editTodo };
        }
        return t;
      })
    );
    setedit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleedit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => seteditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <CiEdit onClick={() => setedit(!edit)} />
        </span>

        <span className="icon">
          <RiDeleteBin6Fill onClick={() => handledelete(todo.id)} />
        </span>

        <span className="icon">
          <FaListCheck onClick={() => handlecheck(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default Singletodolist;
