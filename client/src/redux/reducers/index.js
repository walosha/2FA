import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { LOGOUT_USER } from "../types";

const appReducer = combineReducers({
  user: userReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    localStorage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};
