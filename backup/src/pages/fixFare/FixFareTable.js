import React from "react";

function FixFareTable({
  onUpdateModal,
  onDelete,
  fixFare,
  handlePagination,
  limit,
  tag,
  recordsPerPage,
}) {
  return (
    <div>
      <div style={{ textAlign: "right" }}>
        {limit > recordsPerPage && tag === "fixFare" && (
          <button className="addBtn" onClick={() => handlePagination("b")}>
            Back
          </button>
        )}
        {tag === "fixFare" && (
          <button className="addBtn" onClick={() => handlePagination("n")}>
            Next
          </button>
        )}
      </div>
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            {/* <th className="py-2 px-1">Id</th> */}
            <th className="py-2 px-1">From</th>
            <th className="py-2 px-1">To</th>
            <th className="py-2 px-1">Fare</th>
            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {fixFare?.map((item) => (
            <tr key={item?._id?.$oid} className="cursorPointer">
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.fare}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span className="updatelabel">
                    <i
                      className="fa-solid fa-pen-to-square editColor fontSizeIcons"
                      onClick={() =>
                        onUpdateModal(
                          item?._id?.$oid,
                          item.from,
                          item.to,
                          item.fare
                        )
                      }
                    ></i>
                  </span>
                  <span
                    className="deletelabel"
                    onClick={() => onDelete(item?._id?.$oid)}
                  >
                    <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FixFareTable;
