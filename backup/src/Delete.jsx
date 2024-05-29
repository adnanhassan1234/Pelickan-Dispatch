import React from "react";

const DeleteModel = ({
  deleteDriverSelectedRow,
  openDeleteModel,
  driverModelCheck,
  setOpenDeleteModel,
  selectDriverDeleteRowId,
  deleteVehicleSelectedRow,
  vehicleModelCheck,
  selectVehicleDeleteRowId,
}) => {
  function deleteRowData() {
    if (driverModelCheck === true) {
      deleteDriverSelectedRow(selectDriverDeleteRowId);
      setOpenDeleteModel(false);
    }
    if (vehicleModelCheck === true) {
      deleteVehicleSelectedRow(selectVehicleDeleteRowId);
      setOpenDeleteModel(false);
    }
  }
  return (
    <>
      {openDeleteModel && (
        <div className="deleteMainDiv">
          <i className="fa-solid fa-trash deleteDesignModal"></i>
          <div className="deleteMsgDiv">
            <h4 className="textCenter paddingTopBottom">Are You Sure?</h4>
            <p className="textCenter paddingTopBottom">
              Do you really want to delete this?
            </p>
            <div className="deleteBtnDiv paddingTopBottom">
              <button
                className="cancelBtn"
                onClick={() => setOpenDeleteModel(false)}
              >
                Cancel
              </button>
              <button className="deleteBtn" onClick={deleteRowData}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModel;
