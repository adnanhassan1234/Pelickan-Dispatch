import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
function VAttributes({ onOpenModal }) {
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
            label="Airport Pickup [AP] "
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="airportpickup"
          />
          <CheckBoxSingle
            label="10_Seater/Multiple_V (Upto 10 Pax, 8 Lug, 8 Hand Lug)[10_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater10"
          />
          <CheckBoxSingle
            label="12_Seater/Multiple_V (Upto 12 Pax, 8 Lug, 8 Hand Lug)[12_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater12"
          />
          <CheckBoxSingle
            label="14_Seater/Multiple_V (Upto 14 Pax, 12 Lug, 14 Hand Lug)[14_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater14"
          />
          <CheckBoxSingle
            label="16_Seater/Multiple_V (Upto 16 Pax, 12 Lug, 16 Hand Lug)[16_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater16"
          />
          <CheckBoxSingle
            label="2 baby Seat (9 Months to 4 Year Old) [2 Baby Seat]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="babyseat2"
          />
          <CheckBoxSingle
            label="2 Booster Seat (4 Years to 9 Year Old) [2 Booster]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="booster2"
          />
          <CheckBoxSingle
            label="2 Infant Seat (0 to 9 Month Old) [2 Baby Infant]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="babyinfant2"
          />
          <CheckBoxSingle
            label="29_Seater_Minibus/Multiple (Upto 28Pax, 25 Lug, 25 Hand Lug) [29_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater29"
          />
          <CheckBoxSingle
            label="49_Seater_Coach/Multiple (Upto 49Pax, 49 Lug, 49 Hand Lug) [49_Seater]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="seater49"
          />
          <CheckBoxSingle
            label="Airport Dropoff [AD]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="airportdropoff"
          />
          <CheckBoxSingle
            label="Baby & Booster (9 Month to 4 Year Old), (4 Year to 9 Year booster) [baby & Boostr]"
            // onChange={onChange}
            // name="reminderperiod"

            // value=""
            type="checkbox"
            id="babyboostr"
          />
          <CheckBoxSingle
            label="Baby Seat (9 Months to 4 Years Old) [Baby Seat]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="babyseat9m-4y"
          />
          <CheckBoxSingle
            label="Booster Seat (4 Years to 9 Year Old) [Booster]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="booster"
          />
          <CheckBoxSingle
            label="Cash (Part) [Cash]"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="cashpartcash"
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
    </div>
  );
}
VAttributes.propTypes = {
  onOpenModal: PropTypes.func,
};
export default VAttributes;
