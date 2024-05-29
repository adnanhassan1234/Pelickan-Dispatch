import React, { useState, useEffect } from "react";
import { forgetPassword, resetLogin } from "../../reducer/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import Logo from "../../images/logo.svg";

function ForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState({});
  const [data, setData] = useState({
    email: "",
    api_key: process.env.REACT_APP_API_KEY,
  });
  const { message, isError, isLoading, isVerified, isAuthenticate } =
    useSelector((state) => state.auth);
  const { email } = data;

  // useEffect(() => {
  //   let timer1 = setTimeout(() => {
  //     setErr("");
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [err]);

  useEffect(() => {
    if (isError === false && isLoading === false && message !== "") {
      toast.success(message);
    }
    if (isError === true && message !== "") {
      toast.error(message);
    }
    if (isVerified === 1 && isAuthenticate) {
      navigate("/");
    }
  }, [message, isError, isLoading, isVerified, isAuthenticate, navigate]);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let label;
    let msg;
    if (email === "") {
      label = "email";
      msg = "*Email is required";
      setErr({ label, msg });
    } else {
      setErr({});
      dispatch(forgetPassword(data));
      // toast.success("Please Check Your Mail");
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          style={{ marginBottom: "15px", width: "250px" }}
          alt="vultture logo"
        />
        <ToastContainer />

        <div className="loginCard">
          <h2>
            <i className="fa-solid fa-envelope"></i> Forget Password
          </h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="auth__input">
              <h4>
                {err.label === "email" ? (
                  <span className="auth__error">{err.msg}</span>
                ) : (
                  <span>*Email</span>
                )}
              </h4>
              <input
                className="authInput"
                type="email"
                name="email"
                value={email}
                placeholder="enter your email"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="auth__input">
              <button
                type="submit"
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Continue</span>
                {isLoading && (
                  <SpinnerCircular
                    enabled={true}
                    сolor="#000"
                    size={30}
                    secondaryColor="#fff"
                  />
                )}
              </button>
            </div>
          </form>
          <div className="auth__back">
            <Link to="/login">
              <i
                className="fa-solid fa-caret-left"
                onClick={() => dispatch(resetLogin())}
              ></i>
              back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
