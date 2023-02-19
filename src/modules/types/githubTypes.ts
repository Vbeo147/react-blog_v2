import { GithubProfile } from "../../api/github";
import { AuthUtilState } from "../../lib/authUtils";

export type GithubState = { github: AuthUtilState<GithubProfile, Error> };
