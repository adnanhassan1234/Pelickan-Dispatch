import React from "react";

export const EditCongestionCharges = ({
  showEditCongestionChar,
  setShowEditCongestionChar,
  onUpdate,

  onChange,
  updateChargesData,
}) => {
  const { postCode, fare, fTime, tTime } = updateChargesData;
  return (
    <>
      {showEditCongestionChar && (
        <div className="vehiclemainDiv">
          <div>Update</div>
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Postcode:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="postCode"
                value={postCode}
                onChange={(e) => onChange(e)}
              />
            </div>
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
                name="fare"
                value={fare}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                From Time:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fTime"
                value={fTime}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                To Time:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="tTime"
                value={tTime}
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
              onClick={() => setShowEditCongestionChar(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
