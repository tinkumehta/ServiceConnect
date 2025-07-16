import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function PrivateRoutes({children}) {
    const {isLoggedIn} = useContext(AuthContext)

   return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoutes