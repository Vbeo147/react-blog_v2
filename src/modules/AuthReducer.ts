import { authService, firebaseInstance } from "../firebase";
import {
  AuthAction,
  AuthState,
  ActionDispatchFunc,
} from "../interface/AuthTypes";
import { authUtils } from "../lib/authUtils";
import { Dispatch } from "redux";
import { IUser } from "../interface/AuthTypes";

const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
const AUTH_GET_SUCCESS = "AUTH_GET_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";

const ActionDispatch: ActionDispatchFunc = (type, param) => {
  if (param) {
    return { type, param };
  } else {
    return { type };
  }
};

export const LoginAuth = () => async (dispatch: Dispatch) => {
  const githubProvider = new firebaseInstance.auth.GithubAuthProvider();
  await authService
    .signInWithPopup(githubProvider)
    .then((data) => dispatch(ActionDispatch(AUTH_LOGIN_SUCCESS, data.user)))
    .catch((error) => dispatch(ActionDispatch(AUTH_ERROR, error)));
};

export const LogoutAuth = () => async (dispatch: Dispatch) => {
  await authService
    .signOut()
    .then(() => dispatch(ActionDispatch(AUTH_LOGOUT_SUCCESS)))
    .catch((error) => dispatch(ActionDispatch(AUTH_ERROR, error)));
};

export const onAuthChanged = () => (dispatch: Dispatch) => {
  authService.onAuthStateChanged((user) => {
    if (user) {
      dispatch(ActionDispatch(AUTH_GET_SUCCESS, user));
    } else {
      dispatch(ActionDispatch(AUTH_GET_SUCCESS));
    }
  });
};

const initialState: AuthState = {
  github: {
    loading: true,
    auth: null,
    error: null,
  },
};

export default function AuthReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        github: authUtils.login(action.param as IUser),
      };
    case AUTH_LOGOUT_SUCCESS:
      return { ...state, github: authUtils.logout() };
    case AUTH_GET_SUCCESS:
      return {
        ...state,
        github: authUtils.get(action.param as IUser),
      };
    case AUTH_ERROR:
      return { ...state, github: authUtils.error(action.param as string) };
    default:
      return state;
  }
}
