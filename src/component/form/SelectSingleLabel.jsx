import { onShowModal } from "@/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function SelectSingleLabel({ onChange, name, value, id, data, labelText }) {
  const dispatch = useDispatch();
  const { cPosition } = useSelector((state) => state.modal) || 0;

  const onOpenModal = (e) => {
    if (e.target.innerText === "Edit") {
      dispatch(onShowModal("roosterdetail", cPosition + 1));
    }
  };

  return (
    <div className="detail__input">
      <div className="detail__input--group">
        <select id={id} name={name} value={value} onChange={onChange}>
          <option>choose</option>
          {data.map((itm, ind) => (
            <option key={ind} value={itm.value}>
              {itm.name}
            </option>
          ))}
        </select>
        <span onClick={(e) => onOpenModal(e)}>{labelText}</span>
      </div>
    </div>
  );
}

SelectSingleLabel.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  data: PropTypes.array,
};

export default SelectSingleLabel;
