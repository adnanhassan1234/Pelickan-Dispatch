import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser, resetRegister } from "../../reducer/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Logo from "../../images/logo.svg";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    companyname: "",
    email: "",
    password: "",
    cPassword: "",
    phone_number: "",
    address: "",
    title: "",
    api_key: process.env.REACT_APP_API_KEY,
    isVerified: false,
  });

  const [err, setErr] = useState({});
  const {
    first_name,
    last_name,
    username,
    companyname,
    email,
    password,
    cPassword,
    phone_number,
    address,
    title,
  } = formData;
  const { isLoading, isAuthenticate, message, user, isError, emailVerified } =
    useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoading === false && isError === true && message !== "") {
      toast.error(message);
    }
    if (emailVerified === 1 && isAuthenticate) {
      navigate("/");
    }
    if (user && emailVerified === 0) {
      dispatch(resetRegister());
      navigate("/email-verification", { state: formData });
    }
  }, [
    isLoading,
    isAuthenticate,
    message,
    emailVerified,
    navigate,
    user,
    isError,
    dispatch,
  ]); //eslint-disable-line

  // useEffect(() => {
  //   let timer1 = setTimeout(() => {
  //     setErr("");
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [err]);
  const onChange = (e) => {
    // setErr("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validate(formData);
    setErr(error);

    if (Object.keys(error).length === 0) {
      dispatch(signUpUser(formData));
    }
  };

  const validate = (values) => {
    var regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})/;
    var emi = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
    let error = {};
    if (!values.username) {
      error.username = "*User Name is required";
    }
    if (!values.companyname) {
      error.companyname = "*Comapny Name is required";
    }
    if (!values.email) {
      error.email = "*Email is required";
    } else if (!values.email.match(emi)) {
      error.email =
        "*Sorry, only letters (a-z), numbers (0-9), and  (. and -) are allowed";
    }
    if (!values.password) {
      error.password = "*Password is Required";
    } else if (values.password !== values.cPassword) {
      error.cPassword = "*Password missmatch";
    } else if (!values.password.match(regPassword)) {
      error.password =
        "*Minimum eight characters, at least one capital letter,one number and one special character is Required";
    }
    return error;
  };
  return (
    <div className="registerContainer">
      <div className="registerInnerContainer">
        <img
          src={Logo}
          alt="vultture logo"
          style={{ marginTop: "30px", marginBottom: "10px", width: "250px" }}
        />
        <ToastContainer />

        <form className="registerCard" onSubmit={(e) => onSubmit(e)}>
          <h2>
            <i className="fa-solid fa-address-card"></i> Register
          </h2>
          <div style={{ display: "flex" }}>
            <div className="auth__input">
              <h4>First Name</h4>
              <input
                type="text"
                name="first_name"
                value={first_name}
                placeholder="first name"
                onChange={(e) => onChange(e)}
                className="authInput"
              />
            </div>
            <div className="auth__input">
              <h4>Last Name</h4>
              <input
                className="authInput"
                type="text"
                name="last_name"
                value={last_name}
                placeholder="second name"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="auth__input">
            <h4>
              {err.companyname ? (
                <span className="auth__error">{err.companyname}</span>
              ) : (
                <span>*Company Name</span>
              )}
            </h4>
            <input
              className="authInput"
              type="text"
              name="companyname"
              value={companyname}
              placeholder="comapny name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="auth__input">
            <h4>
              {err.username ? (
                <span className="auth__error">{err.username}</span>
              ) : (
                <span>*User Name</span>
              )}
            </h4>
            <input
              className="authInput"
              type="text"
              name="username"
              value={username}
              placeholder="username"
              onChange={(e) => onChange(e)}
            />
          </div>
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
              name="email"
              value={email}
              placeholder="email"
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
              placeholder="password"
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
              placeholder="password again"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <div className="auth__input">
              <h4>Phone Number</h4>
              <input
                className="authInput"
                type="tel"
                name="phone_number"
                value={phone_number}
                placeholder="phone number"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="auth__input">
              <h4>Title</h4>
              <input
                className="authInput"
                type="text"
                name="title"
                value={title}
                placeholder="title"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="auth__input">
            <h4>Address</h4>
            <input
              className="authInput"
              type="text"
              name="address"
              value={address}
              placeholder="address"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="auth__input">
            <button type="submit">Register</button>
          </div>
          <div>
            <p style={{ padding: "0 10px" }}>Already have an account?</p>
          </div>
          <div className="auth__input">
            <Link
              to="/login"
              onClick={() => {
                dispatch(resetRegister());
              }}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
