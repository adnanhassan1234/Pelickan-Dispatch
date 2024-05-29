import React from "react";

const ThresholdTable = ({ threshold, onDelete, onUpdateModal }) => {
  console.log(threshold);
  return (
    <div className="driversmainDiv">
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Threshold</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {threshold.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.minimum_mileage_threshold}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.threshold,
                        item.minimum_mileage_threshold,
                        item.company_id,
                        item.is_active
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

export default ThresholdTable;
