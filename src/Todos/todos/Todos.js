import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./todos.css";
function Todos() {
  const [todos, setTodos] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/todos`;

  useEffect(() => {
    getTodos();
  }, []); 

  const getTodos = async () => {
    try {
      const response = await axios.get(url);
      setTodos(response.data);
    } catch (error) {
      console.error("Verileri alma hatası:", error);
    }
  }


  const deleteTodos = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos(); 
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  }


  return (
    <div className='container'>
      <h1>TODOS</h1>
      <ul>
        {todos.map((item) => (

         
          <li key={item.id} >
            <span>{item.id}-) </span>
            <Link to={`/todos/${item.id}`}>{item.title}</Link>
         <i className="bi bi-x-circle" onClick={()=>deleteTodos(item.id)}></i>
          </li>

        ))}
      </ul>

      
    </div>
  );
}

export default Todos;