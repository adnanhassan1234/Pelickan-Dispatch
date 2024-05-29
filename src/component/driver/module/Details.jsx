import { Search } from "@/assets/svg/Svg";
import PropTypes from "prop-types";
import Input from "@/component/form/Input";
import SelectLabel from "@/component/form/SelectLabel";
import InputLabel from "@/component/form/InputLabel";
import Select from "@/component/form/Select";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import rooster from "@/assets/rooster.png";
import { useState } from "react";
function Details({ onOpenModal }) {
  const [formData, setFormData] = useState({
    driver_id: "",
    export_ref: "",
    pin: "",
    full_name: "",
    joining_date: "",
    date_left: "",
    invite_code: "",
    invite_details: "",
    membership: "",
    homeaddress: "",
    billing_address: "",
    date_of_birth: "",
    vat_number: "",
    home_tel_number: "",
    mobile_tel_number: "",
    next_kin: "",
    statement_interval: "",
    laststatement_date: "",
    laststatement_number: "",
  });

  const {
    driver_id,
    export_ref,
    pin,
    full_name,
    joining_date,
    date_left,
    invite_code,
    invite_details,
    membership,
    homeaddress,
    billing_address,
    date_of_birth,
    vat_number,
    home_tel_number,
    mobile_tel_number,
    next_kin,
    statement_interval,
    laststatement_date,
    laststatement_number,
  } = formData;

  const docType = [
    {
      name: "Active",
      value: "active",
    },
    {
      name: "Left",
      value: "left",
    },
    {
      name: "Suspended",
      value: "suspended",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const onChange = (e) => {
  //   const { value, id } = e.target;
  //   if (id === "membership" && value === "suspended") {
  //     onOpenModal("reason");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Driver Detail", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="detail__middle">
          <div className="detail__top--form">
            <Input
              label="Driver ID"
              onChange={handleChange}
              name="driver_id"
              value={driver_id}
              placeholder="Driver ID"
              type="text"
              id="driver"
              visibility="visible"
            />
            <Input
              label="Export Ref"
              onChange={handleChange}
              name="export_ref"
              value={export_ref}
              placeholder="Export Ref"
              type="text"
              id="exportRef"
              visibility="visible"
            />
            <Input
              label="PIN"
              onChange={handleChange}
              name="pin"
              value={pin}
              placeholder="PIN"
              type="text"
              id="pin"
              visibility="visible"
            />
            <Input
              label="Full Name"
              onChange={handleChange}
              name="full_name"
              value={full_name}
              placeholder="Full Name"
              type="text"
              id="fullname"
              visibility="visible"
            />
            <Input
              label="Date Joined"
              onChange={handleChange}
              name="joining_date"
              value={joining_date}
              placeholder="Date Joined"
              type="date"
              id="datejoined"
              visibility="visible"
            />
            <Input
              label="Date Left"
              onChange={handleChange}
              name="date_left"
              value={date_left}
              placeholder="Date Left"
              type="date"
              id="dateleft"
              visibility="visible"
            />
            <InputLabel
              label="Invite Code"
              onChange={handleChange}
              name="invite_code"
              value={invite_code}
              id="invitecode"
              labelText="Send to driver"
              placeholder="12345"
              visibility="visible"
            />
            <div className="col-3">
              <Input
                label="Invite Details"
                onChange={handleChange}
                name="invite_details"
                value={invite_details}
                placeholder="Invite Details"
                type="text"
                id="invitedetails"
                visibility="visible"
              />
            </div>
            <SelectLabel
              label="Membership"
              onChange={handleChange}
              name="membership"
              value={membership}
              id="membership"
              labelText="Display"
              data={docType}
              visibility="visible"
            />
            <div className="col-3">
              <Input
                label="Reason"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                placeholder="Reason"
                type="text"
                id="reason"
                visibility="visible"
                disabled={true}
              />
            </div>
          </div>
          {/* <hr className="line" /> */}
          <div className="detail__middle--form">
            <div className="detail__input">
              <label htmlFor="homeaddress" className="detail__address--search">
                <span>Home Address</span>
                <span onClick={() => onOpenModal("address")}>
                  <Search />
                </span>
              </label>

              <input
                id="homeaddress"
                type="text"
                onChange={handleChange}
                name="homeaddress"
                value={homeaddress}
                required
                placeholder="3 THE COTTAGES PRIORY LANE SW15 5JH"
              />
            </div>
            <div className="detail__input">
              <label htmlFor="bAddress" className="detail__address--search">
                <span>Billing Address (if different)</span>
                <span onClick={() => onOpenModal("address")}>
                  <Search />
                </span>
              </label>
              <input
                id="bAddress"
                onChange={handleChange}
                name="billing_address"
                value={billing_address}
                required
                type="text"
                placeholder="3 THE COTTAGES PRIORY LANE SW15 5JH"
              />
            </div>

            <Input
              label="Date Of BIrt"
              onChange={handleChange}
              name="date_of_birth"
              value={date_of_birth}
              required
              placeholder="Date Of BIrt"
              type="date"
              id="dob"
              visibility="visible"
            />

            <Input
              label="VAT No"
              onChange={handleChange}
              name="vat_number"
              value={vat_number}
              required
              placeholder="VAT No"
              type="text"
              id="vatno"
              visibility="visible"
            />
            <Input
              label="Home Tel No"
              onChange={handleChange}
              name="home_tel_number"
              value={home_tel_number}
              required
              placeholder="Home Tel No"
              type="text"
              id="hometelno"
              visibility="visible"
            />

            <Input
              label="Mobile Tel No"
              onChange={handleChange}
              name="mobile_tel_number"
              value={mobile_tel_number}
              required
              placeholder="Mobile Tel No"
              type="text"
              id="mobiletelno"
              visibility="visible"
            />
            <Input
              label="Next of Kin"
              onChange={handleChange}
              name="next_kin"
              value={next_kin}
              required
              placeholder="Next of Kin"
              type="text"
              id="nextofkin"
              visibility="visible"
            />

            <Select
              label="Statement Interval"
              onChange={handleChange}
              name="statement_interval"
              value={statement_interval}
              required
              data={docType}
              id="statementinterval"
              visibility="visible"
            />
            <Input
              label="Last Statement Date"
              onChange={handleChange}
              name="laststatement_date"
              value={laststatement_date}
              required
              placeholder="Sun, Mar 20, 2016"
              type="text"
              id="laststatementdate"
              visibility="visible"
            />
            <Input
              label="Last Statement No"
              onChange={handleChange}
              name="laststatement_number"
              value={laststatement_number}
              required
              placeholder="155"
              type="text"
              id="laststatementno"
              visibility="visible"
            />

            <div className="detail__input">
              <label htmlFor="roster">Roster</label>
              <div className="detail__input--group">
                <img src={rooster} onClick={() => onOpenModal("rooster")} />
                <CheckBoxSingle
                  label="Sign-On Anytime"
                  // onChange={onChange}
                  // name="reminderperiod"
                  // value=""
                  type="checkbox"
                  id="sign-onanytime"
                />
                <input id="roster" style={{ display: "none" }} />
                {/* <div>
              <input type="checkbox" id="roster" /> <span>Sign-On Anytime</span>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
Details.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Details;
