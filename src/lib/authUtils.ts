export const authUtils = {
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (data: firebase.default.auth.UserCredential) => ({
    loading: false,
    data,
    error: null,
  }),
  logout: () => ({
    loading: false,
    data: null,
    error: null,
  }),
  error: (error: string) => ({
    loading: false,
    data: null,
    error,
  }),
};
