import {Link} from "react-router-dom"
import React,{useState, useEffect} from 'react'


function Header({isLoggedIn, logout}) {
 

  return (
    <div>
     <header className="flex justify-between items-center p-6 shadow">
    <div className="text-2xl font-bold text-blue-700">Service Connect</div>
    <nav className="flex gap-6 text-gray-700">
     <Link to="/" className="">Home</Link>
     <Link to="/createProvider" className="">Services</Link>
     <Link to="/review" className="">Review</Link>
      {isLoggedIn ? (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          Login
        </Link>
      )}
    </nav>
      </header>
    </div>
  )
}

export default Header