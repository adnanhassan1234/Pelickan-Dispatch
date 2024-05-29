import React from "react";

const AddThreshold = ({
  showAddThreshold,
  setShowAddThreshold,
  onChange,
  onSubmit,
  addThreshold,
}) => {
  const { minimum_mileage_threshold } = addThreshold;
  console.log(addThreshold);

  return (
    <>
      {showAddThreshold && (
        <div className="vehiclemainDiv">
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
            <button className="btnDesignDriver" onClick={(e) => onSubmit(e)}>
              Add
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => {
                setShowAddThreshold(false);
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

export default AddThreshold;
