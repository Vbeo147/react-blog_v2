export interface AuthUtilState<D, E = any> {
  loading: boolean;
  data: D | null;
  error: E | null;
}

export const authUtils = {
  initial: <D, E = any>(initialData?: D): AuthUtilState<D, E> => {
    return {
      loading: true,
      data: initialData || null,
      error: null,
    };
  },
  loading: <D, E = any>(data?: D): AuthUtilState<D, E> => {
    return {
      loading: true,
      data: data || null,
      error: null,
    };
  },
  success: <D, E = any>(data: D): AuthUtilState<D, E> => {
    return {
      loading: false,
      data,
      error: null,
    };
  },
  error: <D, E = any>(error: E): AuthUtilState<D, E> => ({
    loading: false,
    data: null,
    error,
  }),
  null: <D, E = any>(data?: D): AuthUtilState<D, E> => ({
    loading: false,
    data: data || null,
    error: null,
  }),
};
