/* eslint-disable react/no-unescaped-entities */
import { onEmailValidation } from "@/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import onResetAlert from "@/utils/resetAlert";
import Spinner from "@/component/spinners/Spinner";
import Logo from "@/assets/logo-black.png";
import Bg from "@/assets/bg-left.png";
function EmailVerification() {
  let { search } = useLocation();
  const { loading, isError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      navigate("/");
      return;
    }
    const data = {
      token: search?.split("=")[1],
    };
    dispatch(onEmailValidation(data));
  }, [dispatch, search, navigate]);
  return (
    <div className="auth__container">
      <div className="auth__inner">
        <div className="auth__left">
          <img src={Bg} alt="" />
        </div>
        <div className="auth__right">
          <div className="auth__form">
            <img src={Logo} className="logo__large" alt="Main_Logo" />
            <h1>Email Validation</h1>
            <h2 style={{ textAlign: "center" }} className="auth__validation">
              {loading ? (
                <>
                  User Verification in Process...
                  <Spinner />
                </>
              ) : isError ? (
                <>
                  <span className="email__failed">Email Not Verified</span>
                  <p style={{ textAlign: "center" }}>
                    Something went wrong, please try again later.
                  </p>
                </>
              ) : (
                <>
                  <span className="email__success">Email Verified</span>
                  <p style={{ textAlign: "center" }}>
                    Your account has been successfully created! <br />
                    Now click
                    <Link
                      className="email__link"
                      to="/"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      here
                    </Link>
                    and login
                  </p>
                </>
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
