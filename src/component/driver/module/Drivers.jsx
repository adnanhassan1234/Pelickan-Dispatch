import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";

function Drivers({ onOpenModal }) {
  const data = [
    {
      Name: "National Insurance No.",
      Registration: "SK036451D",
    },
    {
      Name: "Badge No.",
      Registration: "SK036451D",
    },
    {
      Name: "Driving License.",
      Registration: "SK036451D",
    },
    {
      Name: "National Identity.",
      Registration: "SK036451D",
    },
  ];
  return (
    <div className="driverm__container">
      {/* {getState.tag.value === "vehicle" && (
        <VehicleModal onCloseModal={onCloseModal} />
      )} */}

      <div className="driverm__bottom">
        <div className="driverm__bottom--top">
          <h3>Driver is not Allowed to do Jobs for Accounts</h3>
          <CheckBoxSingle
            label="Any Vehicle"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="anyvehicle"
          />
        </div>
        <div className="table__main">
          <Table data={data} nextScreen="vehicleproperties" />
          <div className="form__bottom  second__bottom--footer">
            <button
              type="submit"
              onClick={() => {
                onOpenModal("vehicle");
              }}
            >
              New
            </button>
            <button type="submit">Add All</button>
            <button type="submit">Delete</button>
            <button type="submit">Delete All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Drivers.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Drivers;
