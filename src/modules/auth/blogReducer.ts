import { AnyAction } from "redux";
import { createAction, createReducer } from "typesafe-actions";
import { blogState, blogType } from "../types/blogTypes";
import { ThunkUtil } from "../types/UtilTypes";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { dbService } from "../../firebase";

const GET_BLOG_SUCCESS = "blog/GET_BLOG_SUCCESS";
const GET_BLOG_ERROR = "blog/GET_BLOG_ERROR";

const getBlogSuccess = createAction(GET_BLOG_SUCCESS)<blogType[]>();
const getBlogError = createAction(GET_BLOG_ERROR)<Error>();

export function BlogSnapThunk(): ThunkUtil {
  return async (dispatch) => {
    try {
      onSnapshot(
        query(collection(dbService, "blog"), orderBy("title", "desc")),
        (snapshot) => {
          const blogObj = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          dispatch(getBlogSuccess(blogObj as blogType[]));
        }
      );
    } catch (error) {
      dispatch(getBlogError(error as Error));
    }
  };
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
