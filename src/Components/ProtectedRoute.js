import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthUser } from '../context/AuthContext'

export default function ProtectedRoute({children}) {
    const {user} = AuthUser();

    if(!user){
        return <Navigate to='/'/>
    }else{
        return children;
    }
 
}
