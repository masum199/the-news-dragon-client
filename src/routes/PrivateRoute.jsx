import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;

/**
 * 1.check if user is logged in ot not
 * 2.check if user is logged in all users to visit the route
 * 3.else redirect to login page
 * 4.setup the private route
 * 5.handle loading
 * **/ 