import { all } from "redux-saga/effects";

import { authSaga } from "./auth";
import { alertSaga } from "./alert";
import { redirectSaga } from "./redirect";
import { driverSaga } from "./drivers";

function* rootSaga() {
  yield all([authSaga(), alertSaga(), redirectSaga(), driverSaga()]);
}

export default rootSaga;
