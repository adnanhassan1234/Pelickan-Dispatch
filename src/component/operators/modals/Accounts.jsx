import Input from "@/component/form/Input";
import Table from "@/component/form/Table";
import PropTypes from "prop-types";

function Accounts({ onOpenModal }) {
  const data = [
    {
      name: "National Insurance No.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "N",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "Y",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "Z",
    },
    {
      name: "National Identity.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "A",
    },
  ];
  return (
    <div className="detail__middle account__middle">
      <h3>Find Account</h3>
      <div className="account__grid">
        <Input
          label="Account Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Account Number"
          type="text"
          id="accountnumber"
          visibility="visible"
        />
        <Input
          label="Account Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Account Name"
          type="text"
          id="accountname"
          visibility="visible"
        />
        <Input
          label="Account Group"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Account Group"
          type="text"
          id="accountgroup"
          visibility="visible"
        />
        <Input
          label="Account Export"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Account Export"
          type="text"
          id="accountexport"
          visibility="visible"
        />
      </div>

      <div className="form__bottom docs__table--footer second__bottom--footer">
        <button
          type="submit"
          onClick={() => {
            // onOpenModal("charges", 2);
          }}
        >
          Find
        </button>
      </div>
      <div className="table__main">
        <Table data={data} />
        <div className="form__bottom docs__table--footer second__bottom--footer">
          <button
            type="submit"
            onClick={() => {
              //   onOpenModal("charges", 2);
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* <div className="detail__top--doc">
        <div className="detail__input">
          <label htmlFor="overdraftlimit">Overdraft Limit (£)</label>
          <input id="overdraftlimit" type="text" placeholder="00100" />
        </div>
        <div className="detail__input">
          <label htmlFor="timelimitdays">Time Limit (days)</label>
          <input id="timelimitdays" type="text" placeholder="00100" />
        </div>
        <div className="detail__input">
          <label htmlFor="pin" style={{ visibility: "hidden" }}>
            .
          </label>
          <div className="docs__input--counter">
            <span>st:</span>
            <input id="pin" type="checkbox" placeholder="*****" />
            <input id="" type="number" />
          </div>
        </div>

        <div className="detail__input col-3">
          <label htmlFor="licencesuthority">Licence Authority</label>
          <input id="licencesuthority" type="text" placeholder="" />
        </div>
     
      </div> */}
    </div>
  );
}
Accounts.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Accounts;
