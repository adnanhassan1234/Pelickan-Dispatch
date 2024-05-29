import auth from "./reducer/auth";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: { auth: auth } });

export default store;
