import React from "react";

function MMTable({
  setShowEditMinimumMileageFareChar,
  showEditMinimumMileageFareChar,
  minimumMileageFare,
  onUpdateModal,
  onDelete,
}) {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Vehicle Name</th>
            <th>Minimum Mileage Fares</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {minimumMileageFare.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.vehicle_type}</td>
              <td>{item.minimum_mileage_price}</td>
              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.vehicle_type,
                        item.minimum_mileage_price,
                        item.vehicle_type_id,
                        item.minimum_mileage_threshold
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
}

export default MMTable;
