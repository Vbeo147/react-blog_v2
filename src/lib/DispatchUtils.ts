import { ActionDispatchFunc } from "../interface/AuthTypes";

export const ActionDispatch: ActionDispatchFunc = (type, param) => {
  if (param) {
    return { type, param };
  } else {
    return { type };
  }
};
