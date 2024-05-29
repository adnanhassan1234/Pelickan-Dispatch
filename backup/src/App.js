import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import VerifyEmail from "./components/auth/VerifyEmail";
import "./components/auth/Auth.css";
import PrivateRoute from "./components/utils/PrivateRoute";
import ForgetPassword from "./components/auth/ForgetPassword";
import NewPassword from "./components/auth/NewPassword";
import EmailVerified from "./components/auth/EmailVerified";
import { loadUser } from "./reducer/auth";
import { useDispatch } from "react-redux";
import NotVerifed from "./components/auth/NotVerifed";
import "./components/style.css";
import "./pages/pages.css";
import VulttureDashboard from "./components/VulttureDashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      api_key: process.env.REACT_APP_API_KEY,
    };
    if (localStorage?.token) {
      dispatch(loadUser(data));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <VulttureDashboard />
            </PrivateRoute>
          }
        />

        {/* <Route path="/" element={<VulttureDashboard />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/reset-password/:token" element={<NewPassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/email-verification" element={<VerifyEmail />} />
        <Route exact path="/verify-your-email" element={<NotVerifed />} />
        <Route
          exact
          path="/email-verified/:token"
          element={<EmailVerified />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
