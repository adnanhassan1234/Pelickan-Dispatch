import React from "react";

export const EditThreshold = ({
  showUpdateThreshold,
  setShowUpdateThreshold,
  onUpdate,
  onChange,
  updateThreshold,
}) => {
  const { minimum_mileage_threshold } = updateThreshold;
  return (
    <>
      {showUpdateThreshold && (
        <div className="vehiclemainDiv">
          <h2>Update</h2>
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Add Minimum Mileage Threshold:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="minimum_mileage_threshold"
                value={minimum_mileage_threshold}
                onChange={(e) => onChange(e)}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={() => onUpdate()}>
              Update
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setShowUpdateThreshold(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
