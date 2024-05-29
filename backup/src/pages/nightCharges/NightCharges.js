import React, { useEffect, useState } from "react";
import NightChargesTable from "./NightChargesTable";

import axios from "axios";
import AddNightCharges from "./AddNightCharges";
import { UpdateNightCharges } from "./UpdateNightCharges";
const NightCharges = ({ vNightCharges }) => {
  const [showAddNightChar, setShowAddNightChar] = useState(false);
  const [showEditNightChar, setShowEditNightChar] = useState(false);
  const [nightCharges, setNightCharges] = useState([]);
  const [charges, setCharges] = useState({
    fromTime: {
      hours: "22",
      minutes: "00",
    },
    toTime: {
      hours: "05",
      minutes: "59",
    },
    amount: "",
    percentage: "",
  });

  const [updateChargesData, setUpdateChargesData] = useState({
    id: "",
    fromTime: "",
    toTime: "",
    amount: "",
    percentage: "",
  });

  const [amountWise, setAmountWise] = useState(false);
  const handleAmountWise = () => {
    setAmountWise(!amountWise);
  };

  const getNightCharges = async () => {
    try {
      const data = {
        api_key: process.env.REACT_APP_API_KEY,
        isDeleted: false,
      };
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/nightCharges/get-all-night-charge",
        data
      );
      setNightCharges(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNightCharges();
  }, []);

  const onChange = (e) => {
    setCharges({ ...charges, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const { fromTime, toTime, amount } = charges;
      const data = {
        fromTime: {
          hours: fromTime?.split(":")[0],
          minutes: fromTime?.split(":")[1],
        },

        toTime: {
          hours: toTime?.split(":")[0],
          minutes: toTime?.split(":")[1],
        },

        percentage: !amountWise ? amount : "",
        amount: amountWise ? amount : "",
        isAmountWise: amountWise,
      };

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/nightCharges/add-night-charge",
        data
      );

      getNightCharges();
      alert(res.data.msg);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message);
    }
  };

  const onDelete = async (id) => {
    try {
      if (window.confirm("Press a button!\nEither OK or Cancel.")) {
        const data = {
          api_key: process.env.REACT_APP_API_KEY,
          id,
        };
        const res = await axios.post(
          "https://api.test.pelickandespatch.com:8443/nightCharges/delete-night-charge",
          data
        );
        // getNightCharges();
        setNightCharges([]);
        alert(res.data.msg);
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

  const onUpdateModal = (
    id,
    fromTimeHours,
    fromTimeMinutes,
    toTimeHours,
    toTimeMinutes,
    amount,
    percentage,
    isAmountWise
  ) => {
    const data = {
      id,
      fromTime: fromTimeHours + ":" + fromTimeMinutes,
      toTime: toTimeHours + ":" + toTimeMinutes,
      percentage: percentage,
      amount: amount,
      isAmountWise: isAmountWise,
    };
    setAmountWise(isAmountWise);

    setShowEditNightChar(!showEditNightChar);
    setUpdateChargesData(data);
  };

  const onUpdate = async () => {
    try {
      const { id, fromTime, toTime, amount, percentage } = updateChargesData;

      const data = {
        id,
        fromTime: {
          hours: fromTime?.split(":")[0],
          minutes: fromTime?.split(":")[1],
        },
        toTime: {
          hours: toTime?.split(":")[0],
          minutes: toTime?.split(":")[1],
        },
        percentage:
          (!amountWise ? percentage : "") || (!amountWise ? amount : ""),
        amount: (amountWise ? amount : "") || (amountWise ? percentage : ""),
        isAmountWise: amountWise,
      };

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/nightCharges/update-night-charge",
        data
      );
      setNightCharges(res.data.data);
      alert(res.data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {vNightCharges && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <AddNightCharges
              showAddNightChar={showAddNightChar}
              setShowAddNightChar={setShowAddNightChar}
              onChange={onChange}
              onSubmit={onSubmit}
              charges={charges}
              handleAmountWise={handleAmountWise}
              amountWise={amountWise}
            />
            <UpdateNightCharges
              showEditNightChar={showEditNightChar}
              setShowEditNightChar={setShowEditNightChar}
              onUpdate={onUpdate}
              onChange={onChangeUpdate}
              updateChargesData={updateChargesData}
              handleAmountWise={handleAmountWise}
              amountWise={amountWise}
            />
            <button
              className="addBtn"
              onClick={() => setShowAddNightChar(!showAddNightChar)}
            >
              Add Night Zone Charges
            </button>
            <label className="underlineInTable"></label>
            <NightChargesTable
              nightCharges={nightCharges}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NightCharges;
