import React, { useEffect, useState } from "react";
import ThresholdTable from "./ThresholdTable";
import AddThreshold from "./AddThreshold";
import { EditThreshold } from "./EditThreshold";
import axios from "axios";
const Threshold = ({ vThreshold }) => {
  const [showAddThreshold, setShowAddThreshold] = useState(false);
  const [showUpdateThreshold, setShowUpdateThreshold] = useState(false);
  const [threshold, setThreshold] = useState([]);
  const [addThreshold, setAddThreshold] = useState({
    minimum_mileage_threshold: "",
  });

  const [updateThreshold, setUpdateThreshold] = useState({
    id: "",
    minimum_mileage_threshold: "",
  });

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const getThreshold = async () => {
    try {
      const configurations = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-company-vehicles-all-threshold",
        data,
        configurations
      );
      setThreshold(res.data.Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getThreshold();
  }, []);

  const onChange = (e) => {
    setAddThreshold({ ...addThreshold, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append(
        "minimum_mileage_threshold",
        addThreshold.minimum_mileage_threshold
      );

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/create-company-vehicles-threshold",
        data,
        config
      );
      getThreshold();
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
          "https://api.test.pelickandespatch.com:8443/edgemd/delete-company-vehicles-threshold",
          data,
          config
        );
        getThreshold();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeUpdate = (e) => {
    setUpdateThreshold({
      ...updateThreshold,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateModal = (
    id,
    threshold,
    minimum_mileage_threshold,
    company_id,
    is_active
  ) => {
    const data = {
      id,
      threshold,
      minimum_mileage_threshold,
      company_id,
      is_active,
    };
    setShowUpdateThreshold(!showUpdateThreshold);
    setUpdateThreshold(data);
  };
  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", 1);
      data.append(
        "minimum_mileage_threshold",
        updateThreshold.minimum_mileage_threshold
      );
      data.append("id", updateThreshold.id);
      data.append("is_active", 1);
      console.log(data);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/edit-company-vehicles-threshold",
        data,
        config
      );
      getThreshold();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {vThreshold && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddThreshold
              showAddThreshold={showAddThreshold}
              setShowAddThreshold={setShowAddThreshold}
              onChange={onChange}
              onSubmit={onSubmit}
              addThreshold={addThreshold}
            />
            <EditThreshold
              showUpdateThreshold={showUpdateThreshold}
              setShowUpdateThreshold={setShowUpdateThreshold}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateThreshold={updateThreshold}
            />
            <button
              className="addBtn"
              onClick={() => setShowAddThreshold(!showAddThreshold)}
            >
              Add Vehicles Threshold
            </button>
            <label className="underlineInTable"></label>
            <ThresholdTable
              threshold={threshold}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Threshold;
