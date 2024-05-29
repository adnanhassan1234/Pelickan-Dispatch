import React from "react";

const AddMileageCal = ({
  showAddMinimumMileageFareChar,
  setShowAddMinimumMileageFareChar,
  onChange,
  onSubmit,
  mCal,
  vehicleType,
}) => {
  const { minimum_mileage_price } = mCal;

  return (
    <>
      {showAddMinimumMileageFareChar && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="vehicleNameDiv">
              <label className="nameLbl">Vehicle Name:</label>
              {/* <input
                type="text"
                name="vehicle_type"
                className="vehiclNameInput"
                value={vehicle_type ?? ""}
                readOnly
              /> */}
              <select
                name="vehicle_type_id"
                onChange={(e) => onChange(e)}
                className="vehiclNameInput"
              >
                <option value="">Please Select Vehicle Type</option>
                {vehicleType?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.vehicle_type}
                  </option>
                ))}
              </select>
            </div>
            <div className="vehicleNameDiv" style={{ marginTop: "15px" }}>
              <label className="nameLbl">Min Mileage Fare:</label>
              <input
                type="text"
                name="minimum_mileage_price"
                className="vehiclNameInput"
                value={minimum_mileage_price}
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
                setShowAddMinimumMileageFareChar(false);
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

export default AddMileageCal;
