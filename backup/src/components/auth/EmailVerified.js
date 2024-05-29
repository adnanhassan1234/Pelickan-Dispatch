import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifiedFunc } from "../../reducer/auth";
import { SpinnerCircular } from "spinners-react";
import Logo from "../../images/logo.svg";

function EmailVerified() {
  const { token } = useParams();
  const navigate = useNavigate();

  const { isAuthenticate, isVerified, isLoading, isError } = useSelector(
    (state) => state.auth
  );
  const dispacth = useDispatch();
  useEffect(() => {
    if (isVerified === 1 && isAuthenticate) {
      navigate("/");
    }
  }, [isAuthenticate, navigate, isVerified]);
  useEffect(() => {
    const data = {
      api_key: process.env.REACT_APP_API_KEY,
      token,
    };
    dispacth(emailVerifiedFunc(data));
  }, [dispacth, token]);
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <img
          src={Logo}
          style={{ marginBottom: "15px", width: "250px" }}
          alt="vulture logo"
        />
        <div className="loginCard">
          <h2 style={{ textAlign: "center" }}>
            {isLoading ? (
              "User Verification in Process"
            ) : isError ? (
              <span style={{ color: "red" }}>Email Not Verified</span>
            ) : (
              "Email Verified"
            )}
          </h2>

          {isLoading ? (
            <div className="auth__emailverified__spinner">
              <SpinnerCircular
                enabled={true}
                сolor="#38ad48"
                size={30}
                secondaryColor="rgba(0,0,0,0.44)"
              />
            </div>
          ) : (
            <>
              {!isError && (
                <p style={{ textAlign: "center" }}>
                  Your account has been successfully created! <br />
                  Now click
                  <Link
                    to="/login"
                    style={{
                      marginRight: "5px",
                      marginLeft: "5px",
                      fontSize: "16px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    here
                  </Link>
                  and login
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailVerified;
