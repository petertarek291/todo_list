import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleTodo = () => {
    const test = inputRef.current.value;
    const newItem = { completed: false, test }
    setTodos([newItem, ...todos])
    inputRef.current.value = '';

  }
  const handleDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }
  const handleDeleteItem=(index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      
      <ul>
      
        {todos.map(({ test,completed }, index) => {
          return <div>
            <li
          className={completed ? 'done' : ''}
            key={index}
            onClick={() => handleDone(index)}>
            {test}

          </li>
          <button onClick={()=>handleDeleteItem(index)}>❌</button>
      </div>
        })}
        
      
      </ul>
         
      <input placeholder='Enter item...' type='text' name='to_do_item' ref={inputRef} />
      <button onClick={handleTodo}> Add </button>
    </div>
  );
}

export default App;
