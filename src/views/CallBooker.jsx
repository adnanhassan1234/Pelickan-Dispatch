import PassengerDetails from "@/component/callbooker/PassengerDetails";
import Navbar from "@/component/dashboard/Navbar";

function CallBooker() {
  return (
    <div className="ml__responsive">
      <Navbar title="Call Booker" />
      <div className="main__container">
        <div className="booker__top">
          <ul>
            <li className="booker__active">Job Information</li>
            <li>Edit Details</li>
            <li>Track Driver</li>
            <li>Allocate Driver</li>
            <li>Copy / Swap</li>
            <li>View Log</li>
            <li>Complete / Cancel Job</li>
            <li>Multiple Stops</li>
            <li>Froward to Subcontractor</li>
            <li>Find a Job Query</li>
          </ul>
        </div>
        <div className="booker__middle">
          <div className="booker__left">
            <div className="booker__left--top">
              <PassengerDetails />
              <div className="booker__box">
                {/* <div></div> */}
                <img src="@/assets/map.png" alt="" />
              </div>
              <div className="booker__box">
                <h2>Date and Time</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
              <div className="booker__box">
                <h2>Passenger Details</h2>
              </div>
            </div>
          </div>
          <div className="booker__right">
            <div className="booker__box">
              <h2>Passenger Details</h2>
            </div>
            <div className="booker__box">
              <h2>Passenger Details</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallBooker;
