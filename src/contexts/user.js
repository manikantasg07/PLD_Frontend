import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// Create a user context with sensible defaults
const UserContext = createContext({
  isLoggedIn: false,
  user: null,
  signin: () => {},
  signup: () => {},
});

// Auth Context Provider Component
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null); // Default user is null
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default logged-in state
  const navigate = useNavigate();

  // useEffect(async()=>{
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/loggedIn`,{ withCredentials: true })
  //     setUser(response.data.user); 
  //     setIsLoggedIn(true);
  //     toast.success("Welcome!");
  //     navigate("/dashboard");
  //   } catch (error) {
      
  //   }
  // },[])

  const signin = async (info) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signin`,
        info,
        { withCredentials: true }
      );
      setUser(response.data.user); 
      setIsLoggedIn(true);
      toast.success("Welcome!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Sign-in failed");
      }
    }
  };

  // Sign-up function
  const signup = async (info) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
        info,
        { withCredentials: true }
      );
      setUser(response.data.user); // Adjust if data structure differs
      setIsLoggedIn(true);
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-up error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Sign-up failed");
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, signin, signup }}>
      {children}
    </UserContext.Provider>
  );
}

// useAuth Hook
export function useAuth() {
  return useContext(UserContext);
}
