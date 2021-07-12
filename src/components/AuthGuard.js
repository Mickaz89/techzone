import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSession } from "../redux/actions/authActions";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {

  const auth = useSelector((state) => state.authReducer);
 
  console.log('AUTH AUTH ' , auth);


  if(auth.authenticated){
    console.log('USER LOGGED IN')
    return children;
  }else{
    console.log('USER LOGGED OUT')
    return <Redirect to="/auth/sign-in" />;
  }

}

export default AuthGuard;
