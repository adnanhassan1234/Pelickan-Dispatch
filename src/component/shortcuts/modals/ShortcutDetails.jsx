import Input from "@/component/form/Input";
import InputLabel from "@/component/form/InputLabel";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Header from "../../driver/module/modals/modalcomponent/Header";
import Footer from "../../driver/module/modals/modalcomponent/Footer";
import { useState } from "react";

function ShortcutDetails() {
  const [formData, setFormData] = useState({
    shortcut: "",
    display_address: "",
    associated_address: "",
    search_parameters: "",
  });

  const { shortcut, display_address, associated_address, search_parameters } =
    formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Address Shortcut" />
        <div className="generic__middle shortcut__middle">
          <Input
            label="Shortcut"
            onChange={handleChange}
            name="shortcut"
            value={shortcut}
            placeholder="ABBOTS LANGLEY"
            type="text"
            id="shortcut_id"
            visibility="visible"
          />
          <Input
            label="Display Address"
            onChange={handleChange}
            name="display_address"
            value={display_address}
            placeholder="ABBOTS LANGLEY, HERTFORDSHIRE, ENGLAND"
            type="text"
            id="displayaddress"
            visibility="visible"
          />
          <h3>Associated With</h3>
          <InputLabel
            label="Address"
            onChange={handleChange}
            name="associated_address"
            value={associated_address}
            type="text"
            id="address"
            placeholder="ABBOTS LANGLEY, HERTFORDSHIRE, ENGLAND"
            labelText="WD5 9XX"
            visibility="visible"
          />
          <InputLabel
            label="Search"
            onChange={handleChange}
            name="search_parameters"
            value={search_parameters}
            type="text"
            id="search"
            placeholder=""
            labelText="?"
            visibility="visible"
          />
          <h3>Where to Use</h3>
          <div className="address__check">
            <CheckBoxSingle
              label="For Mobile"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="formobile"
            />
            <CheckBoxSingle
              label="For End User"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="forenduser"
            />
          </div>
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}

export default ShortcutDetails;
