import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* setAlert() {
  const id = Math.random();
  yield delay(7000);
  yield put({
    type: t.REMOVE_ALERT,
    payload: { payload: id },
  });
}

function* watchAlert() {
  yield takeLatest(t.SET_ALERT, setAlert);
}
export function* alertSaga() {
  yield all([watchAlert()]);
}
