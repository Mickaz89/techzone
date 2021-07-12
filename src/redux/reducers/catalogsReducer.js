import * as types from "../../constants";

const initialState = {
    components: [],
    loading: false,
    value:""
  }

export default (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_CATALOG_COMPONENTS:
        return {...state, components: action.payload};
      default:
        return state;
    }
  };

