import { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import { RedIconTable, TableAvailable, WarningTable } from "@/assets/svg/Svg";
import TableCheckBox from "../form/TableCheckBox";

const Table = ({ records, onTableRowSelection, onOpenModal, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const containerRef2 = useRef(null);
  let endOffset = itemOffset + itemsPerPage;
  let currentItems = records.slice(itemOffset, endOffset);
  let pageCount = Math.ceil(records.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % records.length;
    setItemOffset(newOffset);
  };

  const onRenderIcon = (field, ind, row) => {
    switch (field) {
      case "all_vehicles":
      case "all":
      case "Active":
      case "active":
      case "active_operator":
      case "all_active_vehicles":
        return <TableAvailable />;
      case "suspended":
      case "inactive_operator":
      case "all_inactive_vehicles":
        return <RedIconTable />;
      case "vehicle_attributes":
      case "attributes":
        // return <TableAvailable />;
        return "";
      case "all_lockeddow_nvehicles":
      case "vehicle_expired_documents":
      case "expired-documents":
        return <RedIconTable />;
      case "vehicle_documents_warnings":
      case "Inactive":
      case "documents-warnings":
        return <WarningTable />;
      case "left-drivers":
        return <RedIconTable />;
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
      case "N":
      case "Y":
        return <TableCheckBox value={field} row={row} id={ind} />;

      default:
        return field === "" || field === null
          ? "--"
          : typeof field === "string"
          ? truncateString(field, 25)
          : "--";
    }
  };
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div
      className="table__main table__big"
      onWheel={(e) => {
        const scrollSpeed = 80;
        const scrollDirection = e.deltaY > 0 ? 1 : -1;
        if (containerRef2.current) {
          containerRef2.current.scrollLeft += scrollDirection * scrollSpeed;
        }
      }}
    >
      <div ref={containerRef2} style={{ overflow: "hidden" }}>
        <table>
          <thead>
            <tr className="drivert-row">
              {Object?.keys(currentItems[0])?.map((itm, ind) => {
                return (
                  <th
                    className={itm.split(" ").join("_").toLocaleLowerCase()}
                    key={ind}
                  >
                    {itm.split("_").join(" ")}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((itm, ind) => (
              <tr
                onMouseDown={(e) => onTableRowSelection(e, itm)}
                id={"body" + ind}
                key={ind}
                className="drivert-row"
                onContextMenu={(e) => onOpenModal(e, itm)}
              >
                {Object.values(itm).map((itm2, i) => (
                  <td
                    className={Object.keys(currentItems[0])
                      [i]?.split(" ")
                      .join("_")
                      .toLocaleLowerCase()}
                    key={i}
                  >
                    {onRenderIcon(itm2, ind, itm)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table__pagination">
        <p className="total__listed">
          <span>{records.length}</span> <span>Listed</span>
        </p>
        <ReactPaginate
          previousLabel={<i className="fa-solid fa-angle-left"></i>}
          nextLabel={<i className="fa-solid fa-angle-right"></i>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"paging"}
          previouslinkClassName={"paging__link"}
          nextLinkClassName={"paging__link"}
          disabledClassName={"paging__link--disabled"}
          activeClassName={"paging__link--active"}
        />
      </div>
    </div>
  );
};

Table.propTypes = {
  records: PropTypes.array,
  onTableRowSelection: PropTypes.func,
  onOpenModal: PropTypes.func,
  itemsPerPage: PropTypes.number,
};

export default Table;
