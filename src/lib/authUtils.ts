import { FirebaseUser, Error } from "../interface/AuthTypes";

interface authUtil {
  loading: boolean;
  auth: FirebaseUser;
  error: Error;
}

interface AUtils {
  login: (data: FirebaseUser) => authUtil;
  logout: () => authUtil;
  get: (data: FirebaseUser) => authUtil;
  error: (error: Error) => authUtil;
}

export const authUtils: AUtils = {
  login: (data) => ({
    loading: false,
    auth: data || null,
    error: null,
  }),
  logout: () => ({
    loading: false,
    auth: null,
    error: null,
  }),
  get: (data) => ({
    loading: false,
    auth: data || null,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    auth: null,
    error,
  }),
};
