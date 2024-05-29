import { combineReducers } from "redux";
import authReducer from "./auth";
import alertReducer from "./alert";
import redirectReducer from "./redirects";
import driversReducer from "./drivers";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  redirect: redirectReducer,
  drivers: driversReducer,
  modal: modalReducer,
});

export default rootReducer;
