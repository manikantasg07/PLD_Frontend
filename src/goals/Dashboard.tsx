import React from "react";
import Button from '@mui/material/Button';
import { useNavigate,Navigate } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { logoutThunk } from "../store/users/authSlice";
// import { useAuth } from "../contexts/user";
import Layout from "./Layout";
import axios from "axios";
export default function Dashboard(){
    let elements=[]
    for(let i=0;i<=100;i++){
        elements.push(<li>This is Dashboard</li>)
    }
    return(
        <div>
            <ul>
                {elements}
            </ul>
        </div>);
}