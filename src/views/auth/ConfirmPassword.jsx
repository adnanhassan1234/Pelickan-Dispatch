import { onResetPassword } from "@/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import onResetAlert from "@/utils/resetAlert";
import Spinner from "@/component/spinners/Spinner";
import { CloseEyePassword, EyePassword } from "@/assets/svg/Svg";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
function ConfirmPassword({ url }) {
  const [formData, setFormData] = useState({
    password: "",
    cPassword: "",
  });
  const [type, setType] = useState({
    password: true,
    cPassword: true,
  });
  const [err, setErr] = useState({});
  const { loading } = useSelector((state) => state.auth);

  const { password, cPassword } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { search } = useLocation();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const error = onValidate(formData);
    setErr(error);
    if (Object.keys(error).length === 0) {
      const data = {
        password,
        token: search?.split("=")[1],
      };
      onResetAlert(dispatch);
      dispatch(onResetPassword(data));
    }
  };

  useEffect(() => {
    if (url) {
      navigate(url);
    }
  }, [url, navigate]);

  const onValidate = (values) => {
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
    <div className="auth__container">
      <div className="auth__inner">
        <div className="auth__left">
          <img src={Bg} alt="" />
        </div>
        <div className="auth__right">
          <form onSubmit={onSubmit} className="auth__form">
            <img src={Logo} className="logo__large" alt="Main_Logo" />
            <h1>Reset Password</h1>
            <div className="auth__form--fields">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                value={password}
                type={type.password ? "password" : "text"}
                placeholder="Enter your password"
                onChange={onChange}
                autoComplete="off"
              />
              <div
                onClick={() => setType({ ...type, password: !type.password })}
              >
                {type.password ? <EyePassword /> : <CloseEyePassword />}
              </div>
              <span>{err.password}</span>
            </div>
            <div className="auth__form--fields">
              <label htmlFor="cPassword">Confirm Password</label>
              <input
                id="cPassword"
                name="cPassword"
                value={cPassword}
                type={type.cPassword ? "password" : "text"}
                placeholder="Enter your password again"
                onChange={onChange}
                autoComplete="off"
              />
              <div
                onClick={() => setType({ ...type, cPassword: !type.cPassword })}
              >
                {type.cPassword ? <EyePassword /> : <CloseEyePassword />}
              </div>
              <span>{err.cPassword}</span>
            </div>
            {/* <Link to="/forget">Forget Password?</Link> */}
            <button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Submit "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
ConfirmPassword.propTypes = {
  url: PropTypes.string,
};
export default ConfirmPassword;
