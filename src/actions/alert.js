import * as t from "../types";

export const setAlertAction = (msg) => {
  return {
    type: t.SET_ALERT,
    payload: msg.payload ,
  };
};

export const removeAlertAction = () => {
  return {
    type: t.REMOVE_ALERT,
  };
};
export const resetAlertAction = () => {
  return {
    type: t.RESET_ALERT,
  };
};
