import React from "react";
import { useAppDispatch,useAppSelector } from "./store/hooks";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface MyComponentProps {
    children: React.ReactNode;
  }

export default function  ProtectRoute:FC<MyComponentProps>({children}){
    const auth = useAppSelector((state)=>state.user)
    if (!auth.isLoggedIn){
        return <Navigate to="/signin" />
    }
    else{
        return children;
    }
}


