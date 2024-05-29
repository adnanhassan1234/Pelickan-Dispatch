import React from "react";

function ShowBookingData({ showBooking, setShowBooking, detail }) {
  const {
    name,
    email,
    fare,
    fromHours,
    fromVal,
    oneWayDate,
    returnDate,
    toVal,
    fromMins,
    toHour,
    toMins,
    hLaggages,
    laggages,
    mNumber,
    nCode,
    noOfPassengers,
    notes,
    fromPostCode,
    toPostCode,
  } = detail;
  return (
    <>
      {showBooking && (
        <div className="vehiclemainDiv">
          <h2>Booking Information</h2>
          <form className="formDesign view__booking">
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Name:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="name"
                value={name ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Email:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="email"
                value={email ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>

            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                From:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fromVal"
                value={fromVal ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                To:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="toVal"
                value={toVal ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Fare:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fare"
                value={fare ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                OneWay Date:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fare"
                value={oneWayDate ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Time:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fromHours"
                value={fromHours + ":" + fromMins ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                From PostCode:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="fromPostCode"
                value={fromPostCode ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            {returnDate && (
              <>
                <div className="commonDiv">
                  <label
                    className="registrationWidth"
                    style={{ marginLeft: "-5px" }}
                  >
                    Return Date:
                  </label>
                  <input
                    type="text"
                    className="commonInput registerrationInput"
                    style={{ marginLeft: "35px" }}
                    name="returnDate"
                    value={returnDate ?? ""}
                    readOnly
                    // onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="commonDiv">
                  <label
                    className="registrationWidth"
                    style={{ marginLeft: "-5px" }}
                  >
                    Return Time:
                  </label>
                  <input
                    type="text"
                    className="commonInput registerrationInput"
                    style={{ marginLeft: "35px" }}
                    name="toHours"
                    value={toHour + ":" + toMins ?? ""}
                    readOnly
                    // onChange={(e) => onChange(e)}
                  />
                </div>

                <div className="commonDiv">
                  <label
                    className="registrationWidth"
                    style={{ marginLeft: "-5px" }}
                  >
                    Retrun PostCode:
                  </label>
                  <input
                    type="text"
                    className="commonInput registerrationInput"
                    style={{ marginLeft: "35px" }}
                    name="toPostCode"
                    value={toPostCode ?? ""}
                    readOnly
                    // onChange={(e) => onChange(e)}
                  />
                </div>
              </>
            )}
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Hand Laggages:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="hLaggages"
                value={hLaggages ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Laggages:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="laggages"
                value={laggages ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Passengers:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="noOfPassengers"
                value={noOfPassengers ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Code:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="nCode"
                value={nCode ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Number:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="mNumber"
                value={mNumber ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Notes:
              </label>
              <input
                type="text"
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                name="notes"
                value={notes ?? ""}
                readOnly
                // onChange={(e) => onChange(e)}
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            {/* <button className="btnDesignDriver">Update</button> */}
            <button
              className="btnDesignDriverCancel"
              onClick={() => setShowBooking(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBookingData;
