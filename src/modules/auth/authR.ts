import { AnyAction } from "redux";
import { createAsyncAction, createReducer } from "typesafe-actions";
import { authService, firebaseInstance } from "../../firebase";
import { AuthState, FirebaseUser } from "../types/authT";
import { ThunkUtil } from "../types/UtilTypes";
import { authUtils } from "../../lib/authUtils";

const GET_FIREBASE_USER = "auth/GET_FIREBASE_USER";
const GET_FIREBASE_USER_SUCCESS = "auth/GET_FIREBASE_USER_SUCCESS";
const GET_FIREBASE_USER_NULL = "auth/GET_FIREBASE_USER_NULL";

const ACTION_FIREBASE_LOGIN_SUCCESS = "auth/ACTION_FIREBASE_LOGIN_SUCCESS";
const ACTION_FIREBASE_LOGIN_ERROR = "auth/ACTION_FIREBASE_LOGIN_ERROR";
const ACTION_FIREBASE_LOGOUT = "auth/ACTION_FIREBASE_LOGOUT";

const getAuthAsync = createAsyncAction(
  GET_FIREBASE_USER,
  GET_FIREBASE_USER_SUCCESS,
  GET_FIREBASE_USER_NULL
)<undefined, FirebaseUser, undefined>();

const LoginAuthAsync = createAsyncAction(
  ACTION_FIREBASE_LOGIN_SUCCESS,
  ACTION_FIREBASE_LOGIN_ERROR,
  ACTION_FIREBASE_LOGOUT
)<FirebaseUser, Error, undefined>();

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
    const {
      request: success,
      success: failure,
      failure: cancel,
    } = LoginAuthAsync;
    if (signIn) {
      await authService
        .signInWithPopup(githubProvider)
        .then((data) => dispatch(success(data.user)))
        .catch((error) => dispatch(failure(error)));
    } else {
      await authService.signOut();
      dispatch(cancel());
    }
  };
}

const initialState: AuthState = {
  auth: authUtils.initial(),
};

const authR = createReducer<AuthState, AnyAction>(initialState, {
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

export default authR;
