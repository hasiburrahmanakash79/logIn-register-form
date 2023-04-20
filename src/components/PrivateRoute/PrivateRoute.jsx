import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <h1>Loading...</h1> //<progress className="progress w-56"></progress>
    }

    if(user){
        return children
    }
    return <Navigate to='/signIn' replace={true}></Navigate>
};

export default PrivateRoute;