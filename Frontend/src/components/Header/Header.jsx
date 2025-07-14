import {Link} from "react-router-dom"
import React from 'react'

function Header() {
  return (
    <div>
     <header className="flex justify-between items-center p-6 shadow">
    <div className="text-2xl font-bold text-blue-700">Service Connect</div>
    <nav className="flex gap-6 text-gray-700">
     <Link to="/" className="">Home</Link>
     <Link to="/createProvider" className="">Services</Link>
     <Link to="" className="">Contact</Link>
     <Link to="/review" className="">Review</Link>
      <Link to="/login">
      <button className="bg-blue-800 text-white px-4 py-2 rounded-md">Login</button>
      </Link>
    </nav>
      </header>
    </div>
  )
}

export default Header