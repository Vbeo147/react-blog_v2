import { ActionDisFunc, FirebaseUser, Error } from "../interfaces/AuthTypes";

export const AuthActionDis: ActionDisFunc<string, FirebaseUser | Error> = (
  type,
  param
) => {
  if (param) {
    return { type, param };
  } else {
    return { type };
  }
};
