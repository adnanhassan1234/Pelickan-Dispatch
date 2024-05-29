import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { onLoginUser } from "@/actions";
import onResetAlert from "@/utils/resetAlert";
import PropTypes from "prop-types";
import Spinner from "@/component/spinners/Spinner";

import { CloseEyePassword, EyePassword } from "@/assets/svg/Svg";
import { onGetCred, onRemoveCred, onSaveCred } from "@/utils/rememberMe";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
import { onSaveToken } from "@/utils/useToken";
// import { onSaveToken } from "@/utils/useToken";

function Login({ url }) {
  const remmember = onGetCred() || "";
  const [formData, setFormData] = useState({
    username: remmember.email || "",
    password: remmember.password || "",
    isChecked: remmember.isChecked || false,
  });
  const [type, setType] = useState(true);
  const [err, setErr] = useState({});
  const { username, password, isChecked } = formData;
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (url) {
      navigate(url, { state: { username } });
    }
  }, [url, navigate, dispatch]); //eslint-disable-line

  const onSubmit = (e) => {
    onSaveToken({ token: "response.data.jwt" });
    // e.preventDefault();
    // const error = onValidate(formData);
    // setErr(error);

    // if (Object.keys(error).length === 0) {
    //   onResetAlert(dispatch);
    //   formData.isChecked
    //     ? onSaveCred({ email, password, isChecked })
    //     : onRemoveCred();
    //   dispatch(onLoginUser(formData));
    // }
  };
  const onValidate = (values) => {
    let error = {};
    if (!values.username) {
      error.username = "*username is required";
    }
    if (!values.password) {
      error.password = "*Password is Required";
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
            <h1>User Login</h1>
            <div className="auth__form--fields">
              <label htmlFor="email">Username</label>
              <input
                id="username"
                name="username"
                value={username}
                type="username"
                placeholder="Enter your username"
                onChange={onChange}
                autoComplete="on"
              />
              <span>{err.username}</span>
            </div>
            <div className="auth__form--fields">
              <label htmlFor="email">Passowrd</label>
              <input
                id="password"
                name="password"
                value={password}
                type={type ? "password" : "text"}
                placeholder="*********"
                onChange={onChange}
                autoComplete="on"
              />
              <div onClick={() => setType(!type)}>
                {type ? <EyePassword /> : <CloseEyePassword />}
              </div>
              <span>{err.password}</span>
            </div>
            <div className="auth__remember">
              <label className="auth__check">
                Remember me
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, isChecked: e.target.checked })
                  }
                  type="checkbox"
                  checked={isChecked ?? ""}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Login "}
            </button>{" "}
            <Link to="/forget">Forgot Password</Link>
            <h3>
              Already have an acount? <Link to="/register">Sign up</Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  url: PropTypes.string,
};
export default Login;
