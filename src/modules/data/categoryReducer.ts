import { AnyAction } from "redux";
import { createReducer } from "typesafe-actions";
import { createAction } from "typesafe-actions";
import onSnaptUtil from "../../lib/SnapUtil";
import { categoryState } from "../types/categoryTypes";

const GET_CATEGORY_SUCCESS = "category/GET_CATEGORY_SUCCESS";
const GET_CATEGORY_ERROR = "category/GET_CATEGORY_ERROR";

const getCategorySuccess = createAction(GET_CATEGORY_SUCCESS)<string[]>();
const getCategoryError = createAction(GET_CATEGORY_ERROR)<Error>();

export function CategorySnapThunk() {
  return onSnaptUtil("categories", getCategorySuccess, getCategoryError);
}

const initialState: categoryState = {
  loading: true,
  error: null,
  categories: [],
};

const categoryReducer = createReducer<categoryState, AnyAction>(initialState, {
  [GET_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    categories: action.payload,
  }),
  [GET_CATEGORY_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default categoryReducer;
