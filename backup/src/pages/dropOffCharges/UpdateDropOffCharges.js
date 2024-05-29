import React from "react";
import DropOffChargesDropDown from "./DropOffChargesDropDown";

export const UpdateDropOffCharges = ({
  showUpdateDropOffChar,
  setShowUpdateDropOffChar,
  onUpdate,
  onChange,
  updateChargesData,
}) => {
  const { charges, location_type, location_address } = updateChargesData;
  return (
    <>
      {showUpdateDropOffChar && (
        <div className="vehiclemainDiv">
          <h2>Update</h2>
          <form className="formDesign">
            <div className="commonDiv">
              <label className="registrationWidth">Location Type</label>
              <select
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="location_type"
                value={location_type}
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
              value={location_address}
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
            <button className="btnDesignDriver" onClick={(e) => onUpdate(e)}>
              Update
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => {
                setShowUpdateDropOffChar(false);
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
