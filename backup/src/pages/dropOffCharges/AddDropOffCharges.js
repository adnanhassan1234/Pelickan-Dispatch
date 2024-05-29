import React from "react";
import DropOffChargesDropDown from "./DropOffChargesDropDown";

const AddDropOffCharges = ({
  showAddDropOffChar,
  setShowAddDropOffChar,
  onChange,
  onSubmit,
  pCharges,
}) => {
  const { charges, location_type } = pCharges;
  return (
    <>
      {showAddDropOffChar && (
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
            <DropOffChargesDropDown
              val={location_type}
              onChange={onChange}
              name="location_address"
            />
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
                setShowAddDropOffChar(false);
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

export default AddDropOffCharges;
