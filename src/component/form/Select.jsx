import PropTypes from "prop-types";

function Select({ label, onChange, name, value, id, data }) {
  return (
    <div className="detail__input">
      <label htmlFor={id}>{label}</label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="on"
        required
      >
        <option value="">Please select</option>
        {data.map((itm, ind) => (
          <option key={ind} value={itm.value}>
            {itm.name}
          </option>
        ))}
        {/* <option value="everyday">Every Day</option>
        <option value="every14days">Every 14 Days</option>
        <option value="every28days">Every 28 Days</option>
        <option value="everymonth">Every Month</option> */}
      </select>
    </div>
  );
}

Select.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  data: PropTypes.array,
};

export default Select;
