import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        // id: uuidv4(),
        todo
      }
    ]);
  };

  const deleteTodo = (index) => {
    setTodos((todos) => todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add task</button>
      </form>
      {todos.map((t, i) => {
        return (
          <div key={t.id}>
            {t.todo}
            <button onClick={() => deleteTodo(i)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}