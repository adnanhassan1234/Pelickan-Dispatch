import Table from "@/component/form/Table.jsx";
import PropTypes from "prop-types";
import ChargesInput from "@/component/form/ChargesInput";
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

const data = [
  {
    Name: "National Insurance No.",
    Debit: "SK036451D",
    Credit: "06/11/2014 23:59",
    NextDue: "7/11/2015 23:59",
  },
  {
    Name: "Badge No.",
    Debit: "SK036451D",
    Credit: "06/11/2014 23:59",
    NextDue: "7/11/2015 23:59",
  },
  {
    Name: "Driving License.",
    Debit: "SK036451D",
    Credit: "06/11/2014 23:59",
    NextDue: "7/11/2015 23:59",
  },
  {
    Name: "National Identity.",
    Debit: "SK036451D",
    Credit: "06/11/2014 23:59",
    NextDue: "7/11/2015 23:59",
  },
];

function Charges({ onOpenModal }) {
  const [formData, setFormData] = useState({
    forCash_jobs: "",
    forAccount_jobs: "",
    forCard_jobs: "",
    eachCash_job: "",
    eachAccount_job: "",
    eachCard_job: "",
    // percentage: "",
  });
  const {
    forCash_jobs,
    forAccount_jobs,
    forCard_jobs,
    eachCash_job,
    eachAccount_job,
    eachCard_job,
    // percentage,
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
    <div className="charges__container--main">
      <form onSubmit={handleSubmit}>
        <div className="charges__container">
          <div className="charges__left">
            <h2>Commissions Charged</h2>
            <ChargesInput
              title="For Cash Jobs"
              data={docType}
              id="forcashjobs"
              name="forCash_jobs"
              value={forCash_jobs}
              onChange={handleChange}
            />
            <ChargesInput
              title="For Account Jobs"
              data={docType}
              id="foraccountjobs"
              name="forAccount_jobs"
              value={forAccount_jobs}
              onChange={handleChange}
            />
            <ChargesInput
              title="For C/Card Jobs"
              data={docType}
              id="forcardjobs"
              name="forCard_jobs"
              value={forCard_jobs}
              onChange={handleChange}
            />
          </div>
          <div className="charges__right">
            <h2>Fees Charged</h2>
            <ChargesInput
              title="For Each Cash Job"
              data={docType}
              id="foreachcashjob"
              name="eachCash_job"
              value={eachCash_job}
              onChange={handleChange}
            />
            <ChargesInput
              title="For Each Account Job"
              data={docType}
              id="foreachaccountjob"
              name="eachAccount_job"
              value={eachAccount_job}
              onChange={handleChange}
            />
            <ChargesInput
              title="For Each C/Card Job"
              data={docType}
              id="foreachcardjob"
              name="eachCard_job"
              value={eachCard_job}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <div className="charges__bottom">
        <div className="charges__left">
          <h3>Regular Charges/Rebates</h3>
          <div className="table__main">
            <Table data={data} nextScreen="" />
            <div className="form__bottom docs__table--footer second__bottom--footer">
              <button
                type="submit"
                onClick={() => {
                  onOpenModal("charges", 2);
                }}
              >
                New
              </button>
              <button type="submit" onClick={() => {}}>
                Delete
              </button>
              <button type="submit" onClick={() => {}}>
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="charges__right">
          <h3>One-Off Charges/Rebates</h3>
          <div className="table__main">
            <Table data={data} />
            <div className="form__bottom docs__table--footer second__bottom--footer">
              <button
                type="submit"
                onClick={() => {
                  onOpenModal("charges", 2);
                }}
              >
                New
              </button>
              <button type="submit">Delete</button>
              <button type="submit">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Charges.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Charges;
