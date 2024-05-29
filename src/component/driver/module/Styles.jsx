import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Select from "@/component/form/Select";
import Input from "@/component/form/Input";
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
function Styles() {
  const [formData, setFormData] = useState({
    billingCompanyName: "",
    billingCompanyDetails: "",
    statementStyle: "",
    statementNotes: "",
    emailAddress: "",
    emailFormat: "",
    creditNoteStyle: "",
    debitNoteStyle: "",
    paymentStyle: "",
    receiptStyle: "",
    jobDetailsStyle: "",
  });

  const {
    billingCompanyName,
    billingCompanyDetails,
    statementStyle,
    statementNotes,
    emailAddress,
    emailFormat,
    creditNoteStyle,
    debitNoteStyle,
    paymentStyle,
    receiptStyle,
    jobDetailsStyle,
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
        <div className="style__container">
          <div className="style__grid">
            <h2>Billing Company</h2>
            <div className="templates__modal--grid">
              <Select
                label="Billing Company Name"
                name="billingCompanyName"
                value={billingCompanyName}
                onChange={handleChange}
                data={docType}
                id="billingcompanyname"
                visibility="visible"
              />
              <Input
                label="Billing Company Details"
                name="billingCompanyDetails"
                value={billingCompanyDetails}
                onChange={handleChange}
                placeholder="Billing Company Details"
                type="text"
                id="billingcompanydetails"
                visibility="visible"
              />
            </div>
          </div>
          <div className="style__grid">
            <h2>Statements</h2>
            <div className="templates__modal--grid">
              <Select
                label="Statement Style"
                name="statementStyle"
                value={statementStyle}
                onChange={handleChange}
                data={docType}
                id="statementstyle"
                visibility="visible"
              />
              <Input
                label="Statement Notes"
                name="statementNotes"
                value={statementNotes}
                onChange={handleChange}
                placeholder="Parking + Congestion Credit"
                type="text"
                id="statementnotes"
                visibility="visible"
              />
              <Input
                label="Email Address"
                name="emailAddress"
                value={emailAddress}
                onChange={handleChange}
                placeholder="Email Address"
                type="text"
                id="emailaddress"
                visibility="visible"
              />
              <Input
                label="Email Format"
                name="emailFormat"
                value={emailFormat}
                onChange={handleChange}
                placeholder="Email Format"
                type="text"
                id="emailformat"
                visibility="visible"
              />
              <CheckBoxSingle
                label="Don’t Print"
                // name="billingCompanyName"
                // value={billingCompanyName}
                // onChange={handleChange}
                type="checkbox"
                id="dontprint"
              />
              <CheckBoxSingle
                label="Don’t Print"
                // name="billingCompanyName"
                // value={billingCompanyName}
                // onChange={handleChange}
                type="checkbox"
                id="dontprint1"
              />
            </div>
          </div>
          <div className="style__grid">
            <h2>Other</h2>
            <div className="templates__modal--grid">
              <Select
                label="Credit Note Style"
                name="creditNoteStyle"
                value={creditNoteStyle}
                onChange={handleChange}
                data={docType}
                id="creditnotestyle"
                visibility="visible"
              />
              <Select
                label="Debit Note Style"
                name="debitNoteStyle"
                value={debitNoteStyle}
                onChange={handleChange}
                data={docType}
                id="debitnotestyle"
                visibility="visible"
              />
              <Select
                label="Payment Style"
                name="paymentStyle"
                value={paymentStyle}
                onChange={handleChange}
                data={docType}
                id="paymentstyle"
                visibility="visible"
              />
              <Select
                label="Receipt Style"
                name="receiptStyle"
                value={receiptStyle}
                onChange={handleChange}
                data={docType}
                id="receiptstyle"
                visibility="visible"
              />
              <Select
                label="Job Details Style"
                name="jobDetailsStyle"
                value={jobDetailsStyle}
                onChange={handleChange}
                data={docType}
                id="jobdetailsstyle"
                visibility="visible"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Styles;
