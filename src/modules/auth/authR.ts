import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { createAsyncAction, createReducer } from "typesafe-actions";
import { authService, firebaseInstance } from "../../firebase";
import { RootState } from "../rootReducer";
import { AuthState, FirebaseUser } from "../types/authT";

const GET_FIREBASE_USER = "auth/GET_FIREBASE_USER";
const GET_FIREBASE_USER_SUCCESS = "auth/GET_FIREBASE_USER_SUCCESS";
const GET_FIREBASE_USER_NULL = "auth/GET_FIREBASE_USER_NULL";

const ACTION_FIREBASE_LOGIN = "auth/ACTION_FIREBASE_LOGIN";
const ACTION_FIREBASE_LOGIN_SUCCESS = "auth/ACTION_FIREBASE_LOGIN_SUCCESS";
const ACTION_FIREBASE_LOGIN_ERROR = "auth/ACTION_FIREBASE_LOGIN_ERROR";
const ACTION_FIREBASE_LOGOUT = "auth/ACTION_FIREBASE_LOGOUT";

const getAuthAsync = createAsyncAction(
  GET_FIREBASE_USER,
  GET_FIREBASE_USER_SUCCESS,
  GET_FIREBASE_USER_NULL
)<undefined, FirebaseUser, undefined>();

const LoginAuthAsync = createAsyncAction(
  ACTION_FIREBASE_LOGIN,
  ACTION_FIREBASE_LOGIN_SUCCESS,
  ACTION_FIREBASE_LOGIN_ERROR,
  ACTION_FIREBASE_LOGOUT
)<undefined, FirebaseUser, Error, undefined>();

export function getAuthThunk(): ThunkAction<void, RootState, null, AnyAction> {
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

export function LoginAuthThunk(
  signIn: boolean
): ThunkAction<void, RootState, null, AnyAction> {
  return async (dispatch) => {
    const githubProvider = new firebaseInstance.auth.GithubAuthProvider();
    const { request, success, failure, cancel } = LoginAuthAsync;
    dispatch(request());
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
  loading: true,
  error: null,
  data: null,
};

const authR = createReducer<AuthState, AnyAction>(initialState, {
  [GET_FIREBASE_USER]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_FIREBASE_USER_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_FIREBASE_USER_NULL]: (state) => ({
    ...state,
    loading: false,
    error: null,
    data: null,
  }),
  [ACTION_FIREBASE_LOGIN]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [ACTION_FIREBASE_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [ACTION_FIREBASE_LOGIN_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
  [ACTION_FIREBASE_LOGOUT]: (state) => ({
    ...state,
    loading: false,
    error: null,
    data: null,
  }),
});

export default authR;
