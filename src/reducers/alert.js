import { SET_ALERT, REMOVE_ALERT, RESET_ALERT } from "../types";

const initialState = {};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return { ...state, payload };
    case RESET_ALERT:
    case REMOVE_ALERT:
      return {};
    default:
      return state;
  }
};
export default alertReducer;
