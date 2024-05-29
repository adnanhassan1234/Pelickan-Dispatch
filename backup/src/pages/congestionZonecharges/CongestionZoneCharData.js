import React from "react";

const CongestionZoneCharData = ({
  congestionZoneCharges,
  onDelete,
  onUpdateModal,
}) => {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Postcode</th>
            <th>Charge</th>
            <th>From Time</th>
            <th>To Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {congestionZoneCharges.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.postcode}</td>
              <td>{item.charges}</td>
              <td>{item.from_time}</td>
              <td>{item.to_time}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.postcode,
                        item.charges,
                        item.from_time,
                        item.to_time
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
