import { Close } from "@/assets/svg/Svg";
import PropTypes from "prop-types";

function HeaderMain({ title, onCloseMain }) {
  return (
    <div className="address__header">
      <h3>{title}</h3>
      <p onClick={onCloseMain}>
        <Close />
      </p>
    </div>
  );
}
HeaderMain.propTypes = {
  title: PropTypes.string,
  onCloseMain: PropTypes.func,
};
export default HeaderMain;
