import React from "react";
import { useAuth } from "./contexts/user";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({children}){
    const userContext = useAuth();
    if(!userContext.isLoggedIn){
        return <Navigate to="/signin" />
    }
    return children
}