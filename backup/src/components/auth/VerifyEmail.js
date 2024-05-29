import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { emailVerify } from "../../reducer/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerCircular } from "spinners-react";
import Logo from "../../images/logo.svg";

function VerifyEmail() {
  const { state } = useLocation();
  const [emailClickSpinner, setEmailClickSpinner] = useState(false);
  const [resendemailClickSpinner, setResendEmailClickSpinner] = useState(false);
  const { isError, message, isAuthenticate, isVerified, isLoading } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isVerified === 1 && isAuthenticate) {
      navigate("/");
    }
    if (!isError && message !== "") {
      toast.success(message);
    }
  }, [message, isError, isVerified, isAuthenticate, navigate]);

  const verifyNow = (e) => {
    if (e.target.innerText === state?.email) {
      setEmailClickSpinner(true);
    } else if (e.target.innerText === "Resend Email") {
      setResendEmailClickSpinner(true);
    }
    console.log(e.target.innerText);
    const data = {
      api_key: process.env.REACT_APP_API_KEY,
      email: state?.email,
    };
    dispatch(emailVerify(data));
  };
  useEffect(() => {
    if (isLoading === false) {
      setEmailClickSpinner(false);
      setResendEmailClickSpinner(false);
    }
  }, [isLoading]);
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          style={{ marginBottom: "15px", width: "250px" }}
          alt="vulture logo"
        />
        <ToastContainer />

        <div className="loginCard">
          <h2 style={{ textAlign: "center" }}>Verify Your Email</h2>
          <p style={{ textAlign: "center" }} className="auth__email">
            You're almost there! Just <b>click on the email</b> to complete your
            signup. <br />{" "}
            <span onClick={verifyNow}>{state.email && state?.email}</span>
          </p>
          <h1>{isLoading}</h1>

          <div className="auth__spinner">
            <SpinnerCircular
              enabled={emailClickSpinner}
              сolor="#38ad48"
              size={30}
              secondaryColor="rgba(0,0,0,0.44)"
            />
          </div>

          <p style={{ textAlign: "center" }}>
            if you don't see it, you may need to check your spam folder.
          </p>
          <p style={{ textAlign: "center" }}>Still can't find the email?</p>
          {/* <div className="auth__input">
            <button onClick={() => verifyNow()}>Resend Email</button>
            <div className="auth__spinner">
              <SpinnerCircular
                enabled={isLoading}
                сolor="#38ad48"
                size={30}
                secondaryColor="rgba(0,0,0,0.44)"
              />
            </div>
          </div> */}
          <div className="auth__input">
            <button
              type="submit"
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={verifyNow}
            >
              Resend Email
              <SpinnerCircular
                style={{ marginLeft: "10px" }}
                enabled={resendemailClickSpinner}
                сolor="#000"
                size={30}
                secondaryColor="#fff"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
