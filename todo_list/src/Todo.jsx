import React from "react";

export const Todo = ({ task }) => { 
    return (
        <div className="todo">
            <p>{task}</p>
        </div>
    );
}

export default Todo;