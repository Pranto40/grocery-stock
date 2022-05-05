import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.init';
const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    
    if(loading){
        return <p className='text-center'>Loading........</p>
    }
    
    if(!user){
        return children;
    } else{
        return <Navigate to="/login" state={{from: location}} replace />
    }
    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {}
};

export default RequireAuth;