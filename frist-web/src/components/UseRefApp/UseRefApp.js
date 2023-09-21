import React, { useEffect, useRef, useState } from 'react'

export default function UseRefApp() {
    const [myData, setMyData] = useState();
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });
    return (
        <div>
            {/* Use UseRef In UseEffect */}
            <input type="text" value={myData} onChange={(e) => setMyData(e.target.value)} />
            <p>Render This Page {count.current} Times</p>
        </div>
    )
}
