import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function TableCheckBox({ value, row, id }) {
  const location = useLocation();
  const onTableCheckBox = (e) => {
    switch (location?.pathname?.split("/")[1]?.split("-")?.join(" ")) {
      case "shortcuts":
        // Api call
        if (e.currentTarget.parentElement.className === "check") {
          console.log(
            id,
            e.currentTarget.parentElement.nextElementSibling.innerText,
            ":",
            e.target.checked
          );
        } else {
          console.log(
            id,
            e.currentTarget.parentElement.className,
            ":",
            e.target.checked
          );
        }
        break;
      default:
        break;
    }
  };
  return (
    <input
      onMouseDown={(e) => e.stopPropagation()}
      id={uuidv4()}
      // type={type}
      // name={name}
      // value={value}
      // onChange={onChange}
      // autoComplete="on"
      onClick={onTableCheckBox}
      type="checkbox"
      defaultChecked={value === "Y" ? true : false}
    />
  );
}
TableCheckBox.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  row: PropTypes.object,
};

export default TableCheckBox;
