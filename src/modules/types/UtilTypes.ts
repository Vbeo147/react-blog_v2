import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../rootReducer";

export type ThunkUtil = ThunkAction<void, RootState, null, AnyAction>;
