import React, { useEffect, useState } from "react";
import axios from "axios";
import DriversData from "./DriversData";
import AddDriver from "./AddDriver";

const Drivers = ({ showDriversTab }) => {
  const [openDriver, setOpenDriver] = useState(false);
  const [addUpdateBtn, setAddUpdateBtnVle] = useState();
  const [driverData, setDriverData] = useState([]);
  const [rowData, getRowData] = useState({});

  const driverModel = () => {
    setOpenDriver(!openDriver);
    setAddUpdateBtnVle("Add");
  };
  useEffect(() => {
    getDriver();
  }, []);
  const getDriver = async () => {
    try {
      const result = await axios.get(`/driver/all-drivers`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDriverData(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {showDriversTab && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button className="addBtn" onClick={driverModel}>
              Add Driver
            </button>
            <label className="underlineInTable"></label>
            <AddDriver
              openDriver={openDriver}
              setOpenDriver={setOpenDriver}
              addUpdateBtn={addUpdateBtn}
              rowData={rowData}
              getDriver={getDriver}
            />
            <DriversData
              driverData={driverData}
              setAddUpdateBtnVle={setAddUpdateBtnVle}
              getRowData={getRowData}
              setOpenDriver={setOpenDriver}
              getDriver={getDriver}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Drivers;
