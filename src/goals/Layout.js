import { useNavigate,Navigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
  export default function Layout() {
    const navigate = useNavigate();
    async function logout(){
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{withCredentials:true})
        navigate("/signin");
    }
    return (
      <div className='container min-h-screen grid grid-rows-layout grid-cols-layout '>
          <div className='col-span-full h-full'>
            <Header />
          </div>
          <div className='bg-blue-500'>Div2</div>
          <div className='bg-red-500'>Div3</div>
          <div className='col-span-full bg-yellow-500'>Div4</div>
     </div>
    )
}