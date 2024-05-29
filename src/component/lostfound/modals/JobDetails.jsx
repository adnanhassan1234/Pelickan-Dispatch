import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Lost from "@/assets/Lost.png";
import VerticalTable from "@/component/form/VerticalTable";
import Input from "@/component/form/Input";

function JobDetails() {
  const data = {
    "Passenger Name": "Gul Khan",
    "Lost Item": "Wallet",
    "Lost Item Description":
      " is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and ...",
    "Contact Passenger": "Make a Call",
    "Date & Time": "02/15/2024 - 14:00",
  };

  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Job Details" />
        <div className="generic__middle lostfound__middle--jd">
          <Input
            label="Passenger Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="passengername"
            placeholder="Passenger Name"
            visibility="visible"
          />
          <Input
            label="Contact No"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="contactno"
            placeholder="Contact No"
            visibility="visible"
          />
          <Input
            label="Email"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="jdemail"
            placeholder="Email"
            visibility="visible"
          />
          <Input
            label="Job Number"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="jobnumber"
            placeholder="Job Number"
            visibility="visible"
          />
          <Input
            label="Pickup Date & Time"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="pickupdatetime"
            placeholder="Pickup Date & Time"
            visibility="visible"
          />
          <Input
            label="Driver"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="jdriver"
            placeholder="Driver"
            visibility="visible"
          />
          <div className="lostfound__bottom">
            <Input
              label="Pickup Address"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="text"
              id="jpickupaddress"
              placeholder="Pickup Address"
              visibility="visible"
            />
            <Input
              label="Drop Off Address"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="text"
              id="jdropoffaddress"
              placeholder="Drop Off Address"
              visibility="visible"
            />
          </div>
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}

export default JobDetails;
