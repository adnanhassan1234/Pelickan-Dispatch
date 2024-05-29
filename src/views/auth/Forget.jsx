import { onEmailForget } from "@/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import onResetAlert from "@/utils/resetAlert";
import Spinner from "@/component/spinners/Spinner";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
function Forget() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setErr("*Email is required");
    } else {
      onResetAlert(dispatch);
      setErr("");
      dispatch(onEmailForget({ email }));
    }
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
            <h1>Forget Password</h1>
            <div className="auth__form--fields">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder="Example@gmail.com"
                onChange={onChange}
                autoComplete="on"
              />
              <span>{err}</span>
            </div>

            {/* <Link to="/forget">Forget Password?</Link> */}
            <button type="submit">{!loading ? "Continue" : <Spinner />}</button>
            <h3>
              Dont you have an account? <Link to="/register">Sign up</Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forget;
