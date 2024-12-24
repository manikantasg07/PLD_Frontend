import React from "react";
import Button from '@mui/material/Button';
import { useContext } from "react";
import usercontext from "../contexts/user";
import { useNavigate } from "react-router-dom";
export default function Dashboard(){
    const navigate=useNavigate()
    // const userContext=useContext(usercontext)
    // if(!userContext.isLoggedIn){
    //     return navigate("/signin");
    // }
    return <div>
        Welcome to Dashboard
    </div>
}