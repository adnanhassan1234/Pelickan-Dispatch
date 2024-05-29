import PropTypes from "prop-types";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
function Fleets({ onOpenModal }) {
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
    <div className="attributes__container generic__container">
      {/* {getState.tag.value === "restrictions" && (
        <RestrictionModal onCloseModal={onCloseModal} />
      )} */}
      <div className="vattributes__top">
        <h2>Fleets</h2>
        <div className="vattributes__box">
          <CheckBoxSingle
            label="BAC"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="BAC"
          />
          <CheckBoxSingle
            label="BPC"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="BPC"
          />
          <CheckBoxSingle
            label="GBC"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="GBC"
          />
          <CheckBoxSingle
            label="PNC"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="PNC"
          />
          <CheckBoxSingle
            label="SBC"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="SBC"
          />
        </div>
      </div>

      <div className="form__bottom second__bottom--footer">
        <button
          // type="submit"
          className="show__all"
          onClick={() => {
            // onCloseModal("document");
          }}
        >
          Show All Reports
        </button>
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
    </div>
  );
}
Fleets.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Fleets;
