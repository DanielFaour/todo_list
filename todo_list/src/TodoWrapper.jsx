import React, { useState, useEffect } from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export const TodoWrapper = () => {
    const [todos, setTodos] = useState(() => {
        // Retrieve todos from local storage
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log([...todos, todo]);
    }

    const deleteTodo = (task) => {
        setTodos(todos.filter((todo) => todo !== task));
    }
    

    return (
        <div className="container">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index ) => (
                <Todo task={todo} key={index} deleteTodo={() => deleteTodo(todo)} />
            ))}
        </div>
    );
}