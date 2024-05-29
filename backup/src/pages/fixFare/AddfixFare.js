// import React, { useState } from "react";
import React from "react";
import FixFareDropDown from "./FixFareDropDown";

export const AddFixFare = ({
  showAddFixPopup,
  setShowAddFixPopup,
  onChange,
  onSubmit,
  fixFareAdd,
  getVal,
  onChangeVal,
}) => {
  const { from, to, fare } = fixFareAdd;

  const { fromVal, toVal } = getVal;

  return (
    <>
      {showAddFixPopup && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">From Type:</label>

              <select
                className="commonInput"
                name="from"
                onChange={(e) => onChange(e)}
                style={{ marginLeft: "55px" }}
              >
                <option>--select--</option>
                <option value="Airport">Airport</option>
                <option value="Address">Address</option>
                <option value="Cruise Port">Cruise Port</option>
                <option value="Post Code">Post Code</option>
                <option value="Station">Station</option>
              </select>
            </div>
            <FixFareDropDown
              val={from}
              getVal={fromVal}
              onChange={onChangeVal}
              name="fromVal"
            />
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">To Type:</label>

              <select
                className="commonInput"
                name="to"
                onChange={(e) => onChange(e)}
                style={{ marginLeft: "55px" }}
              >
                <option>--select--</option>
                <option>Airport</option>
                <option>Address</option>
                <option>Cruise Port</option>
                <option>Post Code</option>
                <option>Station</option>
              </select>
            </div>
            <FixFareDropDown
              val={to}
              getVal={toVal}
              onChange={onChangeVal}
              name="toVal"
            />
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Fare:
              </label>
              <input
                type="text"
                name="fare"
                value={fare}
                onChange={(e) => onChange(e)}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={(e) => onSubmit(e)}>
              Add
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setShowAddFixPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFixFare;
