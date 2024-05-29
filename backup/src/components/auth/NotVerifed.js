import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetLogin } from "../../reducer/auth";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/logo.svg";

function NotVerifed() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticate, isVerified } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isVerified === 1 && isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate, isVerified]);
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          alt="Vultture logo"
          style={{ marginBottom: "15px", width: "250px" }}
        />

        <div className="loginCard">
          <h2 style={{ textAlign: "center" }}>Email not verifed</h2>
          <p style={{ textAlign: "center" }}>
            Your email is not verifed! <br />
            please click
            <Link
              style={{
                marginRight: "5px",
                marginLeft: "5px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
              to="/email-verification"
              onClick={() => {
                dispatch(resetLogin());
              }}
            >
              here
            </Link>
            to verify your email first
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotVerifed;
