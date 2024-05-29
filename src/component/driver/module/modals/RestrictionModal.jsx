import Header from "./modalcomponent/Header";

import Footer from "./modalcomponent/Footer";
import Input from "@/component/form/Input";
import { useState } from "react";
function RestrictionModal() {
  const [formData, setFormData] = useState({
    account_number: "",
    account_name: "",
    selectedAccount_name: "",
  });
  const { account_number, account_name, selectedAccount_name } = formData;

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
      <div className="restriction__modal">
        <Header title="Select Account" />
        <form onSubmit={handleSubmit}>
          <div className="restriction__middle">
            <span className="example__text--second">
              Please enter the account number or name:
            </span>
            <Input
              label="Account Number"
              onChange={handleChange}
              name="account_number"
              value={account_number}
              placeholder="Account Number"
              type="text"
              id="accountnumber"
              visibility="visible"
            />
            <Input
              label="Account Name"
              onChange={handleChange}
              name="account_name"
              value={account_name}
              placeholder="Account Name"
              type="text"
              id="accountname"
              visibility="visible"
            />
            <Input
              label="Selected Account Name"
              onChange={handleChange}
              name="selectedAccount_name"
              value={selectedAccount_name}
              placeholder="Selected Account Name"
              type="text"
              id="selectedaccountname"
              visibility="visible"
            />
          </div>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default RestrictionModal;
