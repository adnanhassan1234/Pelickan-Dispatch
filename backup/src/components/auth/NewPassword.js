import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../reducer/auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerCircular } from "spinners-react";
import Logo from "../../images/logo.svg";

function NewPassword() {
  const [err, setErr] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticate, message, isError, isVerified } = useSelector(
    (state) => state.auth
  );
  let { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    cPassword: "",
    api_key: process.env.REACT_APP_API_KEY,
  });
  const [startSpinner, setStartSpinner] = useState(false);
  const { password, cPassword } = formData;
  // useEffect(() => {
  //   let timer1 = setTimeout(() => {
  //     setErr("");
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [err]);
  useEffect(() => {
    if (isError === false && message !== "") {
      toast.success(message);
      setStartSpinner(true);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
    if (isError === true && message !== "") {
      toast.error(message);
    }
    if (isVerified === 1 && isAuthenticate) {
      navigate("/");
    }
  }, [message, isError, navigate, isVerified, isAuthenticate]);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      password,
      api_key: process.env.REACT_APP_API_KEY,
      token,
    };
    const error = validate(formData);
    setErr(error);
    if (Object.keys(error).length === 0) {
      dispatch(changePassword(data));
    }
  };
  const validate = (values) => {
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    let error = {};

    if (!values.password) {
      error.password = "*Password is Required";
    } else if (values.password !== values.cPassword) {
      error.cPassword = "*Password missmatch";
    } else if (!values.password.match(reg)) {
      error.password =
        "*Minimum eight characters, at least one letter and one number is Required";
    }
    return error;
  };
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          alt="vultture logo"
          style={{ marginBottom: "15px", width: "250px" }}
        />
        <ToastContainer />
        <div className="loginCard">
          {!startSpinner ? (
            <>
              <h2>
                <i className="fa-solid fa-key"></i> New Password
              </h2>
              <form onSubmit={(e) => onSubmit(e)}>
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
                    placeholder="your password"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="auth__input">
                  <h4>
                    {err.cPassword ? (
                      <span className="auth__error">{err.cPassword}</span>
                    ) : (
                      <span>*Confirm Password</span>
                    )}
                  </h4>

                  <input
                    className="authInput"
                    type="password"
                    name="cPassword"
                    value={cPassword}
                    placeholder="your password again"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="auth__input">
                  <button type="submit">Change</button>
                </div>
              </form>
            </>
          ) : (
            <div className="auth__spinner__newpassword">
              <SpinnerCircular
                enabled={startSpinner}
                сolor="#38ad48"
                size={30}
                secondaryColor="rgba(0,0,0,0.44)"
              />
              <h2>Redirecting, Please Wait!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
