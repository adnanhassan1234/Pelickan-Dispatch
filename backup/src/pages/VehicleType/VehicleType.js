import React, { useEffect, useState } from "react";

import axios from "axios";
import VehicleTypeCharData from "./VehicleTypeCharData";
import AddVehicleType from "./AddVehicleType";
import { EditVehicleType } from "./EditVehicleType";
const VehicleType = ({ vehicleTypeAll }) => {
  const [showAddVehicleTypeChar, setShowAddVehicleTypeChar] = useState(false);
  const [showEditVehicleTypeChar, setShowEditVehicleTypeChar] = useState(false);
  const [vehicleType, setVehicleType] = useState([]);
  const [vType, setVType] = useState({
    vehicle_type: "",
    no_passengers: "",
    no_suitcases: "",
    cabin_size_cases: "",
  });

  const [updateVTypeData, setUpdateVTypeData] = useState({
    id: "",
    vehicle_type: "",
    no_passengers: "",
    no_suitcases: "",
    cabin_size_cases: "",
  });

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getVehicleType = async () => {
    try {
      const configurations = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-vehicle-type",
        data,
        configurations
      );
      setVehicleType(res.data.Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVehicleType();
  }, []);

  const onChange = (e) => {
    setVType({ ...vType, [e.target.name]: e.target.value });
  };

  const onChangeUpdate = (e) => {
    console.log(e);
    setUpdateVTypeData({
      ...updateVTypeData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("vehicle_type", vType.vehicle_type);
      data.append("no_passengers", vType.no_passengers);
      data.append("no_suitcases", vType.no_suitcases);
      data.append("cabin_size_cases", vType.cabin_size_cases);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-vehicle-type",
        data,
        config
      );
      getVehicleType();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message);
    }
  };

  const onDelete = async (id) => {
    try {
      if (window.confirm("Press a button!\nEither OK or Cancel.")) {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        data.append("id", id);
        const res = await axios.post(
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-vehicle-type",
          data,
          config
        );
        getVehicleType();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdateModal = (
    id,
    vehicle_type,
    no_passengers,
    no_suitcases,
    cabin_size_cases
  ) => {
    const data = {
      id,
      vehicle_type,
      no_passengers,
      no_suitcases,
      cabin_size_cases,
    };
    console.log(data);
    setShowEditVehicleTypeChar(!showEditVehicleTypeChar);
    setUpdateVTypeData(data);
  };

  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("vehicle_type", updateVTypeData.vehicle_type);
      data.append("no_passengers", updateVTypeData.no_passengers);
      data.append("no_suitcases", updateVTypeData.no_suitcases);
      data.append("cabin_size_cases", updateVTypeData.cabin_size_cases);
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("id", updateVTypeData.id);
      data.append("is_active", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-vehicle-type",
        data,
        config
      );
      getVehicleType();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {vehicleTypeAll && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddVehicleType
              showAddVehicleTypeChar={showAddVehicleTypeChar}
              setShowAddVehicleTypeChar={setShowAddVehicleTypeChar}
              onChange={onChange}
              onSubmit={onSubmit}
              vType={vType}
            />
            <EditVehicleType
              showEditVehicleTypeChar={showEditVehicleTypeChar}
              setShowEditVehicleTypeChar={setShowEditVehicleTypeChar}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateVTypeData={updateVTypeData}
            />
            <button
              className="addBtn"
              onClick={() => setShowAddVehicleTypeChar(!showAddVehicleTypeChar)}
            >
              Add Vehicle Type
            </button>
            <label className="underlineInTable"></label>
            <VehicleTypeCharData
              vehicleType={vehicleType}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleType;
