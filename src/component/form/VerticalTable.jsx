import { onShowModal } from "@/actions";
import { RedIconTable, TableAvailable, WarningTable } from "@/assets/svg/Svg";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function VerticalTable({ data, nextScreen }) {
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
  const onRenderIcon = (field, data) => {
    switch (data) {
      case "Contact Passenger":
      case "Contact Receiver":
      case "Contact Driver":
        return (
          <div className="lostfound__contact">
            <span onClick={() => console.log("Call Now")}>Make a Call</span>{" "}
            <span onClick={() => console.log("Text Now")}>
              Text To Passenger
            </span>
          </div>
        );
      case "Status":
        switch (field) {
          case "Failed":
            return (
              <>
                <RedIconTable /> {field}
              </>
            );
          case "Pending":
            return (
              <>
                <WarningTable /> {field}
              </>
            );
          case "Delivered":
            return (
              <>
                <TableAvailable /> {field}
              </>
            );

          default:
            return field;
        }

      default:
        return field;
    }
  };
  return (
    <div className="docs__table" ref={tableRef}>
      <table>
        <tbody className="drivert-row">
          {Object.values(data).map((itm, ind) => (
            <tr onMouseDown={(e) => onTableRowSelection(e, itm)} key={ind}>
              <th>{Object.keys(data)[ind]}</th>
              <td>{onRenderIcon(itm, Object.keys(data)[ind])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
VerticalTable.propTypes = {
  data: PropTypes.object,
  nextScreen: PropTypes.string,
};
export default VerticalTable;
