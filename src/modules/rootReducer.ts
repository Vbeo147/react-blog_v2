import {
  PreloadedState,
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  AnyAction,
} from "redux";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import ReduxThunk, { ThunkDispatch } from "redux-thunk";
import logger from "redux-logger";
import githubR from "./auth/githubR";
import authR from "./auth/authR";

export const rootReducer = combineReducers({ githubR, authR });

export type RootState = ReturnType<typeof rootReducer>;

export const initStore = (initState?: PreloadedState<RootState>) =>
  createStore(rootReducer, initState, applyMiddleware(ReduxThunk, logger));
export const store = initStore();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
