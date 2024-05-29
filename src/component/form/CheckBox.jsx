import PropTypes from "prop-types";

function CheckBox({ label, onChange, name, value, type, id }) {
  return (
    <div className="detail__input">
      <label htmlFor={id} style={{ visibility: "hidden" }}>
        {label}
      </label>
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

CheckBox.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
};

export default CheckBox;
