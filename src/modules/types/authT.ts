export type FirebaseUser = firebase.default.User | null;

export interface AuthState {
  loading: boolean;
  error: Error | null;
  data: FirebaseUser;
}
