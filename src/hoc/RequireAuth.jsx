import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";


const RequireAuth = ({children}) => {
    const location = useLocation();
    const { isLoggedIn } = useAuth()

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} state={{ from: location }} />
    }

    return children;
};

export default RequireAuth;