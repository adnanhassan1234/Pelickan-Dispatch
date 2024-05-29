import React from "react";

const BookingPending = () => {
  return (
    <div>
      <div>
        <label>Booking Refrence</label>

        <div>
          <label>created date:</label>
          <label>28 sep 2022</label>
          <label>created time:</label>
          <label>07:04:16</label>
          <label>Booking Status:</label>
          <label>Pending</label>
        </div>
        <div>
          <div>
            <label>Traveller Information</label>
            <div>
              <label>Name:</label>
              <label>Faisal Khan</label>
              <label>Email Address:</label>
              <label>faisalkhan@qmhtech.co.uk</label>
              <label>Mobile Number:</label>
              <label>+44 11111111111</label>
              <label>Vehicle:</label>
              <label>civic</label>
              <label>Account Number:</label>
              <label>PA_105561</label>
            </div>
          </div>
          <div>
            <label>Carrier Details</label>
            <div>
              <label>Passenger No::</label>
              <label>1</label>
              <label> Hand Luggage:</label>
              <label>0</label>
              <label>Check-in Luggage:</label>
              <label>0</label>
              <label>Account Type:</label>
              <label>Personal</label>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label>Pick-up Information</label>
            <div>
              <label>From:</label>
              <label>BALTIC STREET WEST LONDON EC1Y 0RP</label>
              <label>Pick Up Date:</label>
              <label>30 September 2022</label>
              <label>Pick Up Time:</label>
              <label>01:10</label>
            </div>
          </div>
          <div>
            <label>Drop-off Information</label>
            <div>
              <label>To:</label>
              <label>HEATHROW AIRPORT TERMINAL 1 TW6 1JS</label>
            </div>
          </div>
        </div>
        <div>
          <label>Fare Summary</label>
          <label>Basic Fare : £69.30</label>
          <label>Airport Dropoff Toll: £5.00</label>
          <label>Night Charges: £7.70</label>
        </div>
        <div>
          <div>
            <label>Total Fare:</label>
            <label>£ 82.00</label>
          </div>
          <div>
            <label>Payment Type:</label>
            <label>Credit/Debit Card.</label>
          </div>
        </div>
      </div>
      <div>
        <button>back</button>
        <button>Accept</button>
        <button>decline</button>
      </div>
    </div>
  );
};

export default BookingPending;
