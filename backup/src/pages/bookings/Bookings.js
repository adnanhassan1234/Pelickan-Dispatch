import React, { useEffect } from "react";
import { useState } from "react";
import BookingData from "./BookingData";
import axios from "axios";
import ShowBookingData from "./ShowBookingData";

const Bookings = ({ showBookings }) => {
  const [bookingData, setBookingData] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const getBooking = async () => {
    try {
      const configurations = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get(
        "https://api.test.pelickandespatch.com:8443/booking/all-booking",
        configurations
      );
      console.log(res);
      setBookingData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);

  const configurations = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const onDelete = async (id) => {
    try {
      if (window.confirm("Press a button!\nEither OK or Cancel.")) {
        const res = await axios.delete(
          `https://api.test.pelickandespatch.com:8443/booking/${id}`,
          configurations
        );
        console.log(res);
        alert(res.data.msg);
        getBooking();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onUpdateModal = (data) => {
    setShowBooking(!showBooking);
    setUpdateData(data);
    console.log(data);
  };
  return (
    <>
      {showBookings && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <label className="underlineInTable"></label>
            <ShowBookingData
              showBooking={showBooking}
              setShowBooking={setShowBooking}
              detail={updateData}
            />
            <BookingData
              bookingData={bookingData}
              onDelete={onDelete}
              onUpdateModal={onUpdateModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Bookings;
