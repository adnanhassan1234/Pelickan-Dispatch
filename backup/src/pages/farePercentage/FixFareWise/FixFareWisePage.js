import React, { useEffect, useState } from "react";

import axios from "axios";
import AddFixFareWise from "./AddFixFareWise";
import { UpdateFixFare } from "./UpdateFixFare";
import FixFareWiseData from "./FixFareWiseData";
const FixFareWisePage = () => {
  const [showAddFixFare, setShowAddFixFare] = useState(false);
  const [showEditFixFare, setShowEditFixFare] = useState(false);
  const [fixFare, setFixFare] = useState([]);
  const [vehicleType, setVehicleType] = useState([]);

  const [addFixFare, setAddFixFare] = useState({
    name: "",
    is_amount_wise: false,
    fare: "",
    v_id: "",
  });
  const [updateFixFareData, setUpdateFixFareData] = useState({
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

  useEffect(() => {
    async function getVehicleType() {
      try {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        const res = await axios.post(
          "https://api.test.pelickandespatch.com:8443/edgemd/get-vehicle-type",
          data
        );
        setVehicleType(res.data.Data.reverse());
      } catch (err) {
        console.log(err);
      }
    }
    getVehicleType();
  }, []);

  const getMileageFareWise = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fare_percent_all",
        data
      );
      const finalResults = res.data.Data.map((item) => {
        const data = {
          ...item,
          vehicleName: vehicleType
            ?.map((vehicles) => {
              if (item.vehicle_id === vehicles.id) {
                return vehicles.vehicle_type;
              }
              return "";
            })
            .join(""),
        };
        return data;
      });
      setFixFare(finalResults);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMileageFareWise();
  }, [vehicleType]); //eslint-disable-line

  const onChange = (e) => {
    setAddFixFare({ ...addFixFare, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const { fare, v_id } = addFixFare;
      const fL = {
        vehicle_id: v_id,
        percentage: !amountWise ? fare : "",
        fare: amountWise ? fare : "",
        isAmountWise: amountWise === true ? 1 : 0,
      };

      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("fare", fL.fare);
      data.append("company_id", "1");
      data.append("percentage", fL.percentage);
      data.append("vehicle_id", v_id);
      data.append("is_fix_fare", "1");
      data.append("is_amount_wise", fL.isAmountWise);

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fare_percentage_add",
        data
      );
      getMileageFareWise();
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
          "https://api.test.pelickandespatch.com:8443/fares/fare_percent_delete",
          data
        );
        getMileageFareWise();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeUpdate = (e) => {
    setUpdateFixFareData({
      ...updateFixFareData,
      [e.target.name]: e.target.value,
    });
  };
  const onUpdateModal = (
    id,
    fare,
    company_id,
    vehicle_id,
    percentage,
    is_fix_fare,
    is_amount_wise,
    is_active
  ) => {
    const data = {
      id,
      fare,
      company_id,
      vehicle_id,
      percentage,
      is_fix_fare,
      is_amount_wise,
      is_active,
    };
    setAmountWise(is_amount_wise === "0" ? 0 : 1);

    setShowEditFixFare(!showEditFixFare);
    setUpdateFixFareData(data);
  };
  const onUpdate = async () => {
    try {
      const {
        fare,
        company_id,
        id,
        is_active,
        is_fix_fare,
        percentage,
        vehicle_id,
      } = updateFixFareData;

      const fL = {
        percentage:
          (!amountWise ? percentage : "") || (!amountWise ? fare : ""),
        fare: (amountWise ? fare : "") || (amountWise ? percentage : ""),
        isAmountWise: amountWise === true ? 1 : 0,
      };
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("fare", fL.fare);
      data.append("company_id", company_id);
      data.append("percentage", fL.percentage);
      data.append("vehicle_id", vehicle_id);
      data.append("is_fix_fare", is_fix_fare);
      data.append("is_amount_wise", fL.isAmountWise);
      data.append("is_active", is_active);
      data.append("id", id);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fare_percentage_edit",
        data
      );
      getMileageFareWise();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="vehicleDriverMainMostDiv">
      <div className="vehicleDriverMainDiv">
        <AddFixFareWise
          showAddFixFare={showAddFixFare}
          setShowAddFixFare={setShowAddFixFare}
          onChange={onChange}
          onSubmit={onSubmit}
          addFixFare={addFixFare}
          handleAmountWise={handleAmountWise}
          amountWise={amountWise}
          vehicleType={vehicleType}
        />
        <UpdateFixFare
          showEditFixFare={showEditFixFare}
          setShowEditFixFare={setShowEditFixFare}
          onUpdate={onUpdate}
          onChange={onChangeUpdate}
          updateFixFareData={updateFixFareData}
          handleAmountWise={handleAmountWise}
          amountWise={amountWise}
        />
        <button
          className="addBtn"
          onClick={() => {
            setShowAddFixFare(!showAddFixFare);
          }}
        >
          Add Fix Fare
        </button>
        <label className="underlineInTable"></label>
        <FixFareWiseData
          fixFare={fixFare}
          onDelete={onDelete}
          onUpdateModal={onUpdateModal}
        />
      </div>
    </div>
  );
};

export default FixFareWisePage;
