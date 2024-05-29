import React, { useState } from "react";
import AddGlobalSetting from "./AddGlobalSetting";
import EditGlobalSetting from "./EditGlobalSetting";
import GlobalSettingData from "./GlobalSettingData";

const Global = ({ showGlobalTab }) => {
  const [showGlobalModal, setGlobalModal] = useState(false);
  const [showGlobalEditModal, setGlobalEditModal] = useState(false);
  return (
    <>
      {showGlobalTab && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button
              className="addBtn"
              onClick={() => setGlobalModal(!showGlobalModal)}
            >
              Add Global Setting
            </button>
            <label className="underlineInTable"></label>
            <AddGlobalSetting
              showGlobalModal={showGlobalModal}
              setGlobalModal={setGlobalModal}
            />
            <EditGlobalSetting
              showGlobalEditModal={showGlobalEditModal}
              setGlobalEditModal={setGlobalEditModal}
            />
            <GlobalSettingData setGlobalEditModal={setGlobalEditModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Global;
