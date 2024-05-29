import Spinner from "./Spinner";
import PropTypes from "prop-types";

function HalfScreenSpinner({ state }) {
  return (
    <div
      style={{ display: state ? "flex" : "none" }}
      className="main__spinner--half"
    >
      <Spinner />
      <p>Please Wait...</p>
    </div>
  );
}

HalfScreenSpinner.propTypes = {
  state: PropTypes.bool,
};
export default HalfScreenSpinner;
