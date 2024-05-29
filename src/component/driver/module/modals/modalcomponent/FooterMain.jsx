import { onCloseModal } from "@/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function FooterMain({ onSubmit }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
    <div className="form__bottom">
      <button type="submit">Help</button>
      <button
        type="submit"
        onClick={() => dispatch(onCloseModal(modal.cPosition))}
      >
        Cancel
      </button>
      <button type="submit" onClick={onSubmit}>
        OK
      </button>
    </div>
  );
}
FooterMain.propTypes = {
  onSubmit: PropTypes.func,
};
export default FooterMain;
