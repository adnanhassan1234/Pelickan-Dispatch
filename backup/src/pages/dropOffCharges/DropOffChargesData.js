import React from "react";

export const DropOffChargesData = ({
  dropOffCharges,
  onUpdateModal,
  onDelete,
}) => {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Location Type</th>
            <th>Location Address</th>
            <th>Charge</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {dropOffCharges.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.location_type}</td>
              <td>{item.location_address}</td>
              <td>{item.charges}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.location_type,
                        item.location_address,
                        item.charges
                      )
                    }
                  >
                    <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                  </span>
                  <span
                    className="deletelabel"
                    onClick={() => onDelete(item.id)}
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
};
