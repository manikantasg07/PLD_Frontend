import React from "react";
import { useAppDispatch,useAppSelector } from "./store/hooks";
import { Navigate } from "react-router-dom";

interface MyComponentProps {
    children: React.ReactNode;
}

export default function  ProtectRoute({children}:MyComponentProps){
    const auth = useAppSelector((state)=>state.user)
    if (!auth.isLoggedIn){
        return <Navigate to="/signin" replace />
    }
    return <>{children}</>;
}


