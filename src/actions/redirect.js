import * as t from "../types";

export const setRedirectAction = (path) => {
  return {
    type: t.SET_REDIRECT,
    payload: path,
  };
};

export const removeRedirectAction = () => {
  return {
    type: t.RESET_REDIRECT,
  };
};
