import { useDispatch, useSelector } from "react-redux";
import { onCloseModal } from "@/actions";
import PropTypes from "prop-types";
import Spinner from "@/component/spinners/Spinner";

function Footer({ onSubmit, buttons }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <div className="form__bottom modal__header">
      {buttons && buttons.length > 0 ? (
        <>
          {buttons.map((itm, ind) => (
            <button key={ind} onClick={itm.event} disabled={itm.loading}>
              {itm.loading ? <Spinner /> : itm.title}
            </button>
          ))}
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(onCloseModal(modal.cPosition))}
            type="submit"
          >
            Cancel
          </button>
          <button type="submit" onClick={onSubmit}>
            OK
          </button>
        </>
      )}
    </div>
  );
}
Footer.propTypes = {
  onSubmit: PropTypes.func,
  buttons: PropTypes.array,
};
export default Footer;
