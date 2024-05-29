import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../../reducer/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../images/logo.svg";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    api_key: process.env.REACT_APP_API_KEY,
  });
  const [err, setErr] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = data;
  const { isLoading, isAuthenticate, message, user, isError } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (
      isLoading === false &&
      isAuthenticate === false &&
      isError === true &&
      message !== ""
    ) {
      toast.error(message);
    }
    if (isAuthenticate === true && user !== null) {
      navigate("/");
    }
    if (user?.email_verified === 0) {
      dispatch(reset());
      navigate("/email-verification", { state: data });
      localStorage.removeItem("token");
    }
  }, [isLoading, isAuthenticate, message, navigate, user, isError]); //eslint-disable-line
  // useEffect(() => {
  //   let timer1 = setTimeout(() => {
  //     setErr("");
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [err]);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validate(data);
    setErr(error);
    if (Object.keys(error).length === 0) {
      dispatch(loginUser(data));
    }
  };

  const validate = (values) => {
    let error = {};
    if (!values.email) {
      error.email = "*Email is required";
    }
    if (!values.password) {
      error.password = "*Password is Required";
    }
    return error;
  };
  const resetState = () => {
    dispatch(reset());
  };
  return (
    // <div className="auth__parent__container">
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          alt="vulture logo"
          style={{ marginBottom: "15px", width: "250px" }}
        />
        <ToastContainer />

        <form className="loginCard" onSubmit={(e) => onSubmit(e)}>
          <h2>
            <i className="fa-solid fa-user"></i> Login
          </h2>
          <div className="auth__input">
            <h4>
              {err.email ? (
                <span className="auth__error">{err.email}</span>
              ) : (
                <span>*Email</span>
              )}
            </h4>
            <input
              className="authInput"
              type="text"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="auth__input">
            <h4>
              {err.password ? (
                <span className="auth__error">{err.password}</span>
              ) : (
                <span>*Password</span>
              )}
            </h4>
            <input
              className="authInput"
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="auth__forgetPassword">
            <p>
              Forget password? click{" "}
              <Link to="/forget-password" onClick={() => resetState()}>
                here
              </Link>
            </p>
          </div>
          <div className="auth__input">
            <button type="submit">Login</button>
          </div>
          <div>
            <p style={{ padding: "0 10px" }}>Don't have an account?</p>
          </div>
          <div className="auth__input">
            <Link to="/register" onClick={() => resetState()}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
