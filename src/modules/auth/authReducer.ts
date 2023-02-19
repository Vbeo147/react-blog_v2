import { AnyAction } from "redux";
import {
  createAsyncAction,
  createReducer,
  createAction,
} from "typesafe-actions";
import { authService, firebaseInstance } from "../../firebase";
import { AuthState, FirebaseUser } from "../types/authTypes";
import { ThunkUtil } from "../types/UtilTypes";
import { authUtils } from "../../lib/authUtils";

const GET_FIREBASE_USER = "auth/GET_FIREBASE_USER";
const GET_FIREBASE_USER_SUCCESS = "auth/GET_FIREBASE_USER_SUCCESS";
const GET_FIREBASE_USER_NULL = "auth/GET_FIREBASE_USER_NULL";

const getAuthAsync = createAsyncAction(
  GET_FIREBASE_USER,
  GET_FIREBASE_USER_SUCCESS,
  GET_FIREBASE_USER_NULL
)<undefined, FirebaseUser, undefined>();

const ACTION_FIREBASE_LOGIN_SUCCESS = "auth/ACTION_FIREBASE_LOGIN_SUCCESS";
const ACTION_FIREBASE_LOGIN_ERROR = "auth/ACTION_FIREBASE_LOGIN_ERROR";
const ACTION_FIREBASE_LOGOUT = "auth/ACTION_FIREBASE_LOGOUT";

const LoginSuccess = createAction(
  ACTION_FIREBASE_LOGIN_SUCCESS
)<FirebaseUser>();
const LoginError = createAction(ACTION_FIREBASE_LOGIN_ERROR)<Error>();
const LogOut = createAction(ACTION_FIREBASE_LOGOUT)();

export function getAuthThunk(): ThunkUtil {
  return (dispatch) => {
    const { request, success, failure } = getAuthAsync;
    dispatch(request());
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(success(user));
      } else {
        dispatch(failure());
      }
    });
  };
}

export function LoginAuthThunk(signIn: boolean): ThunkUtil {
  return async (dispatch) => {
    const githubProvider = new firebaseInstance.auth.GithubAuthProvider();
    if (signIn) {
      await authService
        .signInWithPopup(githubProvider)
        .then((data) => dispatch(LoginSuccess(data.user)))
        .catch((error) => dispatch(LoginError(error)));
    } else {
      await authService.signOut();
      dispatch(LogOut());
    }
  };
}

const initialState: AuthState = {
  auth: authUtils.initial(),
};

const authReducer = createReducer<AuthState, AnyAction>(initialState, {
  [GET_FIREBASE_USER]: (state) => ({ ...state, auth: authUtils.loading() }),
  [GET_FIREBASE_USER_SUCCESS]: (state, action) => ({
    ...state,
    auth: authUtils.success(action.payload),
  }),
  [GET_FIREBASE_USER_NULL]: (state) => ({ ...state, auth: authUtils.null() }),
  [ACTION_FIREBASE_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    auth: authUtils.success(action.payload),
  }),
  [ACTION_FIREBASE_LOGIN_ERROR]: (state, action) => ({
    ...state,
    auth: authUtils.error(action.payload),
  }),
  [ACTION_FIREBASE_LOGOUT]: (state) => ({ ...state, auth: authUtils.null() }),
});

export default authReducer;
