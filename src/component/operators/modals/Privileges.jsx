import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
function Privileges({ onOpenModal }) {
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
    <div className="attributes__container">
      {/* {getState.tag.value === "restrictions" && (
        <RestrictionModal onCloseModal={onCloseModal} />
      )} */}
      <div className="vattributes__top">
        <h2>Privileges</h2>
        <div className="vattributes__box">
          <CheckBoxSingle
            label="Login to the system"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="ltts"
          />
          <CheckBoxSingle
            label="Login over an existing User"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="loaeu"
          />
          <CheckBoxSingle
            label="Internal Mail Program"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="imp"
          />
          <CheckBoxSingle
            label="Jobs Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="jobsscreen"
          />
          <CheckBoxSingle
            label="Driver Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="driverscreen"
          />
          <CheckBoxSingle
            label="Assistants Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="assistantsscreen"
          />
          <CheckBoxSingle
            label="Events Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="eventsscreen"
          />
          <CheckBoxSingle
            label="Queue Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="queuescreen"
          />
          <CheckBoxSingle
            label="Log Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="logscreen"
          />
          <CheckBoxSingle
            label="Regular Bookings Screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="regularbookingsscreen"
          />
          <CheckBoxSingle
            label="Sign Driver Off"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="signdriveroff"
          />
          <CheckBoxSingle
            label="Suspend Driver"
            // onChange={onChange}
            // name="reminderperiod"

            // value=""
            type="checkbox"
            id="suspenddriver"
          />
          <CheckBoxSingle
            label="UnSuspended Driver"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="unSuspendedsdiver-4y"
          />
          <CheckBoxSingle
            label="Login to the system"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="logintothesystem"
          />
        </div>
      </div>

      <div className="form__bottom second__bottom--footer">
        <button
          // type="submit"
          onClick={() => {
            // onCloseModal("document");
          }}
        >
          Select All
        </button>
        <button
          // type="submit"
          onClick={() => {
            // onCloseModal("document");
          }}
        >
          Clear All
        </button>
      </div>
      <div className="release__notes">
        <h3>Release Note</h3>
        <CheckBoxSingle
          label="Display new release version notification on startup"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="dnrvnos-4y"
        />
        <CheckBoxSingle
          label="Automatically show new release notes on startup"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="checkbox"
          id="asnrnos"
        />
      </div>
    </div>
  );
}
Privileges.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Privileges;
