export type FirebaseUser = firebase.default.auth.UserMetadata;

export type Error = string;

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
    auth: FirebaseUser | null;
    error: Error | null;
  };
}

export interface AuthSelector {
  AuthReducer: AuthState;
}
