import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Looding from '../Shared/Looding/Looding';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';


const RequireAdmin = ({children}) => {
    const [user,loading]=useAuthState(auth)
    const location=useLocation();
    const [admin,adminLoadin]=useAdmin(user)
    if(loading || adminLoadin){
        return <Looding></Looding>
    }

    if(!user || !admin){
        signOut(auth)
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;