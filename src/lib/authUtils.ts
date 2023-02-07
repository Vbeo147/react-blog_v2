import { FirebaseUser, Error, AuthState } from "../interfaces/AuthTypes";

interface AUtils {
  login: (data: FirebaseUser) => AuthState;
  logout: () => AuthState;
  error: (error: Error) => AuthState;
}

export const authUtils: AUtils = {
  login: (data = null) => ({
    loading: false,
    auth: data,
    github: null,
    error: null,
  }),
  logout: () => ({
    loading: false,
    auth: null,
    github: null,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    auth: null,
    github: null,
    error,
  }),
};
