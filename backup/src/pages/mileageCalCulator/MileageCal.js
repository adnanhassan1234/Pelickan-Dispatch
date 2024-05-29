import React, { useEffect, useState } from "react";
import EditmileageCal from "./EditmileageCal";
import axios from "axios";
import MMTable from "./MMTable";
import AddMileageCal from "./AddMileageCal";
const MileageCal = ({ showMileageCalculator }) => {
  const [showAddMinimumMileageFareChar, setShowAddMinimumMileageFareChar] =
    useState(false);
  const [showEditMinimumMileageFareChar, setShowEditMinimumMileageFareChar] =
    useState(false);
  const [minimumMileageFare, setMinimumMileageFare] = useState([]);
  const [mCal, setMCal] = useState({
    company_id: 1,
    vehicle_type_id: "",
    minimum_mileage_threshold: "",
    minimum_mileage_price: "",
  });
  const [updateMCalData, setUpdateMCalData] = useState({});
  const [vehicleType, setVehicleType] = useState([]);
  const getMinimumMileageFare = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-company-vehicles-details",
        data
      );

      setMinimumMileageFare(res.data.Data.reverse());
    } catch (err) {
      console.log(err);
    }
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
    getMinimumMileageFare();
    getVehicleType();
  }, []);

  const onChange = (e) => {
    setMCal({ ...mCal, [e.target.name]: e.target.value });
  };

  const onChangeUpdate = (e) => {
    setUpdateMCalData({
      ...updateMCalData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      console.log(mCal);
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append("vehicle_type_id", mCal.vehicle_type_id);
      data.append("minimum_mileage_threshold", "");
      data.append("minimum_mileage_price", mCal.minimum_mileage_price);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-company-vehicles-details",
        data
      );
      getMinimumMileageFare();
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
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-company-vehicles-details",
          data
        );
        getMinimumMileageFare();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdateModal = (id, vehicle_type, minimum_mileage_price, vId, mmt) => {
    const data = { id, minimum_mileage_price, vehicle_type, vId, mmt };
    setShowEditMinimumMileageFareChar(!showEditMinimumMileageFareChar);
    setUpdateMCalData(data);
  };

  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append("vehicle_type_id", updateMCalData.vId);
      data.append("minimum_mileage_threshold", updateMCalData.mmt);
      data.append(
        "minimum_mileage_price",
        updateMCalData.minimum_mileage_price
      );
      data.append("id", updateMCalData.id);
      data.append("is_active", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-company-vehicles-details",
        data
      );
      getMinimumMileageFare();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showMileageCalculator && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <EditmileageCal
              showEditMinimumMileageFareChar={showEditMinimumMileageFareChar}
              setShowEditMinimumMileageFareChar={
                setShowEditMinimumMileageFareChar
              }
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateMCalData={updateMCalData}
            />
            <AddMileageCal
              showAddMinimumMileageFareChar={showAddMinimumMileageFareChar}
              setShowAddMinimumMileageFareChar={
                setShowAddMinimumMileageFareChar
              }
              onChange={onChange}
              onSubmit={onSubmit}
              mCal={mCal}
              vehicleType={vehicleType}
            />

            <label className="underlineInTable"></label>
            <button
              className="addBtn"
              onClick={() =>
                setShowAddMinimumMileageFareChar(!showAddMinimumMileageFareChar)
              }
            >
              Add Mileage Calculation
            </button>
            <MMTable
              setShowEditMinimumMileageFareChar={
                setShowEditMinimumMileageFareChar
              }
              showEditMinimumMileageFareChar={showEditMinimumMileageFareChar}
              minimumMileageFare={minimumMileageFare}
              onUpdateModal={onUpdateModal}
              onDelete={onDelete}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MileageCal;
