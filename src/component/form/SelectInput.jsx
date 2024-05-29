import { DriverUploadDoc } from "@/assets/svg/Svg";
import PropTypes from "prop-types";

function SelectInput({
  label,
  onChange,
  name,
  value,
  id,
  labelText,
  visibility,
  data,
  onChangeImage,
  inputId,
  inputType,
  inputStyle,
  inputIcon,
}) {
  return (
    <div className="detail__input">
      <label style={{ visibility: visibility }} htmlFor={id}>
        {label}
      </label>
      <div className="detail__input--group">
        <select id={id} name={name} value={value} onChange={onChange}>
          <option>choose</option>
          {data.map((itm, ind) => (
            <option key={ind} value={itm.value}>
              {itm.name}
            </option>
          ))}
        </select>
        <div className={inputStyle}>
          <label htmlFor={inputId}>
            {labelText} {inputIcon}
          </label>
          <input onChange={onChangeImage} id={inputId} type={inputType} />
        </div>
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  inputIcon: PropTypes.any,
  inputStyle: PropTypes.string,
  inputId: PropTypes.string,
  inputType: PropTypes.string,
  onChangeImage: PropTypes.func,
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

export default SelectInput;
