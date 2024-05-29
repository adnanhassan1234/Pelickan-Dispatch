import React, { useEffect, useState } from "react";
import axios from "axios";

const AddDriver = ({
  openDriver,
  setOpenDriver,
  addUpdateBtn,
  rowData,
  getDriver,
}) => {
  let [driverData, setDriver] = useState({
    exportRef: "",
    pin: "",
    memberShip: "",
    dateJoined: "",
    dateLeft: "",
    fullName: "",
    homeAddress: "",
    billingAddress: "",
    dob: "",
    vatNo: "",
    homeTelNo: "",
    mobileTelNo: "",
    nextOfkin: "",
    statementInterval: "",
    driverId: "",
  });
  const [driverDropdownOpen, setDriverDropdown] = useState(false);
  const [memberdriverDropdownOpen, setMemberDriverDropdown] = useState(false);
  const [statementValue, setStatementValue] = useState();
  const [memberValue, setMemberValue] = useState();
  let {
    driverId,
    exportRef,
    pin,
    dateJoined,
    dateLeft,
    fullName,
    homeAddress,
    billingAddress,
    dob,
    vatNo,
    homeTelNo,
    mobileTelNo,
    nextOfkin,
  } = driverData;
  console.log(rowData);
  useEffect(() => {
    if (addUpdateBtn === "Add") {
      console.log(addUpdateBtn);
      setDriver({
        exportRef: "",
        pin: "",
        memberShip: "",
        dateJoined: "",
        dateLeft: "",
        fullName: "",
        homeAddress: "",
        billingAddress: "",
        dob: "",
        vatNo: "",
        homeTelNo: "",
        mobileTelNo: "",
        nextOfkin: "",
        statementInterval: "",
        driverId: "",
      });
      // console.log(driverData);
    }
  }, [openDriver, addUpdateBtn]);
  const driverFormValue = (e) => {
    setDriver({ ...driverData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setDriver({
      exportRef: rowData?.exportRef,
      pin: rowData?.pin,
      memberShip: rowData?.memberShip,
      dateJoined: rowData?.dateJoined,
      dateLeft: rowData?.dateLeft,
      fullName: rowData?.fullName,
      homeAddress: rowData?.homeAddress,
      billingAddress: rowData?.billingAddress,
      dob: rowData?.dob,
      vatNo: rowData?.vatNo,
      homeTelNo: rowData?.homeTelNo,
      mobileTelNo: rowData?.mobileTelNo,
      nextOfkin: rowData?.nextOfkin,
      statementInterval: rowData?.statementInterval,
      driverId: rowData?.id,
    });
    setStatementValue(rowData?.statementInterval);
    setMemberValue(rowData?.memberShip);
  }, [rowData]);
  const addUpdateDriverData = async () => {
    if (addUpdateBtn === "Add") {
      console.log("add driver");
      let driverFieldData = {
        driverId,
        exportRef,
        pin,
        memberShip: memberValue,
        dateJoined,
        dateLeft,
        fullName,
        homeAddress,
        billingAddress,
        dob,
        vatNo,
        homeTelNo,
        mobileTelNo,
        nextOfkin,
        statementInterval: statementValue,
      };
      try {
        const result = await axios.post(
          `https://api.test.pelickandespatch.com:8443/driver/add-driver`,
          driverFieldData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(result);
        console.log(driverFieldData);
      } catch (err) {
        console.log(err);
      }
      getDriver();
    }
    if (addUpdateBtn === "Update") {
      let updateDriverData = {
        driver_id: rowData.id,
        exportRef: driverData.exportRef,
        memberShip: memberValue,
        dateJoined: driverData.dateJoined,
        dateLeft: driverData.dateLeft,
        fullName: driverData.fullName,
        homeAddress: driverData.homeAddress,
        billingAddress: driverData.billingAddress,
        dob: driverData.dob,
        vatNo: driverData.vatNo,
        homeTelNo: driverData.homeTelNo,
        mobileTelNo: driverData.mobileTelNo,
        nextOfkin: driverData.nextOfkin,
        statementInterval: statementValue,
      };
      console.log("before try", updateDriverData);
      try {
        const result = await axios.put(
          `https://api.test.pelickandespatch.com:8443/driver/update-driver`,
          updateDriverData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("in try", updateDriverData, result);
      } catch (err) {
        console.log(updateDriverData);
        console.log(err);
      }
      getDriver();
    }
    setOpenDriver(false);
  };
  const driverDropdownValue = (e) => {
    console.log(e.target.innerText);
    setStatementValue(e.target.innerText);
    setDriverDropdown(false);
  };

  const driverMemberDropdownValue = (e) => {
    console.log(e.target.innerText);
    setMemberValue(e.target.innerText);
    setMemberDriverDropdown(false);
  };
  return (
    <>
      {openDriver && (
        <div className="driverMainDiv">
          <div className="formDiv">
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Driver ID:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="driverId"
                  value={driverId ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Export Ref:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="exportRef"
                  value={exportRef ?? ""}
                  onChange={driverFormValue}
                />
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">PIN:</label>
                <input
                  type="password"
                  className="mainInput"
                  name="pin"
                  value={pin ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Membership:</label>
                <div className="dropdownStatement">
                  <input
                    type="text"
                    className="mainInput dropdownInput"
                    name="memberValue"
                    value={memberValue ?? ""}
                    readOnly
                  />

                  <i
                    className="fa-solid fa-angle-down dropdownIcon"
                    onClick={() => setMemberDriverDropdown(true)}
                  ></i>
                </div>
                {memberdriverDropdownOpen && (
                  <ul className="statementListDesign memberDropdown">
                    <li onClick={driverMemberDropdownValue}>Working</li>
                    <li onClick={driverMemberDropdownValue}>Left</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Date Joined:</label>
                <input
                  type="date"
                  className="mainInput"
                  name="dateJoined"
                  value={dateJoined ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Date Left:</label>
                <input
                  type="date"
                  className="mainInput"
                  name="dateLeft"
                  value={dateLeft ?? ""}
                  onChange={driverFormValue}
                />
              </div>
            </div>
            <div className="InviteCodeDiv">
              <input
                type="text"
                className="inviteCodeInput"
                placeholder="Invite Code"
              />
              <button className="sendToDriverBtn">Send to Driver</button>
            </div>
            <div className="commonDivDriverSecond">
              <label className="mainLabelDriver">Full Name:</label>
              <input
                type="text"
                className="mainInput"
                name="fullName"
                value={fullName ?? ""}
                onChange={driverFormValue}
              />
            </div>
            {/* <div className="fullnameDiv">
              <label className="nameLbl">Email:</label>
              <input
                type="text"
                className="nameInput"
                name="email"
                value={email}
              />
            </div> */}
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Home Address:</label>
                <textarea
                  rows={5}
                  className="mainInput marginAdjust placeholderAdjust"
                  name="homeAddress"
                  value={homeAddress ?? ""}
                  onChange={driverFormValue}
                  placeholder="Home Address"
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Billing Address:</label>
                <textarea
                  rows={5}
                  className="mainInput placeholderAdjust"
                  name="billingAddress"
                  onChange={driverFormValue ?? ""}
                  value={billingAddress}
                  placeholder="  Billing Address if differnet"
                />
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Date of Birth:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="dob"
                  value={dob ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">VAT NO.:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="vatNo"
                  value={vatNo ?? ""}
                  onChange={driverFormValue}
                />
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Home Tel No:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="homeTelNo"
                  value={homeTelNo ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Mobile Tel No:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="mobileTelNo"
                  value={mobileTelNo ?? ""}
                  onChange={driverFormValue}
                />
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Next of Kin:</label>
                <input
                  type="text"
                  className="mainInput"
                  name="nextOfkin"
                  value={nextOfkin ?? ""}
                  onChange={driverFormValue}
                />
              </div>
              <div className="commonDivDriver statementDiv">
                <label className="mainLabelDriver">Statement Interval:</label>
                <div className="dropdownStatement">
                  <input
                    type="text"
                    className="mainInput dropdownInput"
                    name="statementValue"
                    value={statementValue ?? ""}
                    readOnly
                  />

                  <i
                    className="fa-solid fa-angle-down dropdownIcon"
                    onClick={() => setDriverDropdown(true)}
                  ></i>
                </div>
                {driverDropdownOpen && (
                  <ul className="statementListDesign">
                    <li onClick={driverDropdownValue}>Every 7 Days</li>
                    <li onClick={driverDropdownValue}>Every 15 Days</li>
                    <li onClick={driverDropdownValue}>Every 1 Month</li>
                  </ul>
                )}
                {/* <select
                  className="mainInput selectDesign"
                  name="statementInterval"
                  value={statementInterval}
                  onChange={driverFormValue}
                >
                  <option>Every 7 Days</option>
                  <option>Every 15 Days</option>
                  <option>Every One Month</option>
                </select> */}
              </div>
            </div>
            <div className="commonDriverOuterDiv">
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Last Statement Date:</label>
                <input type="text" className="mainInput" />
              </div>
              <div className="commonDivDriver">
                <label className="mainLabelDriver">Last Statement No:</label>
                <input type="text" className="mainInput" />
              </div>
            </div>
          </div>
          <div className="btnDiv">
            <button className="btnDesignDriver" onClick={addUpdateDriverData}>
              {addUpdateBtn}
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setOpenDriver(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDriver;
