import React from "react";
import { useState } from "react";

const AddGlobalSetting = ({ showGlobalModal, setGlobalModal }) => {
  const [globalSettingData, setGlobalSettingData] = useState({
    value: "",
    key: "",
    text: "",
  });
  let { value, key, text } = globalSettingData;
  const globalSettingFormData = (e) => {
    setGlobalSettingData({
      ...globalSettingData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {showGlobalModal && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Value:
              </label>
              <input
                type="text"
                name="value"
                value={value}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={globalSettingFormData}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Key:
              </label>
              <input
                type="text"
                name="key"
                value={key}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={globalSettingFormData}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Text:
              </label>
              <input
                type="text"
                name="text"
                value={text}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={globalSettingFormData}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver">Add</button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setGlobalModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddGlobalSetting;
