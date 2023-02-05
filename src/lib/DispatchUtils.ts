import { ActionDisFunc, FirebaseUser, Error } from "../interface/AuthTypes";

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
