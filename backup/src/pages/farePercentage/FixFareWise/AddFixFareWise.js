import React from "react";

const AddFixFareWise = ({
  showAddFixFare,
  setShowAddFixFare,
  onChange,
  onSubmit,
  addFixFare,
  handleAmountWise,
  amountWise,
  vehicleType,
}) => {
  const { fare } = addFixFare;

  return (
    <>
      {showAddFixFare && (
        <div className="vehiclemainDiv" style={{ top: "150%" }}>
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Vehicle Type
              </label>
              <select
                name="v_id"
                onChange={(e) => onChange(e)}
                className="commonInput"
                style={{ marginLeft: "55px" }}
              >
                <option value="">Please Select Vehicle Type</option>
                {vehicleType?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.vehicle_type}
                  </option>
                ))}
              </select>
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Is Amount wise:
              </label>
              <input
                type="checkbox"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="isAmountWise"
                checked={amountWise}
                onChange={handleAmountWise}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Amount/Percentage:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fare"
                value={fare}
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
                setShowAddFixFare(false);
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

export default AddFixFareWise;
