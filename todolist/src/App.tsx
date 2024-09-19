import React from "react";
import "./App.css";
import InputField from "./Components/InputField";
import todo from "./Model";
const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, settodos] = React.useState<todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      settodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <h1 className="heading">To-Do List</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
