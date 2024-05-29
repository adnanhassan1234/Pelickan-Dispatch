import React from "react";
import PickUpChargesDropDown from "./PickUpChargesDropDown";
const AddPickUpCharges = ({
  showAddPickupChar,
  setShowAddPickupChar,
  onChange,
  onSubmit,
  pCharges,
}) => {
  const { charges, location_type, meet_and_greet_charges } = pCharges;

  return (
    <>
      {showAddPickupChar && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label className="registrationWidth">Location Type</label>
              <select
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="location_type"
                onChange={(e) => onChange(e)}
              >
                <option value="">--Select type--</option>
                <option value="airport">Airport</option>
                <option value="station">Station</option>
                <option value="seaport">Seaport</option>
              </select>
            </div>
            <PickUpChargesDropDown
              val={location_type}
              onChange={onChange}
              name="location_address"
            />
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Meet & Greet Charges
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="meet_and_greet_charges"
                value={meet_and_greet_charges}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Charges:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="charges"
                value={charges}
                onChange={(e) => onChange(e)}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={(e) => onSubmit(e)}>
              Add
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => {
                setShowAddPickupChar(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPickUpCharges;
