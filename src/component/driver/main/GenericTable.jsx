// import { onShowModal } from "@/actions";
import { onShowModal } from "@/actions";
import Table from "@/component/dashboard/Table";
import SelectorModal from "@/component/modal/SelectorModal";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import properties from "@/properties.json";
// import []
function GenericTable({
  data,
  properties,
  id,
  nextScreen,
  tableRef,
  tableLength,
  onListenEvents,
}) {
  const modal = useRef(null);
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();

  const { cPosition } = useSelector((state) => state.modal) || 0;

  const onTableRowSelection = (e, itm) => {
    setDetails(itm);
    if (e.detail === 2 && nextScreen !== "") {
      dispatch(onShowModal(nextScreen, cPosition + 1));
    }
    const ref = tableRef.current.querySelector(".row__select");
    if (ref) ref.classList.remove("row__select");
    e.currentTarget.classList.add("row__select");
  };

  const onPropertiesModal = (data, tag, modal) => {
    const results =
      data.length > 0 &&
      data.map((item, index) => (
        <li
          key={index}
          value={index}
          onClick={() => {
            modal.classList.add("hidden");
            onListenEvents(item, details);
          }}
        >
          {item.name}
        </li>
      ));
    return results;
  };
  const onOpenModal = (event, itm) => {
    event.preventDefault();
    const modal1 = modal.current;
    let width = event.clientX + 290;
    modal1.classList.remove("hidden");
    if (width <= window.innerWidth) {
      modal1.style.left = event.clientX + "px";
      modal1.style.top = event.clientY + "px";
    } else {
      modal1.style.left = event.clientX - 290 + "px";
      modal1.style.top = event.clientY + "px";
    }
    onTableRowSelection(event, itm);
  };

  const handleMouseDown = (e, modal) => {
    if (e.button !== 2) {
      modal.classList.add("hidden");
      e.preventDefault();
    }
  };
  return (
    <div
      className="drivers--table__ms"
      ref={tableRef}
      onMouseDown={(e) => handleMouseDown(e, modal.current)}
    >
      <Table
        records={data}
        onTableRowSelection={onTableRowSelection}
        onOpenModal={onOpenModal}
        itemsPerPage={tableLength}
      />

      <div
        ref={modal}
        className="hidden"
        style={{ position: "absolute", top: "0" }}
      >
        <SelectorModal
          results={onPropertiesModal(properties, nextScreen, modal.current)}
          id={id}
        />
      </div>
    </div>
  );
}
GenericTable.propTypes = {
  driverType: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.array,
  properties: PropTypes.array,
  nextScreen: PropTypes.string,
  tableRef: PropTypes.any,
  tableLength: PropTypes.number,
  onListenEvents: PropTypes.func,
};
export default GenericTable;
