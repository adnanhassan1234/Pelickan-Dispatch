import React from "react";

const EditdayHirePricing = ({
  showEditdayHirePricing,
  setEditdayHirePricing,
}) => {
  return (
    <>
      {showEditdayHirePricing && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="vehicleNameDiv">
              <label className="nameLbl">Up to Hours Tour:</label>
              <input
                type="text"
                name="vehicleName"
                className="vehiclNameInput"
              />
            </div>
            <div className="vehicleNameDiv" style={{ marginTop: "15px" }}>
              <label className="nameLbl">Vehicles:</label>
              <input
                type="text"
                name="vehicleName"
                className="vehiclNameInput"
              />
            </div>
            <div className="vehicleNameDiv" style={{ marginTop: "15px" }}>
              <label className="nameLbl">Per Hour Rate:</label>
              <input
                type="text"
                name="vehicleName"
                className="vehiclNameInput"
              />
            </div>
            <div className="vehicleNameDiv" style={{ marginTop: "15px" }}>
              <label className="nameLbl">Mileage Allowed:</label>
              <input
                type="text"
                name="vehicleName"
                className="vehiclNameInput"
              />
            </div>
            <div className="vehicleNameDiv" style={{ marginTop: "15px" }}>
              <label className="nameLbl">
                Excess Mileage Charge (Per Mile):
              </label>
              <input
                type="text"
                name="vehicleName"
                className="vehiclNameInput"
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver">Update</button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setEditdayHirePricing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditdayHirePricing;
