import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import '../style/todo.css';


function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div className="todo">
        <div className="todo-item">
            <div className="task" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            </div>
            <div>
            <Button onClick={() => completeTodo(index)}>completed</Button>
            <Button variant="danger" onClick={() => removeTodo(index)}>Delete</Button>
            </div>
        </div>
      </div>
    );
  };

  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
            {/* <Form.Label>Add task</Form.Label> */}
            <Button onClick={() => {addTodo()}}>Add task</Button>
            <Form.Control
            type="text"
            className="input"
            value={value}
            placeholder='Enter new task'
            onChange={e => setValue(e.target.value)}
            />
        </Form.Group>
        
      </Form>
    );
}


export default function ToApp(){
    
    const [todos, setTodos] = useState([
        {text: "learn react", isCompleted: false}, 
        {text: "play console", isCompleted: false}
    ])
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };

      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
      
      return(
        <div className="app">
            <h1 className="main">TODO List</h1>
        <div className="todo-list">
        <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}

            />
            ))}
        </div>
    </div>
    )
}