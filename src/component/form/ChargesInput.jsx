import { onShowModal } from "@/actions";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

function ChargesInput({ title, data, name, id, value, onChange }) {
  const dispatch = useDispatch();
  const { cPosition } = useSelector((state) => state.modal) || 0;

  const onOpenModal = (e) => {
    if (e.target.innerText === "?") {
      dispatch(onShowModal("templates", cPosition + 1));
    }
  };

  return (
    <div className="charges__input">
      <label htmlFor={id}>{title}</label>
      <div className="detail__input">
        <select id={id} name={name} value={value} onChange={onChange}>
          <option>Choose</option>
          {data.map((itm, ind) => (
            <option key={ind} value={itm.value}>
              {itm.name}
            </option>
          ))}
        </select>

        <span className="questions__mark" onClick={onOpenModal}>
          ?
        </span>
        <input type="text" />
        <span>%</span>
      </div>
    </div>
  );
}
ChargesInput.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default ChargesInput;
