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
      <p>Here you can add your chores to a todo list!</p>
      <form className="inputConteiner" onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder='Write in your todos...' onChange={(e) => setValue(e.target.value)}/>
        <button>Add</button>
      </form>
    </>
  );
}

export default TodoForm;