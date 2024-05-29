import React from "react";

const DiscountOfferData = () => {
  return (
    <div
      className="driversmainDiv"
      //   style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Name</th>
            <th className="py-2 px-1">From Date</th>
            <th className="py-2 px-1">To Date</th>
            <th className="py-2 px-1">Percentage</th>
            <th className="py-2 px-1">Amount</th>
            <th className="py-2 px-1">Is Amount Wise</th>
            <th className="py-2 px-1">From Time</th>
            <th className="py-2 px-1">To Time</th>
            <th className="py-2 px-1">Code</th>

            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          <tr className="cursorPointer">
            <td>pdf</td>
            <td>Cv</td>
            <td>2</td>
            <td>pdf</td>
            <td>Cv</td>
            <td>2</td>
            <td>pdf</td>
            <td>Cv</td>

            <td>Active</td>

            <td className="icnosTd">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span className="updatelabel">
                  <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                </span>
                <span className="deletelabel">
                  <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DiscountOfferData;
