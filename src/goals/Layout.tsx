import { useNavigate,Navigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
  export default function Layout() {
    const navigate = useNavigate();
    async function logout(){
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/logout`,{withCredentials:true})
        navigate("/signin");
    }
    return (
      <div className='min-h-screen w-screen grid grid-rows-layout grid-cols-layout '>
          <div className='bg-gray-500 col-span-full h-full'>
            <Header />
          </div>
          <div className=''>
            <Sidenav />

          </div>
          <div className=''>Div3</div>
          <div className='col-span-full'>
            <Footer />
          </div>
     </div>
    )
}