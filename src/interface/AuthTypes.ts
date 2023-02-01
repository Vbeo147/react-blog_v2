export interface AuthAction {
  type: string;
  param: firebase.default.auth.UserCredential | string;
}

export interface AuthState {
  github: {
    loading: boolean;
    auth: firebase.default.auth.UserCredential | null;
    error: string | null;
  };
}
