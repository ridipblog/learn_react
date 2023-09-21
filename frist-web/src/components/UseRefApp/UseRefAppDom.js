import React, { useRef, useState } from 'react'
export default function UseRefAppDom() {
    const [myData, setMyData] = useState("");
    const inputElem = useRef("");
    const modify = () => {
        inputElem.current.style.color = "red";
    }
    return (
        <div>
            {/* Use UseRef With Dom  */}
            <input type='text' ref={inputElem} value={myData} onChange={(e) => setMyData(e.target.value)} />
            <button onClick={modify}>Click</button>
        </div>
    )
}
