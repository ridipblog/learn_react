import React, { useEffect, useRef, useState } from 'react'

export default function UseRefPrev() {
    const [value, setValue] = useState("");
    const prevValue = useRef("");
    useEffect(() => {
        prevValue.current = value;
    }, [value]);
    return (
        <div>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
            <p>Currect Value {value}</p>
            <p>Prev Value {prevValue.current}</p>
        </div>
    )
}
