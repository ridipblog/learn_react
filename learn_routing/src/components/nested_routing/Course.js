import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
export default function Course() {
    return (
        <div>
            <h1>Course Page Nested Routing</h1>

            <NavLink to="java">Java</NavLink>
            <NavLink to="python">Python</NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <Outlet />
        </div>
    )
}
