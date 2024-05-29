import React, { useEffect, useState } from "react";

import axios from "axios";

import MileageFareWiseData from "./MileageFareWiseData";
import AddMilageFareWise from "./AddMilageFareWise";
import { UpdateMilageFareWise } from "./UpdateMilageFareWise";
const MileageFareWisePage = () => {
  const [showAddMileageFare, setShowAddMileageFare] = useState(false);
  const [showEditMileageFare, setShowEditMileageFare] = useState(false);
  const [mileageFare, setMileageFare] = useState([]);
  const [vehicleType, setVehicleType] = useState([]);

  const [addMileageFare, setAddMileageFare] = useState({
    name: "",
    is_amount_wise: false,
    fare: "",
    v_id: "",
  });

  const [updateMileageFareData, setUpdateMileageFareData] = useState({
    id: "",
    name: "",
    is_amount_wise: false,
    fare: "",
    percentage: "",
  });
  const [amountWise, setAmountWise] = useState(false);

  const handleAmountWise = () => {
    setAmountWise(!amountWise);
  };

  useEffect(() => {
    async function getVehicleType() {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-vehicle-type",
        data
      );
      setVehicleType(res.data.Data.reverse());
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
      setMileageFare(finalResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMileageFareWise();
  }, [vehicleType]); //eslint-disable-line

  const onChange = (e) => {
    setAddMileageFare({ ...addMileageFare, [e.target.name]: e.target.value });
  };

  const onChangeUpdate = (e) => {
    setUpdateMileageFareData({
      ...updateMileageFareData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      const { fare, v_id } = addMileageFare;
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
      data.append("is_fix_fare", "0");
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

    setShowEditMileageFare(!showEditMileageFare);
    setUpdateMileageFareData(data);
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
      } = updateMileageFareData;

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
    <div className="vehicleDriverMainMostDiv" style={{ height: "80em" }}>
      <div className="vehicleDriverMainDiv" style={{ height: "90em" }}>
        <AddMilageFareWise
          showAddMileageFare={showAddMileageFare}
          setShowAddMileageFare={setShowAddMileageFare}
          onChange={onChange}
          onSubmit={onSubmit}
          addMileageFare={addMileageFare}
          handleAmountWise={handleAmountWise}
          amountWise={amountWise}
          vehicleType={vehicleType}
        />

        <UpdateMilageFareWise
          showEditMileageFare={showEditMileageFare}
          setShowEditMileageFare={setShowEditMileageFare}
          onUpdate={onUpdate}
          onChange={onChangeUpdate}
          updateMileageFareData={updateMileageFareData}
          handleAmountWise={handleAmountWise}
          amountWise={amountWise}
        />

        <button
          className="addBtn"
          onClick={() => setShowAddMileageFare(!showAddMileageFare)}
        >
          Add Mileage Fare
        </button>
        <label className="underlineInTable"></label>
        <MileageFareWiseData
          mileageFare={mileageFare}
          onDelete={onDelete}
          onUpdateModal={onUpdateModal}
        />
      </div>
    </div>
  );
};

export default MileageFareWisePage;
