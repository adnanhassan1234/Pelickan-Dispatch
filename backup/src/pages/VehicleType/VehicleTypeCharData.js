import React from "react";

const VehicleTypeCharData = ({ vehicleType, onDelete, onUpdateModal }) => {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Vehicle Type</th>
            <th>No Of Passengers</th>
            <th>No Of Suitcases</th>
            <th>Cabin Size Cases</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {vehicleType.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.vehicle_type}</td>
              <td>{item.no_passengers}</td>
              <td>{item.no_suitcases}</td>
              <td>{item.cabin_size_cases}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.vehicle_type,
                        item.no_passengers,
                        item.no_suitcases,
                        item.cabin_size_cases
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

export default VehicleTypeCharData;
