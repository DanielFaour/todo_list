import React from "react";

export const Todo = ({ task, deleteTodo }) => { 
    return (
        <div className="todo">
            <p>{task}</p>
            <button onClick={() => deleteTodo(task)}>X</button>
        </div>
    );
}

export default Todo;