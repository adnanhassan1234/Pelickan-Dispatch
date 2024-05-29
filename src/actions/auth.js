import * as t from "../types";

export const onLoginUser = (data) => {
  return {
    type: t.LOGIN_USER,
    payload: data,
  };
};

export const onRegisterUser = (data) => {
  return {
    type: t.REGISTER_USER,
    payload: data,
  };
};

export const onEmailVerification = (data) => {
  return {
    type: t.EMAIL_VERIFICATION,
    payload: data,
  };
};

export const onEmailForget = (data) => {
  return {
    type: t.EMAIL_FORGET,
    payload: data,
  };
};

export const onResetPassword = (data) => {
  return {
    type: t.RESET_PASSWORD,
    payload: data,
  };
};

export const onEmailValidation = (data) => {
  return {
    type: t.EMAIL_VALIDATION,
    payload: data,
  };
};

export const onAuthUser = () => {
  return {
    type: t.AUTH_USER,
  };
};
