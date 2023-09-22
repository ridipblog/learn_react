import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to="/params/1234">Params</NavLink>
            <NavLink to="/search_params?id=1">Serach Params</NavLink>
            <NavLink to="programatic_route">Programatic Route</NavLink>
            <NavLink to="/course">Course</NavLink>
            <Link to="/redirect">Redirect</Link>
        </div>
    )
}
