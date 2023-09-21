import React, { useCallback, useState } from 'react'
import Todos from './Todos';
export default function UseCallBack() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const increment = () => {
        setCount(count + 1);
    }
    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, `New Data`]);
    }, [todos]);
    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <p>Count {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
