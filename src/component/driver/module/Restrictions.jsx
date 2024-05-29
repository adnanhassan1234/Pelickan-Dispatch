import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
function Restrictions({ onOpenModal }) {
  const data = [
    {
      AccName: "National Insurance No.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "Badge No.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "Driving License.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
    {
      AccName: "National Identity.",
      AccNumber: "SK036451D",
    },
  ];
  return (
    <div className="restriction__container">
      {/* {getState.tag.value === "restrictions" && (
        <RestrictionModal onCloseModal={onCloseModal} />
      )} */}
      <div className="restriction__top">
        <CheckBoxSingle
          label="Not Allowed to Use the Follow-On-job Facility"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="follow-on-job"
        />
        <CheckBoxSingle
          label="Not Allowed to Use the PDA’s Phone Facility"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="pdasphone"
        />
        <CheckBoxSingle
          label="Not Allowed to Convert Cash Street Jobs for On-Line Credit Card Payment"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="streetcreditcardpayment"
        />
        <CheckBoxSingle
          label="Not Allowed to Convert Cash Radio Jobs for On-Line Credit Card Payment"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="radiocreditcardpayment"
        />
        <CheckBoxSingle
          label="Not Allowed to Use the automatic 'No Show' Facility"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="noshow"
        />
        <CheckBoxSingle
          label="Not Allowed to Use the Chip & Pin Facility"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="chipandpin"
        />
      </div>
      <div className="restriction__bottom">
        <h3>Driver is not Allowed to do Jobs for Accounts</h3>
        <div className="table__main">
          <Table data={data} />
          <div className="form__bottom  second__bottom--footer">
            <button type="submit" onClick={() => {}}>
              Remove
            </button>
            <button
              type="submit"
              onClick={() => {
                onOpenModal("restrictions");
              }}
            >
              New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Restrictions.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Restrictions;
