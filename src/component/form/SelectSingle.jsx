import PropTypes from "prop-types";

function SelectSingle({ onChange, name, value, id, data }) {
  return (
    <div className="detail__input">
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
          <option data-name={itm.name} key={ind} value={itm.value}>
            {itm.name}
          </option>
        ))}
      </select>
    </div>
  );
}

SelectSingle.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
};

export default SelectSingle;
