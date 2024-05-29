import React, { useState, useEffect } from "react";
import axios from "axios";
import MileageFareTable from "./MileageFareTable";
const MileageFare = ({ showMileagefare }) => {
  const [showEditMFare, setShowEditMFare] = useState(false);
  const [vehicleType, setVehicleType] = useState(false);
  const [getOneMileage, setGetOneMileage] = useState([]);
  const [tag, setTag] = useState("Add");

  let [mileageFareAdd, setMileageFareAdd] = useState({
    from_miles: "",
    to_miles: "",
    fare: "",
  });

  let [updateMileageFareData, setUpdateMileageFareData] = useState({
    id: "",
    from_miles: "",
    to_miles: "",
    fare: "",
  });

  const [vehicleSelected, setVehicleSelected] = useState({});

  const getVehicleType = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/edgemd/get-vehicle-type",
        data
      );
      setVehicleType(res?.data?.Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVehicleType();
  }, []);

  const onChange = (e) => {
    setMileageFareAdd({ ...mileageFareAdd, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const { from_miles, to_miles, fare } = mileageFareAdd;
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("vehicle_id", vehicleSelected.id);
      data.append("company_id", "1");
      data.append("from_miles", from_miles);
      data.append("to_miles", to_miles);
      data.append("fare", fare);

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/mileage_fare_add",
        data
      );
      await getMileageFareVehicleWise(vehicleSelected.id, vehicleSelected.name);

      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message);
    }
  };

  const onDelete = async (id, v_id) => {
    try {
      if (window.confirm("Press a button!\nEither OK or Cancel.")) {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        data.append("id", id);
        const res = await axios.post(
          "https://api.test.pelickandespatch.com:8443/fares/mileage_fare_delete",
          data
        );
        await getMileageFareVehicleWise(v_id, vehicleSelected.name);
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdateModal = (from_miles, to_miles, fare, id, vehicle_id) => {
    setTag("Update");
    const data = {
      from_miles,
      to_miles,
      fare,
      id,
      vehicle_id,
    };
    console.log(data);
    setShowEditMFare(!showEditMFare);
    setUpdateMileageFareData(data);
  };

  const onChangeUpdate = (e) => {
    setUpdateMileageFareData({
      ...updateMileageFareData,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdate = async () => {
    try {
      const { from_miles, to_miles, fare, id, vehicle_id } =
        updateMileageFareData;

      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("vehicle_id", vehicle_id);
      data.append("id", id);
      data.append("company_id", "1");
      data.append("from_miles", from_miles);
      data.append("to_miles", to_miles);
      data.append("fare", fare);
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/mileage_fare_edit",
        data
      );
      getMileageFareVehicleWise(vehicle_id, vehicleSelected.name);
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const getMileageFareVehicleWise = async (v_id, v_name) => {
    try {
      setVehicleSelected({ id: v_id, name: v_name });
      setTag("Add");
      setMileageFareAdd({
        from_miles: "",
        to_miles: "",
        fare: "",
      });
      const data = new FormData();
      data.append("api_key", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..5XhNx-");
      data.append("vehicle_id", v_id);
      const result = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/mileage_fare_one",
        data
      );
      setGetOneMileage(result?.data?.Data);
    } catch (err) {
      console.log(err);
      setGetOneMileage([]);
    }
  };

  return (
    <>
      {showMileagefare && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            {vehicleType?.map((item) => (
              <button
                className="addBtn"
                key={item.id}
                onClick={() =>
                  getMileageFareVehicleWise(item.id, item.vehicle_type)
                }
              >
                {item.vehicle_type}
              </button>
            ))}

            {Object.keys(vehicleSelected).length > 0 && (
              <MileageFareTable
                onChange={onChange}
                onChangeUpdate={onChangeUpdate}
                onSubmit={onSubmit}
                mileageFareAdd={mileageFareAdd}
                updateMileageFareData={updateMileageFareData}
                onDelete={onDelete}
                tag={tag}
                setTag={setTag}
                onUpdateModal={onUpdateModal}
                onUpdate={onUpdate}
                vehicleSelected={vehicleSelected}
                getOneMileage={getOneMileage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MileageFare;
