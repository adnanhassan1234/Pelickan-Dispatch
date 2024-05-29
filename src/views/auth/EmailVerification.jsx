/* eslint-disable react/no-unescaped-entities */
import { onEmailVerification } from "@/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import onResetAlert from "@/utils/resetAlert";
import Spinner from "@/component/spinners/Spinner";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
function EmailVerification() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [spinner, setSpinner] = useState({
    tag: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) {
      navigate("/");
      return;
    }
  }, [state, navigate]);

  const onSubmit = (tag) => {
    setSpinner({ tag });
    onResetAlert(dispatch);

    dispatch(
      onEmailVerification({
        email: state?.email,
      })
    );
  };

  return (
    <div className="auth__container">
      <div className="auth__inner">
        <div className="auth__left">
          <img src={Bg} alt="" />
        </div>
        <div className="auth__right">
          <div className="auth__form">
            <img src={Logo} className="logo__large" alt="Main_Logo" />
            <h1>Email Verfication</h1>
            <div className="auth__form">
              <p>
                You're almost there! Just{" "}
                <b className="verification__imp--color">click on the email</b>{" "}
                to complete your signup. <br />{" "}
                <span
                  className="verification__email"
                  onClick={() => onSubmit("email")}
                >
                  {state?.email}
                </span>
              </p>
              {loading && spinner.tag === "email" && <Spinner />}
              <p>
                if you don't see it, you may need to check your spam folder.
              </p>

              <p> Still can't find the email?</p>
              <button type="submit" onClick={() => onSubmit("resend")}>
                {loading && spinner.tag === "resend" ? (
                  <Spinner />
                ) : (
                  "Resend Email "
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
