import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RedirectPage() {
    return (
        <div>
            return <Navigate to="/about" />;
        </div>
    )
}
