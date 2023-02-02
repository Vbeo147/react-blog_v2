import { IUser } from "../interface/AuthTypes";

export const authUtils = {
  login: (data: IUser) => ({
    loading: false,
    auth: data,
    error: null,
  }),
  logout: () => ({
    loading: false,
    auth: null,
    error: null,
  }),
  get: (data?: IUser) => ({
    loading: false,
    auth: data,
    error: null,
  }),
  error: (error: string) => ({
    loading: false,
    auth: null,
    error,
  }),
};
