import * as types from "../../constants";

const initialState = {
  user: {},
  session:{},
  attributes:{},
  authenticated: false,
  loading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SESSION_LOADING:
      {
        console.log('AUTH_SESSION_LOADING')
        return {
          ...state,
          loading: true
        };
      }
    case types.AUTH_SESSION_SUCCESS:
      {
        console.log('AUTH_SESSION_SUCCESS ', action.payload)
        return {
          ...state,
          loading:false,
          user: action.payload.user,
          session:action.payload.session,
          attributes:action.payload.attributes,
          authenticated: true
        };
      }
    case types.AUTH_SESSION_FAILURE:
      {
        console.log('AUTH_SESSION_FAILURE')
        return {
          ...state,
          loading: false,
          authenticated: false
        };
      }
    default:
      return state;
  }
};