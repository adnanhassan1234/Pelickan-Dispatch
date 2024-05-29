import shortcutmap from "@/assets/shortcutmap.png";
import { Close_icon, MapStreetIcon } from "../../assets/svg/Svg";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModal, onShowModal } from "../../actions";

function ShortcutMap() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const onGetValues = (e) => {
    if (e.currentTarget.innerText === "Street View") {
      dispatch(onShowModal("streetview", modal.cPosition + 1));
    }
  };
  return (
    <div className="shortcut__maps shortcut_animation--forward">
      <div className="shortcut__left">
        <ul>
          <li onClick={onGetValues}>
            Street View
            <i className="map__icon">
              <MapStreetIcon />
            </i>
          </li>
        </ul>
      </div>
      <div className="shortcut__right">
        <img src={shortcutmap} alt="" />
        <div
          className="icon_hover"
          onClick={() => dispatch(onCloseModal(modal.cPosition))}
        >
          <Close_icon />
        </div>
      </div>
    </div>
  );
}

export default ShortcutMap;
