import { onShowModal } from "@/actions";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function Table({ data, nextScreen }) {
  const tableRef = useRef(null);
  const dispatch = useDispatch();
  const { cPosition } = useSelector((state) => state.modal);

  const onTableRowSelection = (e) => {
    if (e.detail === 2 && nextScreen && nextScreen !== "") {
      dispatch(onShowModal(nextScreen, cPosition + 1));
    }
    const ref = tableRef.current.querySelector(".row__select");
    if (ref) ref.classList.remove("row__select");
    e.currentTarget.classList.add("row__select");
  };
  return (
    <div className="docs__table" ref={tableRef}>
      <table>
        <thead>
          <tr className="drivert-row">
            {Object.keys(data[0]).map((itm, ind) => (
              <th key={ind}>{itm}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((itm, ind) => (
            <tr
              onMouseDown={(e) => onTableRowSelection(e, itm)}
              key={ind}
              className="drivert-row"
            >
              {Object.values(itm).map((itm, ind) => (
                <td key={ind}>{itm}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
Table.propTypes = {
  data: PropTypes.array,
  nextScreen: PropTypes.string,
};
export default Table;
