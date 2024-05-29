import Header from "./modalcomponent/Header";

import Footer from "./modalcomponent/Footer";
import Input from "@/component/form/Input";
import { useState } from "react";
function VehicleModal() {
  const [formData, setFormData] = useState({
    registration_number: "",
    vehicle_name: "",
    selected_vehicle: "",
  });
  const { registration_number, vehicle_name, selected_vehicle } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="modal__container">
      <div className="vehicle__modal">
        <Header title="Select a Vehicle" />
        <form onSubmit={handleSubmit}>
          <div className="vehicle__middle">
            <span className="example__text--second">
              Please enter the account number or name:
            </span>
            <div className="vehicle__input">
              <Input
                label="Registration Number"
                onChange={handleChange}
                name="registration_number"
                value={registration_number}
                placeholder="Registration Number"
                type="text"
                id="registrationnumber"
                visibility="visible"
              />
              <Input
                label="Vehicle Name"
                onChange={handleChange}
                name="vehicle_name"
                value={vehicle_name}
                placeholder="Vehicle Name"
                type="text"
                id="vehiclename"
                visibility="visible"
              />
              <Input
                label="Selected Vehicle"
                onChange={handleChange}
                name="selected_vehicle"
                value={selected_vehicle}
                placeholder="Selected Vehicle"
                type="text"
                id="selectedvehicle"
                visibility="visible"
              />
            </div>
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default VehicleModal;
