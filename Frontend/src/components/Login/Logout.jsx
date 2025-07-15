import React from 'react'
import { logout } from '../../utils/auth'

function Logout() {
  return (
    <button 
     onClick={logout}
     className='bg-red-500 text-white px-4 py-2 rounded'
     >
        Logout
     </button>
  )
}

export default Logout