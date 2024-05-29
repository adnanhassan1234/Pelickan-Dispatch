import Header from "./modalcomponent/Header";
import Input from "@/component/form/Input";
import InputLabel from "@/component/form/InputLabel";
import SelectLabel from "@/component/form/SelectLabel";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Footer from "./modalcomponent/Footer";
import { useState } from "react";
const docType = [
  {
    name: "Driving License No",
    value: "drivinglicenseno",
  },
  {
    name: "CRB/Disclosure",
    value: "crb-disclosure",
  },
  {
    name: "Special Document No",
    value: "specialdocumentno",
  },
  {
    name: "PCO Certificate No",
    value: "pcocertificateno",
  },
];
function ChargesModal() {
  const [formData, setFormData] = useState({
    charge_template: "",
    description: "",
    amount: "",
    firstDue_date: "",
  });
  const { charge_template, description, amount, firstDue_date } = formData;

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
      <div className="charges__modal--top">
        <Header title="Regular Charge/Credit" />
        <form onSubmit={handleSubmit}>
          <div className="charges__modal">
            <SelectLabel
              label="Charge Template"
              onChange={handleChange}
              name="charge_template"
              value={charge_template}
              type="select"
              id="reminderperiodhr"
              placeholder="10"
              labelText="?"
              data={docType}
              visibility="visible"
            />
            <div className="charges__modal--input">
              {/* <div> */}
              <Input
                label="Description"
                onChange={handleChange}
                name="description"
                value={description}
                type="text"
                id="description"
                placeholder="Description"
                visibility="visible"
              />

              <InputLabel
                label="Amount"
                onChange={handleChange}
                name="amount"
                value={amount}
                type="text"
                id="amount"
                placeholder="10"
                labelText="(Debit)"
                data={docType}
                visibility="visible"
              />
              <Input
                label="First Due at Mid-day on"
                onChange={handleChange}
                name="firstDue_date"
                value={firstDue_date}
                type="date"
                id="firstdueatmiddayon"
                placeholder="First Due at Mid-day on"
                visibility="visible"
              />

              <CheckBoxSingle
                label="Forever"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="forever"
                placeholder="10"
              />
            </div>
            {/* </div> */}
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default ChargesModal;
