import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log([...todos, todo]);
    }

    return (
        <div className="container">
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}
        </div>
    );
}