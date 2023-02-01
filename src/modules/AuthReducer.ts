import { authService, firebaseInstance } from "../firebase";
import {
  AuthAction,
  AuthState,
  ActionDispatchFunc,
} from "../interface/AuthTypes";
import { authUtils } from "../lib/authUtils";
import { Dispatch } from "redux";

const AUTH_LOGIN = "AuthReducer/AUTH_LOGIN";
const AUTH_SUCCESS = "AuthReducer/AUTH_SUCCESS";
const AUTH_ERROR = "AuthReducer/AUTH_ERROR";
const AUTH_LOGOUT = "AuthReducer/AUTH_LOGOUT";

const ActionDispatch: ActionDispatchFunc = (type, param) => {
  if (param) {
    return { type, param };
  } else {
    return { type };
  }
};

export const LoginAuth = () => async (dispatch: Dispatch) => {
  const githubProvider = new firebaseInstance.auth.GithubAuthProvider();
  dispatch(ActionDispatch(AUTH_LOGIN));
  await authService
    .signInWithPopup(githubProvider)
    .then((data) => dispatch(ActionDispatch(AUTH_SUCCESS, data)))
    .catch((error) => dispatch(ActionDispatch(AUTH_ERROR, error)));
};

const initialState: AuthState = {
  github: {
    loading: false,
    auth: null,
    error: null,
  },
};

export default function AuthReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, github: authUtils.loading() };
    case AUTH_SUCCESS:
      return {
        ...state,
        github: authUtils.success(
          action.param as firebase.default.auth.UserCredential
        ),
      };
    case AUTH_LOGOUT:
      return { ...state, github: authUtils.logout() };
    case AUTH_ERROR:
      return { ...state, github: authUtils.error(action.param as string) };
    default:
      return state;
  }
}
