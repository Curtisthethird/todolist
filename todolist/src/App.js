import {useState} from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (text) =>{

    let id = 1;
    if(todos.length > 0 ){
      id = todos[0].id + 1 

    }

    const newTodo ={
      text:text,
      id:id,
      key:id,
    }

    setTodos(() => [newTodo, ...todos]) 
  }

  const elements = todos.map((el) => (
    <TodoItem />
  ))





  return (
    <div className="App">
    <div className='form'>
    <h1 className='title'>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {elements}
      </div>
    </div>
  );
}

export default App;
