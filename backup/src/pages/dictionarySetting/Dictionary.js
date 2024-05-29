import React, { useState } from "react";
import AddDictionarySettiong from "./AddDictionarySetting";
import EditDictionarySettiong from "./EditDictionarySetting";
import DictionaryData from "./DictionaryData";

const Dictionary = ({ showDictionaryTab }) => {
  const [showAddDicModal, setAddDicModal] = useState(false);
  const [showDicEditModal, setDicEditModal] = useState(false);
  return (
    <>
      {showDictionaryTab && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button
              className="addBtn"
              onClick={() => setAddDicModal(!showAddDicModal)}
            >
              Add Dictionary Setting
            </button>
            <label className="underlineInTable"></label>
            <AddDictionarySettiong
              showAddDicModal={showAddDicModal}
              setAddDicModal={setAddDicModal}
            />

            <EditDictionarySettiong
              showDicEditModal={showDicEditModal}
              setDicEditModal={setDicEditModal}
            />
            <DictionaryData setDicEditModal={setDicEditModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dictionary;
