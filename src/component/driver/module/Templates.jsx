import CheckBox from "@/component/form/CheckBox";
import SelectLabel from "@/component/form/SelectLabel";
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

function Templates() {
  const [formData, setFormData] = useState({
    cash_collected: "",
    cash_expenses: "",
    cash_owed: "",
    account_credit: "",
    account_expenses: "",
    card_credit: "",
    card_expenses: "",
  });

  const {
    cash_collected,
    cash_expenses,
    cash_owed,
    account_credit,
    account_expenses,
    card_credit,
    card_expenses,
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
    <>
      <form onSubmit={handleSubmit}>
        <div className="templates__container">
          {/* {getState.tag.value === "template" && (
        <DriverChargesTemplateModal onCloseModal={onCloseModal} />
      )} */}
          <div className="templates__container--top">
            <SelectLabel
              label="Cash Collected template"
              onChange={handleChange}
              name="cash_collected"
              value={cash_collected}
              id="cashcollectedtemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
            <SelectLabel
              label="Cash Expenses Template"
              onChange={handleChange}
              name="cash_expenses"
              value={cash_expenses}
              id="cashexpensestemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
            <SelectLabel
              label="Cash Owed Template"
              onChange={handleChange}
              name="cash_owed"
              value={cash_owed}
              id="cashowedtemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
          </div>
          <div className="templates__container--middle">
            <SelectLabel
              label="Account Credit template"
              onChange={handleChange}
              name="account_credit"
              value={account_credit}
              id="accountcredittemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
            <SelectLabel
              label="Account Expenses Template"
              onChange={handleChange}
              name="account_expenses"
              value={account_expenses}
              id="accountexpensestemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
          </div>
          <div className="templates__container--bottom">
            <CheckBox
              label="Enable C/Card Templates?"
              // onChange={handleChange}
              // name="card_credit"
              // value={card_credit}
              type="checkbox"
              id="trackexpiry"
              placeholder="10"
            />
            <SelectLabel
              label="C/Card Credit Template"
              onChange={handleChange}
              name="card_credit"
              value={card_credit}
              id="cardcredittemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
            <SelectLabel
              label="C/Card Expenses Template"
              onChange={handleChange}
              name="card_expenses"
              value={card_expenses}
              id="cardexpensestemplate"
              labelText="?"
              data={docType}
              visibility="visible"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Templates;
