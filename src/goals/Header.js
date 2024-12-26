import React from "react";
import {UserCircleIcon} from "@heroicons/react/24/solid"


export default function Header(){
    return(
        <div className="flex items-center justify-around bg-slate-500 h-full">
            <div>
            <img alt="LOGO"></img>
            </div> 
            <div>
                <input type="text" />
            </div>
            <div className="flex justify-around">
                <button>Notification</button>
                <UserCircleIcon className="h-10 w-10 text-blue-500" />
            </div>
        </div>
    );
}