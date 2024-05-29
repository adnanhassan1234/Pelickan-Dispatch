import { onShowModal } from "@/actions";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertInfoModal } from "../alert/Alert";
import { onCloseModal } from "../../actions";

function InputLabel({
  label,
  onChange,
  name,
  value,
  type,
  id,
  placeholder,
  labelText,
  visibility,
  onReset,
}) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const modal = useSelector((state) => state.modal) || 0;

  const onOpenModal = (e) => {
    if (e.target.innerText === "Send to driver") {
      dispatch(onShowModal("invitecode", modal.cPosition + 1));
      return;
    }
    if (e.target.innerText === "Multi-Pickups") {
      dispatch(onShowModal("multipickups", modal.cPosition + 1));
      return;
    }
    if (e.target.innerText === "Clear") {
      onReset(id);
      return;
    }
  };
  const onClose = () => {
    const alert = inputRef.current.querySelector(".alert__input");
    if (alert) {
      alert.classList.add("hidden");
      // dispatch(onCloseModal(modal.cPosition));
    }
  };
  const onMouseOver = () => {
    const input = inputRef.current.querySelector("input");
    const alert = inputRef.current.querySelector(".alert__input");
    if (input.id === "search") {
      alert.classList.remove("hidden");
      // dispatch(onShowModal("alertinfo", modal.cPosition + 1));
    }
  };
  const alertData = {
    title: "Special parameters can be used to enhance search:",
    data: [
      { info: "* - for all addresses containing your search text" },
      { info: "/ or # to search only shortcuts containing your search text" },
      { info: "// to exclude existing shortcuts from the results" },
    ],
  };
  return (
    <div className="detail__input" ref={inputRef}>
      <label style={{ visibility: visibility }} htmlFor={id}>
        {label}
      </label>
      <div className="detail__input--group">
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="on"
          required
        />
        <span onMouseOver={onMouseOver} onClick={onOpenModal}>
          {labelText}
        </span>
      </div>
      <div className="alert__input hidden">
        <AlertInfoModal data={alertData} onClose={onClose} />
      </div>
    </div>
  );
}

InputLabel.propTypes = {
  onReset: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  visibility: PropTypes.string,
};

export default InputLabel;
