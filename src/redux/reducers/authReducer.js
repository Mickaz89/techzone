import * as types from "../../constants";

const initialState = {
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_SESSION_SUCCESS:
      
        
        return {
          ...state,
          authenticated: true
        };
      
    case types.AUTH_SESSION_FAILURE:
      
        
        return {
          ...state,
          authenticated: false
        };
      
    default:
      return state;
  }
};