import React from "react";
import { useState } from "react";

const EditGlobalSetting = ({ showGlobalEditModal, setGlobalEditModal }) => {
  const [globalSettingData, setGlobalSettingData] = useState({
    value: "",
    key: "",
    text: "",
    is_active: "",
  });
  let { value, key, text, is_active } = globalSettingData;
  const editGlobalSettingFormData = (e) => {
    setGlobalSettingData({
      ...globalSettingData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {showGlobalEditModal && (
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
                onChange={editGlobalSettingFormData}
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
                onChange={editGlobalSettingFormData}
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
                onChange={editGlobalSettingFormData}
              />
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Active:</label>

              <select
                onChange={editGlobalSettingFormData}
                className="commonInput"
                name="is_active"
                value={is_active}
                style={{ marginLeft: "55px" }}
              >
                <option>Active</option>
                <option>Not Active</option>
              </select>
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver">Add</button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setGlobalEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditGlobalSetting;
