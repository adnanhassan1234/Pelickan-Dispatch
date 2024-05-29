import React from "react";
import { useEffect, useState } from "react";
import VehiclesData from "./VehiclesData";
import axios from "axios";
import AddVehicle from "./AddVehicle";
import "../../components/style.css";

const Vehicles = ({ showVehiclesTab }) => {
  const [openVehicle, setOpenVehicle] = useState(false);
  const [addUpdateBtn, setAddUpdateBtnVle] = useState();
  const [vehicleData, setVehicleData] = useState([]);
  const [rowData, getRowData] = useState({});
  const vehicleModel = () => {
    setOpenVehicle(!openVehicle);
    setAddUpdateBtnVle("Add");
  };
  useEffect(() => {
    getVehicle();
  }, []);
  const getVehicle = async () => {
    try {
      const result = await axios.get(
        `https://api.test.pelickandespatch.com:8443/vehicle/get-all`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result.data.data);
      setVehicleData(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showVehiclesTab && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button className="addBtn" onClick={vehicleModel}>
              Add Vehicle
            </button>
            <label className="underlineInTable"></label>
            <AddVehicle
              openVehicle={openVehicle}
              setOpenVehicle={setOpenVehicle}
              addUpdateBtn={addUpdateBtn}
              rowData={rowData}
              getVehicle={getVehicle}
            />
            <VehiclesData
              vehicleData={vehicleData}
              setAddUpdateBtnVle={setAddUpdateBtnVle}
              setOpenVehicle={setOpenVehicle}
              getRowData={getRowData}
              getVehicle={getVehicle}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Vehicles;
