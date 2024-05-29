import PropTypes from "prop-types";

function Options({ setDropDown, data }) {
  return (
    <ul className="dashboard__options--driver">
      {data.map((itm, ind) => (
        <li
          onClick={() => setDropDown({ state: false, value: itm.title })}
          key={ind}
        >
          {itm.icon}
          {itm.title}
        </li>
      ))}
    </ul>
  );
}
Options.propTypes = {
  setDropDown: PropTypes.any,
  data: PropTypes.array,
};
export default Options;
