import React from "react";

const PickupChargesData = ({ pickupCharges, onDelete, onUpdateModal }) => {
  return (
    <div className="driversmainDiv">
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Loaction Type</th>
            <th className="py-2 px-1">Location Address</th>
            <th className="py-2 px-1">Charges</th>
            <th className="py-2 px-1">Meet and Greet</th>

            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {pickupCharges.map((item) => (
            <tr key={item.id} className="cursorPointer">
              <td>{item.location_type}</td>
              <td>{item.location_address}</td>
              <td>{item.charges}</td>

              <td>{item.meet_and_greet_charges}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.id,
                        item.location_type,
                        item.location_address,
                        item.charges,
                        item.meet_and_greet_charges
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

export default PickupChargesData;
