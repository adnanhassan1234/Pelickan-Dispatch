import { SET_REDIRECT, RESET_REDIRECT } from "../types";

const initialState = {};

const redirectReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_REDIRECT:
      return { ...state, payload };
    case RESET_REDIRECT:
      return {};
    default:
      return state;
  }
};

export default redirectReducer;
