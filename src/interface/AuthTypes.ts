export type FirebaseUser = firebase.default.User | null;

export type Error = string | null;

export type ActionDispatchFunc = (
  type: string,
  param?: FirebaseUser | Error
) => {
  type: string;
  param?: FirebaseUser | Error;
};

export interface AuthAction {
  type: string;
  param?: FirebaseUser | Error;
}

export interface AuthState {
  github: {
    loading: boolean;
    auth: FirebaseUser;
    error: Error;
  };
}

export interface AuthSelector {
  AuthReducer: AuthState;
}
