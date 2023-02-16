import { AuthUtilState } from "../../lib/authUtils";

export type FirebaseUser = firebase.default.User | null;

export type AuthState = { auth: AuthUtilState<FirebaseUser, Error> };
