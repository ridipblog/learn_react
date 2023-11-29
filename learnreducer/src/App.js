import './App.css';
import { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + action.payload;
    } else if (action.type === "DECREMENT") {
        return state - 1;
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </>
    );
}

export default App;
