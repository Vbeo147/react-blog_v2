import { GithubProfile } from "../../api/github";

export interface GithubState {
  loading: boolean;
  error: Error | null;
  data: GithubProfile | null;
}
