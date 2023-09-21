import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);
    const counter = () => {
        setCount(count + 1);
    }
    const checkFun = () => {
        setCheck(!check);
    }
    const show = useMemo(() => {
        console.log("Click Button")
        if (check) {
            return "Clicked";
        } else {
            return "Click";
        }
    }, [check])
    return (
        <div>
            <button onClick={counter} >Count</button>
            <p>{count}</p>
            <button onClick={checkFun}>{show}</button>
        </div>
    )
}
