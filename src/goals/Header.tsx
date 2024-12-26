import React from "react";
import {UserCircleIcon,BellIcon} from "@heroicons/react/24/solid"


export default function Header(){
    return(
        <div className="flex items-center bg-slate-500 h-full">
            <div className="w-1/6">
            <img src="/public/assets/images/logo.png" alt="LOGO"></img>
            </div> 
            <div className="w-2/6">
                <input type="text" className="w-full"/>
            </div>
            <div className="flex justify-around ">
                <BellIcon className="hover:cursor-pointer"/>
                <UserCircleIcon className="h-10 w-10 text-blue-500 hover:cursor-pointer" />
            </div>
        </div>
    );
}