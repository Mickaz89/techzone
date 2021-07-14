import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSession } from "../redux/actions/authActions";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {

  const auth = useSelector((state) => state.authReducer);
 
  console.log('AUTH AUTH ' , auth);



  if(auth.loading){
    console.log('USER LOGGED IN')
    return <h1>Loading</h1>;
  }else if(auth.authenticated){
    console.log('USER LOGGED OUT')
    return children;
  }

  return <Redirect to="/auth/sign-in" />;

}

export default AuthGuard;
