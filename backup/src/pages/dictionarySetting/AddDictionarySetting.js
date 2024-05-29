import React from "react";
import { useState } from "react";

const AddDictionarySettiong = ({ showAddDicModal, setAddDicModal }) => {
  const [dictionarySettingData, setDictionarySettingData] = useState({
    language_code: "",
    key: "",
    text: "",
  });
  let { language_code, key, text } = dictionarySettingData;
  const globalSettingFormData = (e) => {
    setDictionarySettingData({
      ...dictionarySettingData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {showAddDicModal && (
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
              onClick={() => setAddDicModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDictionarySettiong;
