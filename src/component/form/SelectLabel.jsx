import { onShowModal } from "@/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function SelectLabel({
  label,
  onChange,
  name,
  value,
  id,
  labelText,
  visibility,
  data,
}) {
  const dispatch = useDispatch();

  const { cPosition } = useSelector((state) => state.modal) || 0;
  const onOpenModal = (e) => {
    if (e.target.innerText === "?") {
      dispatch(onShowModal("templates", cPosition + 1));
    } else if (e.target.innerText === "Display") {
      dispatch(onShowModal("display", cPosition + 1));
    }
  };

  return (
    <div className="detail__input">
      <label style={{ visibility: visibility }} htmlFor={id}>
        {label}
      </label>
      <div className="detail__input--group">
        <select id={id} name={name} required value={value} onChange={onChange}>
          <option value="">choose</option>
          {data.map((itm, ind) => (
            <option key={ind} required value={itm.value}>
              {itm.name}
            </option>
          ))}
        </select>
        <span onClick={(e) => onOpenModal(e)}>{labelText}</span>
      </div>
    </div>
  );
}

SelectLabel.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelText: PropTypes.string,
  visibility: PropTypes.string,
  data: PropTypes.array,
};

export default SelectLabel;
