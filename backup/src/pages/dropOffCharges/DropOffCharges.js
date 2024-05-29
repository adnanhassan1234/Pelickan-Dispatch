import React, { useEffect } from "react";
import { useState } from "react";
import { DropOffChargesData } from "./DropOffChargesData";
import axios from "axios";
import AddDropOffCharges from "./AddDropOffCharges";
import { UpdateDropOffCharges } from "./UpdateDropOffCharges";
const DropOffCharges = ({ showDropOffCharges }) => {
  const [showAddDropOffChar, setShowAddDropOffChar] = useState(false);
  const [showUpdateDropOffChar, setShowUpdateDropOffChar] = useState(false);
  const [dropOffCharges, setDropOffCharges] = useState([]);
  const [charges, setCharges] = useState({
    charges: "",
    location_type: "",
    location_address: "",
  });
  const [updateChargesData, setUpdateChargesData] = useState({
    id: "",
    charges: "",
    location_type: "",
    location_address: "",
  });

  const getDropOffCharges = async () => {
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
        "https://api.test.pelickandespatch.com:8443/edgemd/get-dropoff-charges",
        data,
        configurations
      );

      setDropOffCharges(res?.data?.Data?.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDropOffCharges();
  }, []);

  const onChange = (e) => {
    setCharges({ ...charges, [e.target.name]: e.target.value });
  };

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append("location_type", charges.location_type);
      data.append("location_address", charges.location_address);
      data.append("charges", charges.charges);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-dropoff-charges",
        data,
        config
      );
      getDropOffCharges();
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
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-dropoff-charges",
          data,
          config
        );
        getDropOffCharges();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeUpdate = (e) => {
    setUpdateChargesData({
      ...updateChargesData,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateModal = (id, location_type, location_address, charges) => {
    setShowUpdateDropOffChar(true);
    const data = {
      id,
      location_type,
      location_address,
      charges,
    };
    setUpdateChargesData(data);
  };

  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append("location_type", updateChargesData.location_type);
      data.append("location_address", updateChargesData.location_address);
      data.append("charges", updateChargesData.charges);
      data.append("id", updateChargesData.id);
      data.append("is_active", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-dropoff-charges",
        data,
        config
      );
      getDropOffCharges();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showDropOffCharges && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddDropOffCharges
              showAddDropOffChar={showAddDropOffChar}
              setShowAddDropOffChar={setShowAddDropOffChar}
              onChange={onChange}
              onSubmit={onSubmit}
              pCharges={charges}
            />

            <UpdateDropOffCharges
              showUpdateDropOffChar={showUpdateDropOffChar}
              setShowUpdateDropOffChar={setShowUpdateDropOffChar}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateChargesData={updateChargesData}
            />

            <button
              className="addBtn"
              onClick={() => setShowAddDropOffChar(!showAddDropOffChar)}
            >
              Add Drop Off Charges
            </button>

            <DropOffChargesData
              dropOffCharges={dropOffCharges}
              onUpdateModal={onUpdateModal}
              onDelete={onDelete}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DropOffCharges;
