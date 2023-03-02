import { GithubProfile } from "../../api";
import { AuthUtilState } from "../../lib/authUtils";

export type GithubState = { github: AuthUtilState<GithubProfile, Error> };
