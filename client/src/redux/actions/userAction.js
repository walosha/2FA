import { olango, setAuthorizationHeader } from "../../api";
import {
  SIGN_IN_SUCCESSFUL,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE,
  LOADING_OFF,
  LOADING_ON,
} from "../types";
import history from "../../history";

export const register = async (
  { username, email, password, passwordConfirm },
  dispatch
) => {
  dispatch({ type: LOADING_ON });
  try {
    const { data } = await olango.post("/users/register", {
      username,
      email,
      password,
      passwordConfirm,
    });

    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: {
        user: data.data.user,
        token: data.token,
      },
    });
  } catch (error) {
    console.log({ error });
    dispatch({ type: LOADING_OFF });
  }
};

export const signIn = async ({ email, password }, dispatch) => {
  dispatch({ type: LOADING_ON });
  try {
    const {
      data: { data, token },
    } = await olango.post("/users/login", {
      email,
      password,
    });

    await setAuthorizationHeader(token);
    setTimeout(() => {
      dispatch({ type: SIGN_IN_SUCCESSFUL, user: data.user, token });
      dispatch({ type: LOADING_OFF });
      history.push("/");
    }, 1000);
  } catch (error) {
    dispatch({ type: LOADING_OFF });
  }
};
