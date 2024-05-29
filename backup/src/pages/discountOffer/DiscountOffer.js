import React, { useState } from "react";
import DiscountOfferData from "./DiscountOfferData";

const DiscountOffer = ({ showDiscountOffer }) => {
  const [showPercentageLbl, setShowPercentageLbl] = useState(true);
  const [showAmountLbl, setShowAmountLbl] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      setShowPercentageLbl(false);
      setShowAmountLbl(true);
    } else {
      setShowAmountLbl(false);
      setShowPercentageLbl(true);
    }
  };

  return (
    <>
      {showDiscountOffer && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <div>
              <label>Promotional Special Code Name</label>
              <input placeholder="Promotional Special Code Name" />
              <label>Type</label>
              <select>
                <option>--Select--</option>
                <option>Time Limit</option>
                <option>Without Time Limit</option>
              </select>
              {showPercentageLbl && <label>Percentage</label>}
              {showAmountLbl && <label>Amount</label>}
              <input placeholder="Percentage" />
              <label>Please select amount/percentage</label>
              <div>
                <label>is amount wise</label>
                <input type="checkbox" onChange={handleChange} />
              </div>
              <button className="addBtn">Generate</button>
            </div>
            <label className="underlineInTable"></label>
            <DiscountOfferData />
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountOffer;
