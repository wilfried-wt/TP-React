import React from "react";
import { useState } from "react";

export default function NewTodo(){
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault();
        setTodos((todos) => [
          ...todos,{todo}
        ]);
      };

      const removeTodo= index =>{
        const newTodo = [...todos];
        newTodo.splice(index, 1);
        setTodo(newTodo);
      }

      const completeTodo= index =>{
        const newTodo = [...todo];
        newTodo[index].completed = true;
        setTodo(newTodo);
      }

    return(
        <div className="NewTodo">
            <form onSubmit={addTodo}>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add task</button>
            </form>
            {todos.map((t, i) => {
            return (
                <div key={t.id}>
                    {t.todo}
                    <button onClick={() => removeTodo(i)}>delete</button>
                    <button onClick={() => completeTodo(i)}>completed</button>
                </div>
                );
                })}
        </div>
    )
}