// import axios from "../utils/axios";
// import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

// const poolData = {
//   UserPoolId: "eu-west-1_jPmXUG4lP",
//   ClientId: "15d74jnsd38q3i9punge5ui186",
// };

// const UserPool = new CognitoUserPool(poolData);
// export function signIn(credentials) {
//   const { email, password } = credentials;
//   const user = new CognitoUser({ email, UserPool });
//   const authDetails = new AuthenticationDetails({ email, password });
  
//   user.authenticateUser(authDetails, {
//     onSuccess: data => {
//       console.log('onSuccess:', data);
//       resolve(data);
//     },

//     onFailure: err => {
//       console.error('onFailure:', err);
//       reject(err);
//     },

//     newPasswordRequired: data => {
//       console.log('newPasswordRequired:', data);
//       resolve(data);
//     }
//   });

// }

// export function signUp(credentials) {
//   const { email, password } = credentials;
//   UserPool.signUp(email, password, [], null, (err, data) => {
//     if (err) console.error(err);
//     console.log(data);
//   });
// }

// export function resetPassword(credentials) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post("/api/auth/reset-password", credentials)
//       .then((response) => {
//         if (response.status === 200) {
//           resolve(response.data);
//         }
//         reject(response.data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

const poolData = {
  UserPoolId: "eu-west-1_jPmXUG4lP",
  ClientId: "15d74jnsd38q3i9punge5ui186",
};

const Pool = new CognitoUserPool(poolData);

export const getSessionService = async () =>
await new Promise((resolve, reject) => {
  const user = Pool.getCurrentUser();
  if (user) {
    user.getSession(async (err, session) => {
      if (err) {
        console.log('get session service error ', err)
        reject('no user');
      } else {
        console.log('session ', session)
        const attributes = await new Promise((resolve, reject) => {
          user.getUserAttributes((err, attributes) => {
            if (err) {
              reject(err);
            } else {
              const results = {};

              for (let attribute of attributes) {
                const { Name, Value } = attribute;
                results[Name] = Value;
              }

              console.log('session ', session)
              resolve(results);
            }
          });
        });
        console.log('attributes ', attributes)
        resolve({
          "user":user,
          "session":session,
          "attributes":attributes
        });
      }
    });
  } else {
    reject('no user');
  }
});