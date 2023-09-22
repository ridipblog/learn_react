import React from 'react'
import { useParams } from 'react-router-dom';

export default function Params() {
    const { productID } = useParams();
    return (
        <div>
            <h1>My Parms {productID}</h1>

        </div>
    )
}
