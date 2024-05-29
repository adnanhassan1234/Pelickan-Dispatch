import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Header from "./modalcomponent/Header";
import CheckBox from "@/component/form/CheckBox";
import Select from "@/component/form/Select";
import InputLabel from "@/component/form/InputLabel";
import SelectSingle from "@/component/form/SelectSingle";
import Input from "@/component/form/Input";
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

function DriverChargesTemplateModal() {
  const [formData, setFormData] = useState({
    name: "",
    print_as: "",
    charge_type: "",
    interval: "",
    vat_basis: "",
    amount: "",
    export_to: "",
    tax_code: "",
    export_ref: "",
    department_no: "",
    transaction_code: "",
    nominal_code: "",
    comments: "",
  });

  const {
    name,
    print_as,
    charge_type,
    interval,
    vat_basis,
    amount,
    export_to,
    tax_code,
    export_ref,
    department_no,
    transaction_code,
    nominal_code,
    comments,
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
    <div className="modal__container" onMouseDown={(e) => e.stopPropagation()}>
      <div className="template__modal">
        <Header title="Driver Charge Template Properties" />
        <form onSubmit={handleSubmit}>
          <div className="templates__modal--middle">
            <Select
              label="Name"
              onChange={handleChange}
              name="name"
              value={name}
              data={docType}
              type="text"
              id="name"
              visibility="visible"
            />
            <CheckBox
              label="Show On Statement"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="showonstatement"
            />
            <div className="templates__modal--input">
              <label htmlFor="printas">Print As</label>
              <div className="templates__input--group">
                <SelectSingle
                  label="Print As"
                  onChange={handleChange}
                  name="print_as"
                  value={print_as}
                  data={docType}
                  type="text"
                  id="printas"
                  visibility="visible"
                />
                <div className="templates__input--right">
                  <span>+</span>
                  <span>Week Start Date</span>
                </div>
              </div>
              <span className="example__text">
                e.g. 20% Cash Commission (WC 30/10)
              </span>
            </div>
            <div className="templates__modal--input--2">
              <h2>Charging Rules</h2>
              <div className="templates__modal--grid">
                <Select
                  label="Charge Type"
                  onChange={handleChange}
                  name="charge_type"
                  value={charge_type}
                  data={docType}
                  type="text"
                  id="chargetype"
                  visibility="visible"
                />
                <Select
                  label="Interval"
                  onChange={handleChange}
                  name="interval"
                  value={interval}
                  data={docType}
                  type="text"
                  id="interval"
                  visibility="visible"
                />
                <CheckBoxSingle
                  label="Apply to all Drivers"
                  // onChange={handleChange}
                  // name="vat_basis"
                  // value={vat_basis}
                  type="checkbox"
                  id="applytoalldrivers"
                />
                <div className="templates__chargingrules--check jst__end">
                  <CheckBoxSingle
                    label="Apply In Arrears"
                    // onChange={onChange}
                    // name="reminderperiod"
                    // value=""
                    type="checkbox"
                    id="applyinarrears"
                  />
                  <CheckBoxSingle
                    label="Apply in Advance"
                    // onChange={onChange}
                    // name="reminderperiod"
                    // value=""
                    type="checkbox"
                    id="applyinadvance"
                  />
                </div>
                <Select
                  label="VAT Basis"
                  onChange={handleChange}
                  name="vat_basis"
                  value={vat_basis}
                  data={docType}
                  type="text"
                  id="vatbasis"
                  visibility="visible"
                />
                <InputLabel
                  label="Amount"
                  onChange={handleChange}
                  name="amount"
                  value={amount}
                  type="text"
                  id="amount"
                  placeholder="10.00"
                  labelText="(Inc VAT)"
                  visibility="visible"
                />
                <CheckBoxSingle
                  label="Apply to all Drivers"
                  // onChange={onChange}
                  // name="reminderperiod"
                  // value=""
                  type="checkbox"
                  id="applytoalldrivers1"
                />
                <div className="templates__chargingrules--check jst__btw">
                  <span className="example__text">
                    i.e. 20.00% = 16.67% + VAT (3.33%)
                  </span>
                  <CheckBoxSingle
                    label="Apply in Advance"
                    // onChange={onChange}
                    // name="reminderperiod"
                    // value=""
                    type="checkbox"
                    id="applyinadvance1"
                  />
                </div>
              </div>
            </div>
            <div className="templates__modal--input--2">
              <h2>Exporting Rules</h2>
              <div className="templates__modal--grid">
                <Select
                  label="Export To"
                  onChange={handleChange}
                  name="export_to"
                  value={export_to}
                  data={docType}
                  id="exportto"
                  visibility="visible"
                />
                <Input
                  label="Tax Code"
                  onChange={handleChange}
                  name="tax_code"
                  value={tax_code}
                  placeholder="Tax Code"
                  type="text"
                  id="taxcode"
                  visibility="visible"
                />

                <Input
                  label="Export Ref"
                  onChange={handleChange}
                  name="export_ref"
                  value={export_ref}
                  placeholder="Export Ref"
                  type="text"
                  id="exportref"
                  visibility="visible"
                />

                <Input
                  label="Department No"
                  onChange={handleChange}
                  name="department_no"
                  value={department_no}
                  placeholder="Department No"
                  type="text"
                  id="departmentno"
                  visibility="visible"
                />
                <CheckBoxSingle
                  label="Export Charge Totals Only"
                  // onChange={onChange}
                  // name="reminderperiod"
                  // value=""
                  type="checkbox"
                  id="exportchargetotalsonly"
                />
              </div>
            </div>
            <div className="template__modal--bottom">
              <Input
                label="Transaction Code"
                onChange={handleChange}
                name="transaction_code"
                value={transaction_code}
                placeholder="Transaction Code"
                type="text"
                id="transactioncode"
                visibility="visible"
              />
              <Input
                label="Nominal Code"
                onChange={handleChange}
                name="nominal_code"
                value={nominal_code}
                placeholder="Nominal Code"
                type="text"
                id="nominalcode"
                visibility="visible"
              />
              <Input
                label="Comments"
                onChange={handleChange}
                name="comments"
                value={comments}
                placeholder="Comment"
                type="text"
                id="comments"
                visibility="visible"
              />
            </div>
            {/* <div className="form__bottom second__bottom--footer">
         <button
           // type="submit"
           onClick={() => {
             onCloseModal("document");
           }}
         >
           OK
         </button>
         <button
           // type="submit"
           onClick={() => {
             onCloseModal("document");
           }}
         >
           Cancel
         </button>
       </div> */}
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default DriverChargesTemplateModal;
