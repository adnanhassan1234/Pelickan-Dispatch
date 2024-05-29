import React, { useState } from "react";
import axios from "axios";
import DeleteModel from "../../Delete";

const Drivers = ({
  driverData,
  getRowData,
  setAddUpdateBtnVle,
  setOpenDriver,
  getDriver,
}) => {
  const [driverModelCheck, setDriverModelCheck] = useState(false);
  const [selectDriverDeleteRowId, setSelectDriverDeleteRowId] = useState();
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  console.log(driverData);
  const toHideLargeData = (item) => {
    if (item?.length > 13) {
      return item.slice(0, 13) + "...";
    } else {
      return item;
    }
  };
  const getSpecificRowData = (selectedrowdata) => {
    getRowData(selectedrowdata);
    setOpenDriver(true);
    setAddUpdateBtnVle("Update");
    console.log(selectedrowdata);
  };

  const deleteSpecificRowId = (idOfRow) => {
    console.log(idOfRow);
    console.log("delete");
    setOpenDeleteModel(true);
    setSelectDriverDeleteRowId(idOfRow);
    setDriverModelCheck(true);
  };
  let driverId = { driver_id: "" };
  //let driver_id;
  const deleteDriverSelectedRow = async (id) => {
    driverId = {
      driver_id: id,
    };

    console.log(driverId);
    try {
      const result = await axios.put(
        `https://api.test.pelickandespatch.com:8443/driver/delete-driver`,
        driverId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(result);
    } catch (err) {
      console.log(err);
    }

    getDriver();
  };

  return (
    <div className="driversmainDiv">
      <DeleteModel
        deleteDriverSelectedRow={deleteDriverSelectedRow}
        openDeleteModel={openDeleteModel}
        driverModelCheck={driverModelCheck}
        setOpenDeleteModel={setOpenDeleteModel}
        selectDriverDeleteRowId={selectDriverDeleteRowId}
      />
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Export Ref</th>
            <th className="py-2 px-1">Name</th>
            <th className="py-2 px-1">Membership</th>
            <th className="py-2 px-1">Home Address</th>
            <th className="py-2 px-1">Billing Address</th>
            <th className="py-2 px-1">Date Joined</th>
            <th className="py-2 px-1">Date Left</th>
            <th className="py-2 px-1">Home Tel No</th>
            <th className="py-2 px-1">Mobile Tel No</th>
            <th className="py-2 px-1">Vat No</th>
            <th className="py-2 px-1">Date of Birth</th>
            <th className="py-2 px-1">Statement Interval</th>
            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {driverData.map((item, ind) => {
            return (
              <tr className="cursorPointer" key={ind}>
                <td>{item?.exportRef}</td>
                <td>{item?.fullName}</td>
                <td>{item?.memberShip}</td>
                <td>{item?.homeAddress}</td>
                <td title={item?.billingAddress}>
                  {toHideLargeData(item?.billingAddress)}
                </td>
                <td>{item?.dateJoined}</td>
                <td>{item?.dateLeft}</td>
                <td>{item?.homeTelNo}</td>
                <td>{item?.mobileTelNo}</td>
                <td>{item?.vatNo}</td>
                <td>{item?.dob}</td>
                <td title={item?.statementInterval}>
                  {toHideLargeData(item?.statementInterval)}
                </td>

                <td className="icnosTd">
                  {item !== "" ? (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span
                        className="updatelabel"
                        onClick={() => getSpecificRowData(item)}
                      >
                        <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                      </span>
                      <span
                        className="deletelabel"
                        onClick={() => deleteSpecificRowId(item.id)}
                      >
                        <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;
