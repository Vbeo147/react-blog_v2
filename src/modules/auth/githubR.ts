import { AxiosError } from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { createAsyncAction, createReducer } from "typesafe-actions";
import { GithubProfile, getGithubProfile } from "../../api/github";
import { RootState, useAppSelector } from "../rootReducer";
import { GithubState } from "../types/githubT";

const GET_GITHUB_PROFILE = "github/GET_GITHUB_PROFILE";
const GET_GITHUB_PROFILE_SUCCESS = "github/GET_GITHUB_PROFILE_SUCCESS";
const GET_GITHUB_PROFILE_ERROR = "github/GET_GITHUB_PROFILE_ERROR";
const GET_GITHUB_PROFILE_NULL = "github/GET_GITHUB_PROFILE_NULL";

const getGithubProfileAsync = createAsyncAction(
  GET_GITHUB_PROFILE,
  GET_GITHUB_PROFILE_SUCCESS,
  GET_GITHUB_PROFILE_ERROR,
  GET_GITHUB_PROFILE_NULL
)<undefined, GithubProfile, AxiosError, undefined>();

export function getGithubProfileThunk(
  userId: string
): ThunkAction<void, RootState, null, AnyAction> {
  return async (dispatch, getState) => {
    const { request, success, failure, cancel } = getGithubProfileAsync;
    dispatch(request());
    if (getState().authR.data) {
      try {
        const githubProfile = await getGithubProfile(userId);
        dispatch(success(githubProfile));
      } catch (error) {
        dispatch(failure(error as AxiosError));
      }
    } else {
      dispatch(cancel());
    }
  };
}

const initialState: GithubState = {
  loading: true,
  error: null,
  data: null,
};

const githubR = createReducer<GithubState, AnyAction>(initialState, {
  [GET_GITHUB_PROFILE]: (state) => ({
    ...state,
    loading: true,
    error: null,
    data: null,
  }),
  [GET_GITHUB_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [GET_GITHUB_PROFILE_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    data: null,
  }),
  [GET_GITHUB_PROFILE_NULL]: (state) => ({
    ...state,
    loading: false,
    error: null,
    data: null,
  }),
});

export default githubR;
