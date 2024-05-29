import React from "react";

export const UpdateDropOffCharges = ({
  showUpdateDropOffChar,
  setShowUpdateDropOffChar,
  updateCharges,

  onChange,
  updateChargesData,
}) => {
  const { charges, location_type, location_address } = updateChargesData;
  console.log("here", updateChargesData);
  return (
    <>
      {showUpdateDropOffChar && (
        <div className="vehiclemainDiv">
          <h2>Update</h2>
          <form className="formDesign">
            <div className="commonDiv">
              <label className="registrationWidth">Location Type</label>
              <select
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="location_type"
                value={location_type}
                onChange={(e) => onChange(e)}
              >
                <option value="">--Select type--</option>
                <option value="airport">Airport</option>
                <option value="station">Station</option>
                <option value="seaport">Seaport</option>
              </select>
            </div>
            <div className="commonDiv">
              <label className="registrationWidth">Location</label>
              <select
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="location_address"
                value={location_address}
                onChange={(e) => onChange(e)}
              >
                <option value="">--Select Location--</option>
                <option value="Flat 10 Emerson Court Wimbledon Hill Road LONDON SW19 7PQ">
                  Flat 1 Emerson Court Wimbledon Hill Road LONDON SW19 7PQ
                </option>
                <option value="Flat 2 Emerson Court Wimbledon Hill Road LONDON SW19 7PQ">
                  Flat 2 Emerson Court Wimbledon Hill Road LONDON SW19 7PQ
                </option>
                <option value="LONDON CITY AIRPORT E16 2PB">
                  LONDON CITY AIRPORT E16 2PB
                </option>
                <option value="SOUTHEND AIRPORT SS2 6YF">
                  SOUTHEND AIRPORT SS2 6YF
                </option>
                <option value="LUTON AIRPORT LU2 9LY">
                  LUTON AIRPORT LU2 9LY
                </option>
                <option value="STANSTED AIRPORT CM24 1QW">
                  STANSTED AIRPORT CM24 1QW
                </option>
                <option value="HEATHROW AIRPORT TERMINAL 5 TW6 2GA">
                  HEATHROW AIRPORT TERMINAL 5 TW6 2GA
                </option>
                <option value="HEATHROW AIRPORT TERMINAL 4 TW6 3AA">
                  HEATHROW AIRPORT TERMINAL 4 TW6 3AA
                </option>
                <option value="HEATHROW AIRPORT TERMINAL 3 TW6 1JS">
                  HEATHROW AIRPORT TERMINAL 3 TW6 1JS
                </option>
                <option value="HEATHROW AIRPORT TERMINAL 2 TW6 1JS">
                  HEATHROW AIRPORT TERMINAL 2 TW6 1JS
                </option>
                <option value="HEATHROW AIRPORT TERMINAL 1 TW6 1JS">
                  HEATHROW AIRPORT TERMINAL 1 TW6 1JS
                </option>
              </select>
            </div>

            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Charges:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="charges"
                value={charges}
                onChange={(e) => onChange(e)}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button
              className="btnDesignDriver"
              onClick={(e) => updateCharges(e)}
            >
              Update
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => {
                setShowUpdateDropOffChar(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
