import React from 'react'
import { useLocation } from 'react-router-dom';
export default function SearchParams() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    return (
        <div>
            <p>Use Dynamic Searcjh URL</p>
            <h1>Search Id {id}</h1>
        </div>
    )
}
