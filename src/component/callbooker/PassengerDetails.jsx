import { Message, Phone, User } from "@/assets/svg/Svg";

function PassengerDetails() {
  return (
    <div className="booker__box">
      <h2>Passenger Details</h2>
      <div className="booker__box--top">
        <div className="booker__input">
          <input type="text" placeholder="Passenger Name" />
          <User />
        </div>
        <div className="booker__input">
          <input type="text" placeholder="Phone Number" />
          <Phone />
        </div>
        <div className="booker__input">
          <input type="text" placeholder="Email Address" />
          <Message />
        </div>
      </div>
      <div className="booker__box--bottom">
        <button>Recent Trips</button>
        <button>View Last</button>
        <button>Contact Passenger </button>
      </div>
    </div>
  );
}

export default PassengerDetails;
