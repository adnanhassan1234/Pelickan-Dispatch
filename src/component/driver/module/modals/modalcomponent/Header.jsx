import { Close } from "@/assets/svg/Svg";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModal } from "@/actions";

function Header({ title }) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  return (
    <div className="address__header">
      <h3>{title}</h3>
      <p onClick={() => dispatch(onCloseModal(modal.cPosition))}>
        <Close />
      </p>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
