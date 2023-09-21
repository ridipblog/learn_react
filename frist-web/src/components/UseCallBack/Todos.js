import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log("Child Render");
    return (
        <div>
            {todos.map((todo, index) => {
                return <p key={index}>{todo + index}</p>
            })}
            <button onClick={addTodo}>Add</button>
        </div>
    )
};

export default memo(Todos);