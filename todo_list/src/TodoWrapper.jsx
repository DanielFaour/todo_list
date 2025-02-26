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
        // Store todos in local storage whenever they change
        // This hook runs every time the 'todos' state changes
        // It ensures that the latest state of 'todos' is saved in local storage
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