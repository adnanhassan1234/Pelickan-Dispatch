import * as t from "../types";

const initialState = {
  data: [],
  loading: null,
  isError: null,
  screenLoading: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGIN_USER:
    case t.REGISTER_USER:
    case t.EMAIL_VERIFICATION:
    case t.RESET_PASSWORD:
    case t.EMAIL_FORGET:
    case t.EMAIL_VALIDATION:
      return {
        ...state,
        loading: true,
      };
    case t.AUTH_USER:
      return {
        ...state,
        loading: true,
        screenLoading: true,
      };
    case t.RESET_PASSWORD_SUCCESS:
    case t.EMAIL_FORGET_SUCCESS:
    case t.EMAIL_VERIFICATION_SUCCESS:
    case t.REGISTER_USER_SUCCESS:
    case t.LOGIN_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case t.AUTH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        screenLoading: false,
      };
    case t.EMAIL_VALIDATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        isError: false,
      };
    case t.RESET_PASSWORD_FAIL:
    case t.EMAIL_FORGET_FAIL:
    case t.EMAIL_VERIFICATION_FAIL:
    case t.REGISTER_USER_FAIL:
    case t.LOGIN_USER_FAIL:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case t.AUTH_USER_FAIL:
      return {
        ...state,
        loading: false,
        screenLoading: false,
      };
    case t.EMAIL_VALIDATION_FAIL:
      return {
        ...state,
        data: action.payload,
        loading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default mainReducer;
