import * as types from "../../constants";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  resetPassword as authResetPassword,
} from "../../services/authService";


export const fetchComponents = () => async (dispatch) => {
    const response = await fetch('https://gyj7mt91y0.execute-api.eu-west-1.amazonaws.com/dev/get_components')
    const components = await response.json()
    console.log('FETCH_CATALOG_COMPONENTS ', components.records)
    dispatch({type:types.FETCH_CATALOG_COMPONENTS, payload: components.records})
}


