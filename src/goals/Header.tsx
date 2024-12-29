import React, { MouseEvent } from "react";
import { useState } from "react";
import {UserCircleIcon,BellIcon} from "@heroicons/react/24/solid";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch,useAppSelector } from "../store/hooks";
import { logoutThunk } from "../store/users/authSlice";
import { toast } from "react-toastify";

export default function Header(){

    const [anchorel,setanchorel]=useState<null | HTMLElement>(null)
    const open=Boolean(anchorel)
    const navigate=useNavigate()
    const dispatch = useAppDispatch()

    function menu(event:any){
        setanchorel(event.currentTarget)
    }

    function handleClose(){
        setanchorel(null)
    }

    async function logout(){
        const result = await dispatch(logoutThunk())
        if(result.type==="authSlice/logout/fulfilled"){
            navigate("/signin");
        }
        // await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{withCredentials:true})
       else{
        toast.error("Sign In failed")
       }
    }

    return(
        <div className="flex justify-between items-center  bg-slate-500 h-full">
            <img className="ml-4" src="./logo.png" alt="LOGO"></img>
            <input type="text" className="w-2/6 h-10"/>
            <div className="flex justify-around">
            <BellIcon className="hover:cursor-pointer h-10 w-10"/>
            <UserCircleIcon className=" text-black-500 hover:cursor-pointer h-10 w-10 mx-4" onClick={menu}/>
            <Menu
            anchorEl={anchorel}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
            paper: {
                elevation: 0,
                sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
            <Avatar /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
            </MenuItem>
            <MenuItem onClick={logout}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
        </Menu>
            </div>
        </div> 
    );
}