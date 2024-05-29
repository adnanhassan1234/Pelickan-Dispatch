import PropTypes from "prop-types";

function InputSingle({ onChange, name, value, type, id, placeholder }) {
  return (
    <div className="detail__input">
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="on"
      />
    </div>
  );
}

InputSingle.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputSingle;
