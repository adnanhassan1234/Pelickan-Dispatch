import React from "react";

const CongestionZoneCharData = ({ nightCharges, onDelete, onUpdateModal }) => {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>From Time</th>
            <th>To Time</th>
            <th>Amount</th>
            <th>Percentage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {nightCharges.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.fromTime.hours + ":" + item.fromTime.minutes}</td>
              <td>{item.toTime.hours + ":" + item.toTime.minutes}</td>
              <td>{item.amount ? item.amount : "0"}</td>
              <td>{item.percentage ? item.percentage : "0%"}</td>
              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.fromTime.hours,
                        item.fromTime.minutes,
                        item.toTime.hours,
                        item.toTime.minutes,
                        item.amount,
                        item.percentage,
                        item.isAmountWise
                      )
                    }
                  >
                    <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                  </span>
                  <span className="deletelabel">
                    <i
                      className="fa-solid fa-trash fontSizeIcons deleteColor"
                      onClick={() => onDelete(item.id)}
                    ></i>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CongestionZoneCharData;
