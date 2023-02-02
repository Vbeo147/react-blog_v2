export interface IUser {
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    createdAt: string;
    creationTime: string;
    lastLoginAt: string;
    lastSignInTime: string;
  };
  photoURL: string;
  uid: string;
}

export type Error = string;

export type ActionDispatchFunc = (
  type: string,
  param?: IUser | Error
) => { type: string; param?: IUser | Error };

export interface AuthAction {
  type: string;
  param?: IUser | Error;
}

export interface AuthState {
  github: {
    loading: boolean;
    auth: IUser | null;
    error: Error | null;
  };
}

export interface ISelector {
  AuthReducer: AuthState;
}
