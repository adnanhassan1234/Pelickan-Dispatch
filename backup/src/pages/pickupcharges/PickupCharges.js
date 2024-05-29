import React, { useState, useEffect } from "react";
import PickupChargesData from "./PickupChargesData";
import axios from "axios";
import AddPickUpCharges from "./AddPickUpCharges";
import { UpdatePickUpCharges } from "./UpdatePickUpCharges";

const PickupCharges = ({ showPickupCharges }) => {
  const [showAddPickupChar, setShowAddPickupChar] = useState(false);
  const [showUpdatePickupChar, setShowUpdatePickupChar] = useState(false);
  const [pickupCharges, setPickupCharges] = useState([]);
  const [charges, setCharges] = useState({
    charges: "",
    location_type: "",
    location_address: "",
    meet_and_greet_charges: "",
  });

  const [updateChargesData, setUpdateChargesData] = useState({
    id: "",
    charges: "",
    location_type: "",
    location_address: "",
    meet_and_greet_charges: "",
  });

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getPickupCharges = async () => {
    const configurations = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const data = new FormData();
    data.append("api_key", process.env.REACT_APP_API_KEY);
    const res = await axios.post(
      "https://api.test.pelickandespatch.com:8443/edgemd/get-pickup-charges",
      data,
      configurations
    );
    console.log(res);
    setPickupCharges(res.data.Data.reverse());
  };

  useEffect(() => {
    getPickupCharges();
  }, []);

  const onChange = (e) => {
    setCharges({ ...charges, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const data = new FormData();
      console.log(process.env.REACT_APP_API_KEY);
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 2);
      data.append("location_type", charges.location_type);
      data.append("location_address", charges.location_address);
      data.append("charges", charges.charges);
      data.append("meet_and_greet_charges", charges.meet_and_greet_charges);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-pickup-charges",
        data
      );
      getPickupCharges();
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
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-pickup-charges",
          data,
          config
        );
        alert(res.data.message);
        getPickupCharges();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeUpdate = (e) => {
    console.log(e);
    setUpdateChargesData({
      ...updateChargesData,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateModal = (
    id,
    location_type,
    location_address,
    charges,
    meet_and_greet_charges
  ) => {
    setShowUpdatePickupChar(true);
    const data = {
      id,
      location_type,
      location_address,
      charges,
      meet_and_greet_charges,
    };
    setUpdateChargesData(data);
  };
  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 2);
      data.append("location_type", updateChargesData.location_type);
      data.append("location_address", updateChargesData.location_address);
      data.append("charges", updateChargesData.charges);
      data.append(
        "meet_and_greet_charges",
        updateChargesData.meet_and_greet_charges
      );
      data.append("id", updateChargesData.id);
      data.append("is_active", 1);
      console.log(data);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-pickup-charges",
        data,
        config
      );
      getPickupCharges();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showPickupCharges && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddPickUpCharges
              showAddPickupChar={showAddPickupChar}
              setShowAddPickupChar={setShowAddPickupChar}
              onChange={onChange}
              onSubmit={onSubmit}
              pCharges={charges}
            />
            <UpdatePickUpCharges
              showUpdatePickupChar={showUpdatePickupChar}
              setShowUpdatePickupChar={setShowUpdatePickupChar}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateChargesData={updateChargesData}
            />
            <button
              className="addBtn"
              onClick={() => setShowAddPickupChar(!showAddPickupChar)}
            >
              Add PickUp Charges
            </button>
            <PickupChargesData
              pickupCharges={pickupCharges}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PickupCharges;
