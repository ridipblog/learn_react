import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function ProgramaticRoute() {
    const navToPage = (data) => {
        navigate('/');
    }
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/about')}>Go Home Page</button>
            <button onClick={() => navToPage('1234')}>Go Home Page</button>
        </div>
    )
}
