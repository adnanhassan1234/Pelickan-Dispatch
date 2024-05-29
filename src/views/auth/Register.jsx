import { onRegisterUser } from "@/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import onResetAlert from "@/utils/resetAlert";
import PropTypes from "prop-types";
import Spinner from "@/component/spinners/Spinner";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
function Register({ url }) {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    cName: "",
    uName: "",
    email: "",
    password: "",
    cPassword: "",
    pNumber: "",
    title: "",
    address: "",
  });
  const [err, setErr] = useState({});
  const {
    fName,
    lName,
    cName,
    uName,
    email,
    password,
    cPassword,
    pNumber,
    title,
    address,
  } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (url) {
      navigate(url, { state: { email } });
    }
  }, [url, navigate, dispatch]); //eslint-disable-line

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const error = onValidate(formData);
    setErr(error);

    if (Object.keys(error).length === 0) {
      onResetAlert(dispatch);
      dispatch(onRegisterUser({ data: formData, navigate }));
    }
  };
  const onValidate = (values) => {
    var regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.])(?=.{8,})/;
    var emi = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
    let error = {};
    if (!values.uName) {
      error.uName = "*User Name is required";
    }
    if (!values.cName) {
      error.cName = "*Comapny Name is required";
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
    <div className="auth__container">
      <div className="auth__inner">
        <div className="auth__left">
          <img src={Bg} alt="" />
        </div>
        <div className="auth__right">
          <form onSubmit={onSubmit} className="auth__form">
            <img src={Logo} className="logo__large" alt="Main_Logo" />
            <h1>User Registration</h1>
            <div className="auth__input--group">
              <div className="auth__form--fields">
                <label htmlFor="fName">First Name</label>
                <input
                  id="fName"
                  name="fName"
                  value={fName}
                  type="fName"
                  placeholder="First Name"
                  onChange={onChange}
                />
                {/* <span>{err.fir}</span> */}
              </div>
              <div className="auth__form--fields">
                <label htmlFor="lName">Last Name</label>
                <input
                  id="lName"
                  name="lName"
                  value={lName}
                  type="lName"
                  placeholder="Last Name"
                  onChange={onChange}
                />
                {/* <span>InValid Email</span> */}
              </div>
            </div>
            <div className="auth__input--group">
              <div className="auth__form--fields">
                <label htmlFor="cName">Company Name</label>
                <input
                  id="cName"
                  name="cName"
                  value={cName}
                  type="cName"
                  placeholder="Company Name"
                  onChange={onChange}
                />
                <span>{err.cName}</span>
              </div>
              <div className="auth__form--fields">
                <label htmlFor="uName">Username</label>
                <input
                  id="uName"
                  name="uName"
                  value={uName}
                  type="uName"
                  placeholder="User Name"
                  onChange={onChange}
                />
                <span>{err.uName}</span>
              </div>
            </div>
            <div className="auth__form--fields">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder="Example@gmail.com"
                onChange={onChange}
                autoComplete="off"
              />
              <span>{err.email}</span>
            </div>
            <div className="auth__input--group">
              <div className="auth__form--fields">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Pick a strong password"
                  onChange={onChange}
                  autoComplete="off"
                />
                <span>{err.password}</span>
              </div>
              <div className="auth__form--fields">
                <label htmlFor="cPassword">Confirm Password</label>
                <input
                  id="cPassword"
                  name="cPassword"
                  value={cPassword}
                  type="password"
                  placeholder="Enter password again"
                  onChange={onChange}
                  autoComplete="off"
                />
                <span>{err.cPassword}</span>
              </div>
            </div>
            <div className="auth__input--group">
              <div className="auth__form--fields">
                <label htmlFor="pNumber">Phone Number</label>
                <input
                  id="pNumber"
                  name="pNumber"
                  value={pNumber}
                  type="pNumber"
                  placeholder="Enter Phone Number"
                  onChange={onChange}
                />
                {/* <span>InValid Password</span> */}
              </div>
              <div className="auth__form--fields">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  value={title}
                  type="title"
                  placeholder="Enter Title"
                  onChange={onChange}
                />
                {/* <span>InValid Password</span> */}
              </div>
            </div>
            <div className="auth__form--fields">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={address}
                type="address"
                placeholder="Enter Address"
                onChange={onChange}
                autoComplete="off"
              />
              {/* <span>InValid Password</span> */}
            </div>
            {/* <Link to="/forget">Forget Password?</Link> */}
            <button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Register "}
            </button>
            <h3>
              Dont you have an account? <Link to="/">Sign in</Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}
Register.propTypes = {
  url: PropTypes.string,
};
export default Register;
