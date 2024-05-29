import React from "react";
import { useState } from "react";

const EditDictionarySettiong = ({ showDicEditModal, setDicEditModal }) => {
  const [editDictionarySettingData, setEditDictionarySettingData] = useState({
    language_code: "",
    key: "",
    text: "",
    is_active: "",
  });
  let { language_code, key, text, is_active } = editDictionarySettingData;
  const editDicSettingFormData = (e) => {
    setEditDictionarySettingData({
      ...editDictionarySettingData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {showDicEditModal && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Language Code:
              </label>
              <input
                type="text"
                name="language_code"
                value={language_code}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={editDicSettingFormData}
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
                onChange={editDicSettingFormData}
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
                onChange={editDicSettingFormData}
              />
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Active:</label>

              <select
                onChange={editDicSettingFormData}
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
              onClick={() => setDicEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditDictionarySettiong;
