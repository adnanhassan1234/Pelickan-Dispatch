import React from "react";

export const UpdateMilageFareWise = ({
  showEditMileageFare,
  setShowEditMileageFare,
  onUpdate,

  onChange,
  updateMileageFareData,
  handleAmountWise,
  amountWise,
}) => {
  const { fare, percentage } = updateMileageFareData;
  return (
    <>
      {showEditMileageFare && (
        <div className="vehiclemainDiv">
          <div>Update</div>
          <form className="formDesign">
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
            {fare !== "" ? (
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
            ) : (
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
                  name="percentage"
                  value={percentage}
                  onChange={(e) => onChange(e)}
                />
              </div>
            )}
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={() => onUpdate()}>
              Update
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setShowEditMileageFare(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
