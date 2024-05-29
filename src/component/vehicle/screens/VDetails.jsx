import { Search } from "@/assets/svg/Svg";
import PropTypes from "prop-types";
import Input from "@/component/form/Input";
import SelectLabel from "@/component/form/SelectLabel";
import InputLabel from "@/component/form/InputLabel";
import Select from "@/component/form/Select";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import rooster from "@/assets/rooster.png";
import { useState } from "react";

const docType = [
  {
    name: "Active",
    value: "active",
  },
  {
    name: "Left",
    value: "left",
  },
  {
    name: "Suspended",
    value: "suspended",
  },
];

function VDetails({ onOpenModal }) {
  const [formData, setFormData] = useState({
    vehicle_name: "",
    status: "",
    fleet: "",
    registration_number: "",
    make: "",
    model_number: "",
    colour: "",
    co2_emissions: "",
    psvLicence_number: "",
    pcoCertificate_number: "",
    licence_authority: "",
    lockDown_code: "",
    vehicle_notes: "",
  });

  const {
    vehicle_name,
    status,
    fleet,
    registration_number,
    make,
    model_number,
    colour,
    co2_emissions,
    psvLicence_number,
    pcoCertificate_number,
    licence_authority,
    lockDown_code,
    vehicle_notes,
  } = formData;

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
    <div className="detail__middle">
      <form onSubmit={handleSubmit}>
        <div className="vdetail__top--form">
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
          <SelectLabel
            label="Status"
            onChange={handleChange}
            name="status"
            value={status}
            id="status"
            labelText="Display"
            data={docType}
            visibility="visible"
          />
          <Select
            label="Fleet"
            onChange={handleChange}
            name="fleet"
            value={fleet}
            id="fleet"
            data={docType}
            visibility="visible"
          />
          <Input
            label="Registration No"
            onChange={handleChange}
            name="registration_number"
            value={registration_number}
            placeholder="Registration No"
            type="text"
            id="registrationno"
            visibility="visible"
          />
          <Input
            label="Make"
            onChange={handleChange}
            name="make"
            value={make}
            placeholder="Make"
            type="text"
            id="make"
            visibility="visible"
          />
          <Input
            label="Model"
            onChange={handleChange}
            name="model_number"
            value={model_number}
            placeholder="Model"
            type="text"
            id="model"
            visibility="visible"
          />
          <Input
            label="Colour"
            onChange={handleChange}
            name="colour"
            value={colour}
            placeholder="Colour"
            type="text"
            id="colour"
            visibility="visible"
          />
          <Input
            label="CO2 Emissions (g/km)"
            onChange={handleChange}
            name="co2_emissions"
            value={co2_emissions}
            placeholder="CO2 Emissions (g/km)"
            type="text"
            id="co2emissions"
            visibility="visible"
            disabled={false}
          />
          <Input
            label="PSV Licence No"
            onChange={handleChange}
            name="psvLicence_number"
            value={psvLicence_number}
            placeholder="PSV Licence No"
            type="text"
            id="psvlicenceno"
            visibility="visible"
            disabled={false}
          />
          <Input
            label="PCO Certificate No"
            onChange={handleChange}
            name="pcoCertificate_number"
            value={pcoCertificate_number}
            placeholder="PCO Certificate No"
            type="text"
            id="pcocertificateno"
            visibility="visible"
            disabled={false}
          />
          <Select
            label="Licence Authority"
            onChange={handleChange}
            name="licence_authority"
            value={licence_authority}
            id="licenceauthority"
            data={docType}
            visibility="visible"
          />
          <Input
            label="Lock down code"
            onChange={handleChange}
            name="lockDown_code"
            value={lockDown_code}
            placeholder="Lock down code"
            type="text"
            id="lockdowncode"
            visibility="visible"
            disabled={false}
            vehicle_notes
          />
          <div className="detail__input col-4">
            <label htmlFor="notes">Notes (for information only)</label>
            <textarea
              id="notes"
              rows="4"
              cols="60"
              onChange={handleChange}
              name="vehicle_notes"
              value={vehicle_notes}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
VDetails.propTypes = {
  onOpenModal: PropTypes.func,
};
export default VDetails;
