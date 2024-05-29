import React from "react";
import FixFareWisePage from "./FixFareWise/FixFareWisePage";
import MileageFareWisePage from "./MileageFareWise/MileageFareWisePage";

const FixAndMilagefare = ({ showFixAndmilageFare }) => {
  return (
    <>
      {showFixAndmilageFare && (
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MileageFareWisePage />

            <FixFareWisePage />
            {/* <button className="addBtn">Add fix and milage fare</button> */}
            <label className="underlineInTable"></label>
          </div>
        </div>
      )}
    </>
  );
};

export default FixAndMilagefare;
