import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import catalogsReducer from "./catalogsReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  catalogsReducer
});
