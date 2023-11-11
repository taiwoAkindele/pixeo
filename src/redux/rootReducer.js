import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/slice";

export const combinedReducer = combineReducers({
  user: userReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return combinedReducer(state, action);
};
