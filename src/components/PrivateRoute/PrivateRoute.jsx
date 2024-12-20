/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const {user,loading} = useContext(authContext)
    // console.log("private route user",user)
    if(loading){
        return <h1>LOADING.........</h1>
    }
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;