import React from "react";
import Button from '@mui/material/Button';
import { useNavigate,Navigate } from "react-router-dom";
import { useAuth } from "../contexts/user";
import axios from "axios";
export default function Dashboard(){
    const navigate = useNavigate();
    async function logout(){
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{withCredentials:true})
        navigate("/signin");
    }
    return <div>
       <p>Welcome</p> 
        <button type="button" onClick={logout}>logout</button>
    </div>
}