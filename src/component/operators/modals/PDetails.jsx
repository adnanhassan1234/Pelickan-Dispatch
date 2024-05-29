import PropTypes from "prop-types";
import Input from "@/component/form/Input";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import SelectSingleLabel from "@/component/form/SelectSingleLabel";
function PDetails({ onOpenModal }) {
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
  const onChange = (e) => {
    const { value, id } = e.target;
    if (id === "membership" && value === "suspended") {
      onOpenModal("reason");
    }
  };
  return (
    <div className="detail__middle">
      <div className="detail__top--form">
        <Input
          label="User Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="User Name"
          type="text"
          id="username"
          visibility="visible"
        />
        <Input
          label="Password"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Password"
          type="text"
          id="password"
          visibility="visible"
        />
        <Input
          label="Confirm Password"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Confirm Password"
          type="text"
          id="confirmpassword"
          visibility="visible"
        />
        <Input
          label="Agent Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Agent Number"
          type="text"
          id="agentnumber"
          visibility="visible"
        />
        <Input
          label="Full Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Full Name"
          type="text"
          id="fullname"
          visibility="visible"
        />
        <Input
          label="Email"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Email"
          type="text"
          id="email"
          visibility="visible"
        />

        <div className="col-4 ">
          <Input
            label="Address"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Address"
            type="text"
            id="address"
            visibility="visible"
          />
        </div>
        <Input
          label="Home Tel Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Home Tel Number"
          type="text"
          id="hometelnumber"
          visibility="visible"
        />
        <Input
          label="Mobile Tel Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Mobile Tel Number"
          type="text"
          id="mobiletelnumber"
          visibility="visible"
        />
        <Input
          label="Next of Kin"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Next of Kin"
          type="text"
          id="nextofkin"
          visibility="visible"
        />
        <div className="col-4 check__lg">
          <CheckBoxSingle
            label="Idle Time Before Closing Application"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="itbca"
          />{" "}
        </div>
        <div className="col-4 input__timedate">
          <SelectSingleLabel
            label="Hour"
            onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="hour1"
            labelText="Hour"
            data={docType}
            visibility="visible"
          />
          <SelectSingleLabel
            label="Minutes"
            onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="minutes"
            labelText="Minutes"
            data={docType}
            visibility="visible"
          />
        </div>
        <div className="col-4 check__lg">
          <CheckBoxSingle
            label="Restrict Future Job Viewing"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="rfjv"
          />
        </div>
        <div className="col-4 input__timedate">
          <SelectSingleLabel
            label="Hour"
            onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="hour2"
            labelText="Hour"
            data={docType}
            visibility="visible"
          />
          <SelectSingleLabel
            label="Minutes"
            onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="minutes1"
            labelText="Minutes"
            data={docType}
            visibility="visible"
          />
        </div>
        <div className="col-4 check__lg">
          <CheckBoxSingle
            label="Don’t allow operator program to run in wide screen"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="daoptriws"
          />
        </div>
        <div className="col-4">
          <Input
            label="Cloud Login"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="example@gmail.com"
            type="text"
            id="cloudlogin"
            visibility="visible"
          />
        </div>
      </div>
      {/* <hr className="line" /> */}
    </div>
  );
}
PDetails.propTypes = {
  onOpenModal: PropTypes.func,
};
export default PDetails;
