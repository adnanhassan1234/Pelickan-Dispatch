import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";
import axios from "axios";
import * as alert from "../actions";
import * as redirect from "../actions";
import { onGetToken, onRemoveToken, onSaveToken } from "@/utils/useToken";
// variables
const api_key = import.meta.env.VITE_BASE_API_KEY;
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* onLoginUser(action) {
  const { email, password } = action.payload;
  try {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("api_key", api_key);
    const response = yield axios.post("/companyuser/login", data);
    yield put({
      type: t.LOGIN_USER_SUCCESS,
      payload: response.data,
    });
    if (response.data.email_verified === 0) {
      yield put(redirect.setRedirectAction("/email-verification"));
      return;
    }
    onSaveToken({ token: response.data.jwt });
    yield put(redirect.setRedirectAction("/"));
  } catch (error) {
    yield put({
      type: t.LOGIN_USER_FAIL,
      payload: error,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message || error.response.message,
          type: "danger",
          status: true,
        },
      })
    );
  }
}
function* watchLoginUser() {
  yield takeLatest(t.LOGIN_USER, onLoginUser);
}
function* onRegisterUser(action) {
  const {
    fName,
    lName,
    cName,
    uName,
    email,
    password,
    pNumber,
    title,
    address,
  } = action.payload.data;
  let data = new FormData();
  data.append("api_key", api_key);
  data.append("first_name", fName);
  data.append("last_name", lName);
  data.append("username", uName);
  data.append("email", email);
  data.append("password", password);
  data.append("title", title);
  data.append("phone_number", pNumber); 
  data.append("address", address);
  data.append("companyname", cName);
  try {
    const response = yield axios.post("/companyuser/register", data);
    yield put({
      type: t.REGISTER_USER_SUCCESS,
      payload: response.data,
    });
    yield put(redirect.setRedirectAction("/email-verification"));
  } catch (error) {
    yield put({
      type: t.REGISTER_USER_FAIL,
      payload: error,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message || error.data.message,
          type: "danger",
          status: true,
        },
      })
    );
  }
}
function* watchRegisterUser() {
  yield takeLatest(t.REGISTER_USER, onRegisterUser);
}



function* onEmailVerification(action) {
  const { email } = action.payload;
  let data = new FormData();
  data.append("api_key", api_key);
  data.append("email", email);
  try {
    const response = yield axios.post("/companyuser/send-email", data);
    yield put({
      type: t.EMAIL_VERIFICATION_SUCCESS,
      payload: response.data,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: response.data.message,
          type: "success",
          status: true,
        },
      })
    );
  } catch (error) {
    yield put({
      type: t.EMAIL_VERIFICATION_FAIL,
      payload: error,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message || error.data.message,
          type: "danger",
          status: true,
          id: Math.random(),
        },
      })
    );
  }
}

function* watchEmailVerification() {
  yield takeLatest(t.EMAIL_VERIFICATION, onEmailVerification);
}
function* onEmailForget(action) {
  const { email } = action.payload;
  let data = new FormData();
  data.append("api_key", api_key);
  data.append("email", email);
  try {
    const response = yield axios.post("/companyuser/forgot_password", data);
    yield put({
      type: t.EMAIL_FORGET_SUCCESS,
      payload: response.data,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: response.data.message,
          type: "success",
          status: true,
        },
      })
    );
    // yield put(redirect.setRedirectAction("/"));
  } catch (error) {
    yield put({
      type: t.EMAIL_FORGET_FAIL,
      payload: error,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message || error.data.message,
          type: "danger",
          status: true,
          id: Math.random(),
        },
      })
    );
  }
}
function* watchForgetPassowrd() {
  yield takeLatest(t.EMAIL_FORGET, onEmailForget);
}
function* onResetPassword(action) {
  const { password, token } = action.payload;
  let data = new FormData();
  data.append("api_key", api_key);
  data.append("token", token);
  data.append("password", password);
  try {
    const response = yield axios.post("/companyuser/change_password", data);
    yield put({
      type: t.RESET_PASSWORD_SUCCESS,
      payload: response.data,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: response.data.message,
          type: "success",
          status: true,
        },
      })
    );
    yield delay(4000);
    yield put(redirect.setRedirectAction("/"));
  } catch (error) {
    yield put({
      type: t.RESET_PASSWORD_FAIL,
      payload: error,
    });
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message || error.data.message,
          type: "danger",
          status: true,
        },
      })
    );
  }
}
function* watchResetPassowrd() {
  yield takeLatest(t.RESET_PASSWORD, onResetPassword);
}
function* onEmailValidation(action) {
  const { token } = action.payload;
  let data = new FormData();
  data.append("api_key", api_key);
  const config = {
    method: "post",
    url: "/companyuser/verified-email",
    data: data,
    headers: { "Content-Type": "multipart/form-data", Authorization: token },
  };
  try {
    const response = yield axios(config);
    yield put({
      type: t.EMAIL_VALIDATION_SUCCESS,
      payload: response.data,
    });
    // yield put(
    // alert.setAlertAction({
    // payload: {
    // msg: response.data.message,
    // type: "success",
    // status: true,
    // },
    // })
    // );
    // yield delay(4000);
    // yield put(redirect.setRedirectAction("/"));
  } catch (error) {
    yield put({
      type: t.EMAIL_VALIDATION_FAIL,
      payload: error,
    });
    // yield put(
    // alert.setAlertAction({
    // payload: {
    // msg: error.message,
    // type: "danger",
    // status: true,
    // id: Math.random(),
    // },
    // })
    // );
  }
}
function* watchEmailValidate() {
  yield takeLatest(t.EMAIL_VALIDATION, onEmailValidation);
}
function* onAuthUser() {
  const token = onGetToken();
  let data = new FormData();
  data.append("api_key", api_key);
  data.append("Authorization", token);
  const config = {
    method: "post",
    url: "/companyuser/get-user",
    data: data,
    headers: { "Content-Type": "multipart/form-data", Authorization: token },
  };
  try {
    const response = yield axios(config);
    yield put({
      type: t.AUTH_USER_SUCCESS,
      payload: response.data,
    });
    yield put(redirect.setRedirectAction("/"));
  } catch (error) {
    yield put({
      type: t.AUTH_USER_FAIL,
      payload: error,
    });
    // onRemoveToken();
    // yield put(redirect.setRedirectAction("/"));
  }
}
function* watchAuthUser() {
  yield takeLatest(t.AUTH_USER, onAuthUser);
}
export function* authSaga() {
  yield all([
    watchLoginUser(),
    watchRegisterUser(),
    watchEmailVerification(),
    watchForgetPassowrd(),
    watchResetPassowrd(),
    watchEmailValidate(),
    watchAuthUser(),
  ]);
}
