import PropTypes from "prop-types";

function Input({
  label,
  onChange,
  name,
  value,
  type,
  id,
  placeholder,
  visibility,
  disabled,
}) {
  return (
    <div className="detail__input">
      <label style={{ visibility: visibility }} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="on"
        required
        disabled={!disabled ? false : true}
      />
    </div>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  visibility: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
