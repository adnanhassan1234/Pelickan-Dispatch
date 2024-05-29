import { onShowModal } from "@/actions";
import { AttributesIcon, Filter__sign, FleetsIcon } from "@/assets/svg/Svg";
import SelectorModal from "@/component/modal/SelectorModal";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function Filter({ onGenrateModal, id, title }) {
  const onRenderIcon = (field) => {
    switch (field) {
      case "All Attributes":
        return (
          <i
            className="fa-solid fa-bars"
            style={{ color: "rgba(215, 150, 24, 1)" }}
          ></i>
          // <AttributesIcon />
        );
      case "fleets":
      case "Fleets":
      case "All Fleets":
        return (
          <i
            className="fa-solid fa-car"
            style={{ color: "rgba(215, 150, 24, 1)" }}
          ></i>
          // <FleetsIcon />
        );
      case "Total Drivers":
        break;
      case "UnDispatched":
        break;
      case "Total Jobs":
        break;
      default:
        return <Filter__sign />;
    }
  };
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
    <div style={{ position: "relative" }}>
      {modal.main.parent === id && (
        <div
          className="selector__modal"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <SelectorModal results={onGenrateModal} id={id} />
        </div>
      )}
      <div
        onClick={() => {
          dispatch(onShowModal(id, modal.cPosition + 1));
        }}
        className="head--nav__last dis--flx__ms"
      >
        <div className="icon--filter___ms dis--flx__ms">
          {onRenderIcon(title)}
          <span>{title}</span>
        </div>
        <i
          className={`fa-solid fa-chevron-${
            modal.main.parent === id ? "up" : "down"
          }`}
          style={{ fontSize: "18px" }}
        ></i>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onGenrateModal: PropTypes.any,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default Filter;
