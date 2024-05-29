import { useSelector } from "react-redux/";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLoading, isAuthenticate, emailVerified } = useSelector(
    (state) => state.auth
  );

  return !isAuthenticate && !isLoading && emailVerified === 0 ? (
    <Navigate to="/login" />
  ) : (
    children
  );
}

export default PrivateRoute;
