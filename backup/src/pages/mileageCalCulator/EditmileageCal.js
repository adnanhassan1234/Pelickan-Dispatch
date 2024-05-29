import React from "react";

const EditmileageCal = ({
  showEditMinimumMileageFareChar,
  setShowEditMinimumMileageFareChar,
  updateMCalData,
  onChange,
  onUpdate,
}) => {
  const { minimum_mileage_price, vehicle_type } = updateMCalData;
  return (
    <>
      {showEditMinimumMileageFareChar && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="vehicleNameDiv">
              <label className="nameLbl">Vehicle Name:</label>
              <input
                type="text"
                name="vehicle_type"
                className="vehiclNameInput"
                value={vehicle_type ?? ""}
                readOnly
              />
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
            <button className="btnDesignDriver" onClick={(e) => onUpdate()}>
              Update
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setShowEditMinimumMileageFareChar(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditmileageCal;
