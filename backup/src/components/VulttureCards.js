import React from "react";

const VulttureCards = ({ hideFiveCard }) => {
  return (
    <div className="vultturecardOutDiv">
      <div className="vulttureCardMainDiv">
        <div className="cardIconsDiv">
          <i className="fa-sharp fa-solid fa-wallet"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <label className="cardLabel1Design">$ 143,89</label>
        <label className="cardLabel2Design">Your Total</label>
        <label className="cardLabel2Design">Bank Balance</label>
      </div>
      <div className="vulttureCardMainDiv">
        <div className="cardIconsDiv">
          <i className="fa-sharp fa-solid fa-wallet"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <label className="cardLabel1Design">$ 143,89</label>
        <label className="cardLabel2Design">Your Total</label>
        <label className="cardLabel2Design">Bank Balance</label>
      </div>
      <div className="vulttureCardMainDiv">
        <div className="cardIconsDiv">
          <i className="fa-sharp fa-solid fa-wallet"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <label className="cardLabel1Design">$ 143,89</label>
        <label className="cardLabel2Design">Your Total</label>
        <label className="cardLabel2Design">Bank Balance</label>
      </div>
      <div className="vulttureCardMainDiv">
        <div className="cardIconsDiv">
          <i className="fa-sharp fa-solid fa-wallet"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <label className="cardLabel1Design">$ 143,89</label>
        <label className="cardLabel2Design">Your Total</label>
        <label className="cardLabel2Design">Bank Balance</label>
      </div>
      {hideFiveCard && (
        <div className="vulttureCardMainDiv">
          <div className="cardIconsDiv">
            <i className="fa-sharp fa-solid fa-wallet"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>

          <label className="cardLabel1Design">$ 143,89</label>
          <label className="cardLabel2Design">Your Total</label>
          <label className="cardLabel2Design">Bank Balance</label>
        </div>
      )}
    </div>
  );
};

export default VulttureCards;
