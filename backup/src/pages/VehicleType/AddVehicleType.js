import React from "react";

const AddVehicleType = ({
  showAddVehicleTypeChar,
  setShowAddVehicleTypeChar,
  onChange,
  onSubmit,
  vType,
}) => {
  const { vehicle_type, no_passengers, no_suitcases, cabin_size_cases } = vType;

  return (
    <>
      {showAddVehicleTypeChar && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Vehicle Type:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="vehicle_type"
                value={vehicle_type}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Passengers:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="no_passengers"
                value={no_passengers}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Suitcases
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="no_suitcases"
                value={no_suitcases}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Cabin Size Cases
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="cabin_size_cases"
                value={cabin_size_cases}
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
                setShowAddVehicleTypeChar(false);
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

export default AddVehicleType;
