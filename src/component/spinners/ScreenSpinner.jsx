import Spinner from "./Spinner";
import PropTypes from "prop-types";

function ScreenSpinner({ state }) {
  return (
    <div style={{ display: state ? "flex" : "none" }} className="main__spinner">
      <Spinner />
      <p>Please Wait...</p>
    </div>
  );
}

ScreenSpinner.propTypes = {
  state: PropTypes.bool,
};
export default ScreenSpinner;
