import React from "react";
import { Fragment } from "react";

const FixFareWiseData = ({ onUpdateModal, onDelete, fixFare }) => {
  return (
    <div className="driversmainDiv">
      <h2 style={{ padding: "10px" }}>Fix Fare Wise</h2>
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Name</th>
            <th className="py-2 px-1">Is Amount Wise</th>
            <th className="py-2 px-1">Percentage</th>
            <th className="py-2 px-1">Amount</th>
            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {fixFare.length > 0 &&
            fixFare?.map((item) => (
              <Fragment key={item?._id?.$oid}>
                {item.is_fix_fare === "1" && (
                  <tr key={item?._id?.$oid} className="cursorPointer">
                    <td>{item.vehicleName}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={item.is_amount_wise === "0" ? 0 : 1}
                        readOnly
                      />
                    </td>
                    <td>{item.percentage || 0}</td>
                    <td>{item.fare || 0}</td>

                    <td className="icnosTd">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <span
                          className="updatelabel"
                          onClick={() =>
                            onUpdateModal(
                              item?._id?.$oid,
                              item.fare,
                              item.company_id,
                              item.vehicle_id,
                              item.percentage,
                              item.is_fix_fare,
                              item.is_amount_wise,
                              item.is_active
                            )
                          }
                        >
                          <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
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
                )}
              </Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FixFareWiseData;
