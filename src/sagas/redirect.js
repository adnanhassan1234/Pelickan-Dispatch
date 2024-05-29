import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* setRedirect() {
  yield delay(100);
  yield put({
    type: t.RESET_REDIRECT,
  });
}

function* watchRedirect() {
  yield takeLatest(t.SET_REDIRECT, setRedirect);
}

export function* redirectSaga() {
  yield all([watchRedirect()]);
}
