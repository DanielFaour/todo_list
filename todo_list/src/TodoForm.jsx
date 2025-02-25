import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return; // Hindre tomme oppgaver
    addTodo(value);
    setValue(''); // Tilbakestill input-feltet
  }

  return (
    <>
      <h1>Todo List</h1>
      <form className="inputConteiner" onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder='Skriv inn gjøremål...' onChange={(e) => setValue(e.target.value)}/>
        <button>Add</button>
      </form> 
    </>
  );
}

export default TodoForm;