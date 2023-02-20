// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const[input, setInput] = useState("");

  return (
    <div className="App">
      <h2>TODO List</h2>
      <h3>Add Item</h3>
      <p>
        <input 
          type="text" 
          id='new-tast'
          value={input}
          onChange = {(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </p>
      <h3>Todo</h3>
      <ul>
        <li>
          <label></label>
          <input type='text'/>
          <button className='edit'>Edit</button>
          <button className='delete'>Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;

