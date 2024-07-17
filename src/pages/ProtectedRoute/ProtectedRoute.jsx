import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../../AuthProvider/AuthProvider';
// import { Spinner } from "@material-tailwind/react";


const ProtectedRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center mt-10">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    if (!currentUser) {
        return <Navigate to="/login" state={location.pathname}></Navigate>;
    }
    return children;
};

export default ProtectedRoute;