import React from "react";
const BookingData = ({ bookingData, onDelete, onUpdateModal }) => {
  return (
    <div
      className="driversmainDiv"
      //   style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
      {/* <div>
        <label>Pickup Date From</label>
        <label>Pickup Date To</label>
        <label>Search by Column</label>
      </div>
      <div>
        <input placeholder="pickup date from" />
        <input placeholder="pickup date to" />
        <select>
          <option>--select--</option>
          <option>Id</option>
          <option>From</option>
          <option>To</option>
          <option>Name</option>
          <option>Pickup date</option>
          <option>mobile num</option>
          <option>Website</option>
        </select>
      </div>
      <div>
        <button>Cash Pending</button>
        <button>paid Pending</button>
        <button>Confirm</button>
        <button>Declined</button>
        <button>Completed</button>
        <button>Delete Selected Booking</button>
      </div> */}
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Booking ID</th>
            <th className="py-2 px-1">Account Type</th>
            <th className="py-2 px-1">Name</th>
            <th className="py-2 px-1">From </th>
            <th className="py-2 px-1">To</th>
            <th className="py-2 px-1">Pick up Date Time</th>
            <th className="py-2 px-1">Payment </th>
            {/* <th className="py-2 px-1">View Detail</th> */}
            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {bookingData.map((item) => (
            <tr key={item?._id} className="cursorPointer">
              <td>{item?._id}</td>
              <td>{item?.accountType}</td>
              <td>{item?.name}</td>
              <td>{item?.fromVal}</td>
              <td>{item?.toVal}</td>
              <td>
                {item?.oneWayDate +
                  "  " +
                  item?.fromHours +
                  ":" +
                  item?.fromMins}
              </td>
              <td>
                {item?.payment ? (
                  <span style={{ color: "green" }}>Received</span>
                ) : (
                  <span style={{ color: "red" }}>Not Received</span>
                )}
              </td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() => onUpdateModal(item)}
                  >
                    <i className="fa-regular fa-eye editColor fontSizeIcons"></i>
                  </span>
                  <span
                    className="deletelabel"
                    onClick={() => onDelete(item?._id)}
                  >
                    <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingData;
