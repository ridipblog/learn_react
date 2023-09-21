import React, { useReducer } from 'react'

export default function UseReducerObject() {
    const initializeObject = [
        {
            id: 1,
            name: 'coder 1',
        }
    ]
    const reducer = (state, action) => {
        console.log(state[0].name);
        console.log(action.type)
        return state;
    }
    const [state, dispatch] = useReducer(reducer, initializeObject);
    return (
        <div>
            <button onClick={() => dispatch({ type: "CHECK" })}>Check</button>
        </div>
    )
}
