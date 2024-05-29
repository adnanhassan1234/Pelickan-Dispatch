import React from "react";

const DynamicPage = ({ showDynamicPage }) => {
  return (
    <>
      {showDynamicPage && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button className="addBtn">Create User</button>
            <label className="underlineInTable"></label>

            <div
              className="driversmainDiv"
              //   style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
            >
              <table className="tableDesign driverTable">
                <thead>
                  <tr className="theadColor">
                    <th className="py-2 px-1">URL</th>
                    <th className="py-2 px-1">Link Name</th>

                    <th className="py-2 px-1">Actions</th>
                  </tr>
                </thead>
                <tbody className="textCenter">
                  <tr className="cursorPointer">
                    <td>/heathrow-to-abridge-taxi</td>
                    <td>Heathrow to Abridge taxi</td>

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
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicPage;
