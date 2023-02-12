import { authService, firebaseInstance } from "../firebase";
import {
  AuthAction,
  AuthState,
  FirebaseUser,
  Error,
  GithubUser,
} from "../interfaces/AuthTypes";
import { authUtils } from "../lib/authUtils";
import { AuthActionDis } from "../lib/DispatchUtils";
import { Dispatch, Store } from "redux";
import axios from "axios";

const AUTH_LOGIN_SUCCESS = "AuthReducer/AUTH_LOGIN_SUCCESS";
const AUTH_LOGOUT_SUCCESS = "AuthReducer/AUTH_LOGOUT_SUCCESS";
const AUTH_GET_SUCCESS = "AuthReducer/AUTH_GET_SUCCESS";
const AUTH_USERNAME = "AuthReducer/AUTH_USERNAME";
const AUTH_ERROR = "AuthReducer/AUTH_ERROR";

export const LoginAuth = () => async (dispatch: Dispatch) => {
  const githubProvider = new firebaseInstance.auth.GithubAuthProvider();
  await authService
    .signInWithPopup(githubProvider)
    .then((data) => dispatch(AuthActionDis(AUTH_LOGIN_SUCCESS, data.user)))
    .catch((error) => dispatch(AuthActionDis(AUTH_ERROR, error)));
};

export const LogoutAuth = () => async (dispatch: Dispatch) => {
  await authService
    .signOut()
    .then(() => dispatch(AuthActionDis(AUTH_LOGOUT_SUCCESS)))
    .catch((error) => dispatch(AuthActionDis(AUTH_ERROR, error)));
};

export const onAuthChanged =
  () => (dispatch: Dispatch, getState: () => AuthState) => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(AuthActionDis(AUTH_GET_SUCCESS, user));
        await axios
          .get(`https://api.github.com/user/${user.providerData[0]?.uid}`)
          .then((res) => dispatch(AuthActionDis(AUTH_USERNAME, res.data)))
          .catch((error) => {
            if (!getState().error) dispatch(AuthActionDis(AUTH_ERROR, error));
          });
      } else {
        dispatch(AuthActionDis(AUTH_GET_SUCCESS));
      }
    });
  };

const initialState: AuthState = {
  loading: true,
  auth: null,
  github: null,
  error: null,
};

export default function AuthReducer(
  state: AuthState = initialState,
  action: AuthAction
) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return authUtils.login(action.param as FirebaseUser);
    case AUTH_LOGOUT_SUCCESS:
      return authUtils.logout();
    case AUTH_GET_SUCCESS:
      return authUtils.login(action.param as FirebaseUser);
    case AUTH_USERNAME:
      return { ...state, github: action.param as GithubUser };
    case AUTH_ERROR:
      return authUtils.error(action.param as Error);
    default:
      return state;
  }
}
