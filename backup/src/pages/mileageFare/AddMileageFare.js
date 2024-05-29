import React from "react";

const AddMileageFare = ({
  showAddMFare,
  setShowAddMFare,
  onChange,
  onSubmit,
  mileageFareAdd,
}) => {
  const { from_miles, to_miles, fare } = mileageFareAdd;

  return (
    <>
      {showAddMFare && (
        <div className="vehiclemainDiv">
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              From Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="from_miles"
              value={from_miles}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              To Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="to_miles"
              value={to_miles}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              Fare
            </label>
            <input
              className="commonInput registerrationInput"
              name="fare"
              value={fare}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={(e) => onSubmit(e)}>
              Add
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => {
                setShowAddMFare(false);
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

export default AddMileageFare;
