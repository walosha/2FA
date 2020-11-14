import {
  PAGE_LOAD,
  SIGN_IN_SUCCESSFUL,
  SIGN_IN_FAILURE,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE,
  LOADING_ON,
  LOADING_OFF,
} from "../types";

const initialState = {
  isLoading: false,
  token: null,
  user: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ON:
      return {
        ...initialState,
        isLoading: true,
      };
    case REGISTER_SUCCESSFUL:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
      };
    case PAGE_LOAD:
    case LOADING_OFF:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
