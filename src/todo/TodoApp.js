// // import logo from './logo.svg';
// // import './App.css';
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';

// function Todo() {

//   const[input, setInput] = useState("");
//   const[todo, setTodo] = useState([{
//     title: "jouer",
//     completed: true
//   }]);

//   const Addtodo= title =>{
//     const newTodo = [...todo, {title, completed: false}];
//     setTodo(newTodo);
//   }

//   const completeTodo= title =>{
//     const newTodo = [...todo];
//     newTodo[index].completed = true;
//     setTodo(newTodo);
//   }

//   const removeTodo= title =>{
//     const newTodo = [...todo];
//     newTodo.splice(index, 1);
//     setTodo(newTodo);
//   }
  
//   const handleClick = () => {
//     const id = todoList.le$ + 1;
//     setTodoList((prev) => [
//       ...prev, 
//       {
//         id: id,
//         task: input,
//         completed: false,
//       },
//     ]);
//   }

//   return (
//     <div className="App">
//       <h1 className='title'>Todo App</h1>
//       <div className='Addtodo'>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Control type="text" placeholder="Enter task" value={input} onChange={e => {setInput(e.target.value)}}/>
//               <Button type='submit' className='edit' variant="success" onClick={() => handleClick()}>Add task</Button>
//             </Form.Group>
//         </Form>
//       </div>

//       <div className='todolist'>
//         <h2 className='title'>Todo List</h2>
//         <ul>
//           {
//             todo.map((do, index)) => {
//               <Todo
//               do={do}
//               index={index}
//               completeTodo={completeTodo}
//               removeTodo={removeTodo}
//               key={index}
//               >
//             }
//           }
//         <li>
//           <label></label>
//           <input type='text'/>
//           <Button type='submit' className='edit'>Edit</Button>
//           <Button type='submit' className='delete' variant="danger">Delete</Button>
//         </li>
//       </ul>
//       </div>
      

//       {/* <h2>TODO List</h2>
//       <h3>Add Item</h3>
//       <p>
//         <input 
//           type="text" 
//           id='new-tast'
//           value={input}
//           onChange = {(e) => setInput(e.target.value)}
//         />
//         <button>Add</button>
//       </p>
//       <h3>Todo</h3>
//       <ul>
//         <li>
//           <label></label>
//           <input type='text'/>
//           <button className='edit'>Edit</button>
//           <button className='delete'>Delete</button>
//         </li>
//       </ul> */}
//     </div>
//   );
// }

// export default Todo;

