import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + 1;
        }
        else {
            return state - 1;
        }
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div >
    )
}
