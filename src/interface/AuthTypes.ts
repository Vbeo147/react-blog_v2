export type FirebaseUser = firebase.default.User | null;

export type Error = string | null;

export type ActionDisFunc<T, M> = (
  type: T,
  param?: M
) => {
  type: T;
  param?: M;
};

export interface AuthAction {
  type: string;
  param?: FirebaseUser | Error;
}

export interface AuthState {
  loading: boolean;
  auth: FirebaseUser;
  error: Error;
}

export interface AuthSelector {
  AuthReducer: AuthState;
}
