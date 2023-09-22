import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/params/1234">Params</Link>
            <Link to="/search_params?id=1">Serach Params</Link>
            <Link to="/redirect">Redirect</Link>
        </div>
    )
}
