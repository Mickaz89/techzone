import * as types from "../../constants";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  resetPassword as authResetPassword,
  getSessionService,
} from "../../services/authService";

import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: "eu-west-1_jPmXUG4lP",
  ClientId: "15d74jnsd38q3i9punge5ui186",
};

const Pool = new CognitoUserPool(poolData);

export const signUp = (credentials) => {
  const { email, password } = credentials;
  Pool.signUp(email, password, [], null, (err, data) => {
    if (err) console.error(err);
    console.log(data);
  });
}

export const signIn = (credentials) => async (dispatch) =>
  await new Promise((resolve, reject) => {
    console.log('CREDENTIALS ', credentials)
    const { email, password } = credentials;
    const Password = credentials.password
    const Username = credentials.email;
    console.log('USERNAME ', Username)
    console.log('Pool ', Pool)
    const user = new CognitoUser({ Username, Pool });
    const authDetails = new AuthenticationDetails({ Username, Password });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log('onSuccess:', data);
        dispatch({ type: types.AUTH_SIGN_IN_SUCCESS });
        resolve(data);
      },

      onFailure: err => {
        console.error('onFailure:', err);
        dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
        reject(err);
      },

      newPasswordRequired: data => {
        console.log('newPasswordRequired:', data);
        resolve(data);
      }
    });
  });


  // export const getSession = () => async dispatch => {
  //   // dispatch({ type: types.AUTH_CURRENT_USER, session:true });
  //   getSessionService().then(session  => {
  //     dispatch({ type: types.AUTH_CURRENT_USER, session:session });
  //     console.log('SESSION ', session)
  //   })

  // }


export function signOut() {
  return async (dispatch) => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };
}

// export function resetPassword(credentials) {
//   return async (dispatch) => {
//     dispatch({ type: types.AUTH_RESET_PASSWORD_REQUEST });

//     return authResetPassword(credentials)
//       .then((response) => {
//         dispatch({
//           type: types.AUTH_RESET_PASSWORD_SUCCESS,
//           email: response.email,
//         });
//       })
//       .catch((error) => {
//         dispatch({ type: types.AUTH_RESET_PASSWORD_FAILURE });
//         throw error;
//       });
//   };
// }

export function getSession() {
  return async (dispatch, getState) => {
    
    console.log('get session before',  getState().authReducer)
    return getSessionService()
      .then((response) => {
        console.log('good good ', response)
        dispatch({
          type: types.AUTH_SESSION_SUCCESS,
          payload:response
        });
        console.log('get session after',  getState().authReducer)
        console.log('get session response',  response)
      })
      .catch((error) => {
        dispatch({
          type: types.AUTH_SESSION_FAILURE
        });
        console.log('get session error',  error)
        throw error;
      });
  };
}