import React, { useState } from 'react'
import useTitleCount from './useTitleCount';

export default function CustomHook() {
    const [count, setCount] = useState(0);
    console.log("Custom Hook");
    useTitleCount(count);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    )
}
