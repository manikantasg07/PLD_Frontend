  import React from "react"
  import { Link } from "react-router-dom"
  
  
  export default function Sidenav(){
    return <div className="bg-gray-300 flex flex-col items-center justify-center h-full ">
      <Link to={{pathname:""}}>Dashboard</Link>
      <Link to={{pathname:"students"}}>Students</Link>
    </div>

  }