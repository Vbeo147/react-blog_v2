import {
  PreloadedState,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import ReduxThunk, { ThunkDispatch } from "redux-thunk";
import githubReducer from "./auth/githubReducer";
import authReducer from "./auth/authReducer";
import blogReducer from "./data/blogReducer";
import categoryReducer from "./data/categoryReducer";

export const rootReducer = combineReducers({
  githubReducer,
  authReducer,
  blogReducer,
  categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const initStore = (initState?: PreloadedState<RootState>) =>
  createStore(rootReducer, initState, applyMiddleware(ReduxThunk));
export const store = initStore();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
