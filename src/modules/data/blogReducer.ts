import { AnyAction } from "redux";
import { createAction, createReducer } from "typesafe-actions";
import { blogState, blogType } from "../types/blogTypes";
import onSnaptUtil from "../../lib/SnapUtil";

const GET_BLOG_SUCCESS = "blog/GET_BLOG_SUCCESS";
const GET_BLOG_ERROR = "blog/GET_BLOG_ERROR";

const getBlogSuccess = createAction(GET_BLOG_SUCCESS)<blogType[]>();
const getBlogError = createAction(GET_BLOG_ERROR)<Error>();

export function BlogSnapThunk() {
  return onSnaptUtil("blog", getBlogSuccess, getBlogError);
}

const initialState: blogState = {
  loading: true,
  error: null,
  blog: [],
};

const blogReducer = createReducer<blogState, AnyAction>(initialState, {
  [GET_BLOG_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    blog: action.payload,
  }),
  [GET_BLOG_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default blogReducer;
