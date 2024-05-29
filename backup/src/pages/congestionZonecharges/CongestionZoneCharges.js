import React, { useEffect, useState } from "react";
import CongestionZoneCharData from "./CongestionZoneCharData";
import AddCongestionCharges from "./AddCongestionCharges";
import { EditCongestionCharges } from "./EditCongestionCharges";
import axios from "axios";
const CongestionZoneCharges = ({ showCongestionZoneCharges }) => {
  const [showAddCongestionChar, setShowAddCongestionChar] = useState(false);
  const [showEditCongestionChar, setShowEditCongestionChar] = useState(false);
  const [congestionZoneCharges, setCongestionZoneCharges] = useState([]);
  const [charges, setCharges] = useState({
    postCode: "",
    fare: "",
    fTime: "",
    tTime: "",
  });

  const [updateChargesData, setUpdateChargesData] = useState({
    id: "",
    postCode: "",
    fare: "",
    fTime: "",
    tTime: "",
  });
  const configurations = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getCongestionZoneCharges = async () => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-congestion-zone-charges",
        data,
        config
      );

      setCongestionZoneCharges(res?.data?.Data?.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCongestionZoneCharges();
  }, []);

  const onChange = (e) => {
    setCharges({ ...charges, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("postcode", charges.postCode);
      data.append("charges", charges.fare);
      data.append("from_time", charges.fTime);
      data.append("to_time", charges.tTime);
      data.append("company_id", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-congestion-zone-charges",
        data,
        configurations
      );
      getCongestionZoneCharges();
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
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-congestion-zone-charges",
          data,
          configurations
        );
        getCongestionZoneCharges();
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

  const onUpdateModal = (id, postCode, fare, fTime, tTime) => {
    const data = {
      id,
      postCode,
      fare,
      fTime,
      tTime,
    };
    setShowEditCongestionChar(!showEditCongestionChar);
    setUpdateChargesData(data);
  };

  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append("postcode", updateChargesData.postCode);
      data.append("from_time", updateChargesData.fTime);
      data.append("to_time", updateChargesData.tTime);
      data.append("charges", updateChargesData.fare);
      data.append("id", updateChargesData.id);
      data.append("is_active", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-congestion-zone-charges",
        data,
        configurations
      );
      getCongestionZoneCharges();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {showCongestionZoneCharges && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddCongestionCharges
              showAddCongestionChar={showAddCongestionChar}
              setShowAddCongestionChar={setShowAddCongestionChar}
              onChange={onChange}
              onSubmit={onSubmit}
              charges={charges}
            />
            <EditCongestionCharges
              showEditCongestionChar={showEditCongestionChar}
              setShowEditCongestionChar={setShowEditCongestionChar}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateChargesData={updateChargesData}
            />
            <button
              className="addBtn"
              onClick={() => setShowAddCongestionChar(!showAddCongestionChar)}
            >
              Add Congestion Zone Charges
            </button>
            <label className="underlineInTable"></label>
            <CongestionZoneCharData
              congestionZoneCharges={congestionZoneCharges}
              setShowEditCongestionChar={setShowEditCongestionChar}
              showEditCongestionChar={showEditCongestionChar}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CongestionZoneCharges;
