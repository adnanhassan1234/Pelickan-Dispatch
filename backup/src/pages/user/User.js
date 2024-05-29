import React from "react";
import { useState } from "react";
import CreateNewUser from "./CreateNewUser";
import EditUser from "./EditUser";

const User = ({ showUser }) => {
  const [showCreateUserPopup, setShowCreateUserPopup] = useState(false);
  const [showEditUserPopup, setShowEditUserPopup] = useState(false);
  return (
    <>
      {showUser && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button
              className="addBtn"
              onClick={() => setShowCreateUserPopup(!showCreateUserPopup)}
            >
              Create User
            </button>
            <label className="underlineInTable"></label>

            <div
              className="driversmainDiv"
              //   style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
            >
              <CreateNewUser
                showCreateUserPopup={showCreateUserPopup}
                setShowCreateUserPopup={setShowCreateUserPopup}
              />
              <EditUser
                setShowEditUserPopup={setShowEditUserPopup}
                showEditUserPopup={showEditUserPopup}
              />
              <table className="tableDesign driverTable">
                <thead>
                  <tr className="theadColor">
                    <th className="py-2 px-1">Name</th>
                    <th className="py-2 px-1">Email</th>
                    <th className="py-2 px-1">Password</th>
                    <th className="py-2 px-1">Phone</th>
                    <th className="py-2 px-1">Is Active</th>

                    <th className="py-2 px-1">Actions</th>
                  </tr>
                </thead>
                <tbody className="textCenter">
                  <tr className="cursorPointer">
                    <td>Abbas</td>
                    <td>jahdgf@gmasil.com</td>
                    <td>adhnjgf@8956</td>
                    <td>5635683674</td>
                    <td>true</td>

                    <td className="icnosTd">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <span className="updatelabel">
                          <i
                            className="fa-solid fa-pen-to-square editColor fontSizeIcons"
                            onClick={() =>
                              setShowEditUserPopup(!showEditUserPopup)
                            }
                          ></i>
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

export default User;
