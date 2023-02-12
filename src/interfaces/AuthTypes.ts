export type FirebaseUser = firebase.default.User | null;

export type Error = string | null;

export type GithubUser = GithubAPI | null;

export interface GithubAPI {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type ActionDisFunc<T, M> = (
  type: T,
  param?: M
) => {
  type: T;
  param?: M;
};

export interface AuthAction {
  type: string;
  param?: FirebaseUser | GithubUser | Error;
}

export interface AuthState {
  loading: boolean;
  auth: FirebaseUser;
  github: GithubUser;
  error: Error;
}

export interface AuthSelector {
  AuthReducer: AuthState;
}
