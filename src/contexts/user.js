import { createContext } from "react";

 const usercontext=createContext({
    isLoggedIn:false,
    user:""
});

export default usercontext;
