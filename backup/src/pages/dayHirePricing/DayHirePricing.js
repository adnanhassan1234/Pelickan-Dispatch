import React from "react";
import { useState } from "react";
import EditdayHirePricing from "./EditdayHirePricing";

export const DayHirePricing = ({ showDayHirePricing }) => {
  const [showEditdayHirePricing, setEditdayHirePricing] = useState(false);
  return (
    <>
      {showDayHirePricing && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <EditdayHirePricing
              showEditdayHirePricing={showEditdayHirePricing}
              setEditdayHirePricing={setEditdayHirePricing}
            />
            <div className="driversmainDiv">
              <table className="tableDesign vehicleTable">
                <thead>
                  <tr className="theadColor">
                    <th>Up to Hours Tour</th>
                    <th>Vehicles</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="textCenter">
                  <tr className="cursorPointer">
                    <td>6</td>
                    <td>hgacdhasdfjashjasd</td>
                    <td>hgacdhasdfjashjasd</td>
                    <td>
                      <span
                        className="updatelabel"
                        onClick={() =>
                          setEditdayHirePricing(!showEditdayHirePricing)
                        }
                      >
                        <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <label className="underlineInTable"></label>
            <button className="addBtn">Save</button> */}
          </div>
        </div>
      )}
    </>
  );
};
