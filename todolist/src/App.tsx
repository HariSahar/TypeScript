import React from "react";
import "./App.css";
import InputField from "./Components/InputField";
import Todo from "./Model";
import Singletodolist from "./Components/Singletodolist";
const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, settodos] = React.useState<Todo[]>([]);
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
        <Singletodolist key={t.id} todo={t} todos={todos} settodos={settodos} />
      ))}
    </div>
  );
};

export default App;
