import PropTypes from "prop-types";

function CheckBoxSingle({ label, onChange, name, value, type, id }) {
  return (
    <div className="detail__input">
      <div className="detail__input--group">
        {/* <img src="@\assets\rooster.png" /> */}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="on"
        />
        <label style={{ marginBottom: "0" }} htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

CheckBoxSingle.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default CheckBoxSingle;
