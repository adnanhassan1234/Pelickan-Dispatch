import { all, put, takeLatest } from "redux-saga/effects";
import * as t from "../types";
import axios from "axios";
import * as alert from "../actions";

const api_key = import.meta.env.VITE_BASE_API_KEY;
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* onDriversDocs() {
  try {
    const data = new FormData();
    data.append("api_key", api_key);
    const response = yield axios.get("/document/ocr_documents", data);
    yield put({
      type: t.GET_DRIVERS_DOC_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: t.GET_DRIVERS_DOC_FAIL,
      payload: error,
    });
  }
}

function* watchDriversDocs() {
  yield takeLatest(t.GET_DRIVERS_DOC, onDriversDocs);
}

function* onUploadDriversDocs(action) {
  const { driverId, docType, zipFiles } = action.payload;
  try {
    const data = new FormData();
    data.append("driverId", driverId);
    data.append("docType", docType);
    data.append("zipFiles", zipFiles);

    data.append("api_key", api_key);
    const response = yield axios.post("/document/upload", data);
    yield put({
      type: t.UPLOAD_DRIVERS_DOC_SUCCESS,
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
    yield put(
      alert.setAlertAction({
        payload: {
          msg: error.response.data.message,
          type: "danger",
          status: true,
        },
      })
    );
    yield put({
      type: t.UPLOAD_DRIVERS_DOC_FAIL,
      payload: error,
    });
  }
}

function* watchUploadDriversDocs() {
  yield takeLatest(t.UPLOAD_DRIVERS_DOC, onUploadDriversDocs);
}

function* onGetDrivers(payload) {
  try {
    // const data = new FormData();
    // data.append("api_key", api_key);
    const response = yield axios.get("/user/get-all-users", payload);
    yield put({
      type: t.GET_DRIVERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: t.GET_DRIVERS_FAIL,
      payload: error,
    });
  }
}

function* watchGetDrivers() {
  yield takeLatest(t.GET_DRIVERS, onGetDrivers);
}
function* onGetOneDrivers(payload) {
  try {
    // const data = new FormData();
    // data.append("api_key", api_key);
    const response = yield axios.get("/get-one-user-admin", payload);
    yield put({
      type: t.GET_ONE_DRIVERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: t.GET_ONE_DRIVERS_FAIL,
      payload: error,
    });
  }
}

function* watchGetOneDrivers() {
  yield takeLatest(t.GET_ONE_DRIVERS, onGetOneDrivers);
}

export function* driverSaga() {
  yield all([watchDriversDocs(), watchUploadDriversDocs(), watchGetDrivers()]);
}
