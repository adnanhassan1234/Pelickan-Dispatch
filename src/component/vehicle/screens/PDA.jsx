import Input from "@/component/form/Input";
import Select from "@/component/form/Select";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
function PDA() {
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

  return (
    <div className="detail__middle">
      <div className="detail__top--form pda_top">
        <Input
          label="Software Version"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="1.14.1.2 - 2012/10/15"
          type="text"
          id="softwareversion"
          visibility="visible"
        />
        <div className="pda__check">
          <CheckBoxSingle
            label="Connected to taximeter:"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="connectedtotaximeter"
          />
          <CheckBoxSingle
            label="Connected to Card Swipe"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="connectedtocardswipe"
          />
          <CheckBoxSingle
            label="Reverse Taximeter Signal"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="reversetaximetersignal"
          />
          <CheckBoxSingle
            label="Connected to Printer"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="connectedtoprinter"
          />
          <CheckBoxSingle
            label="Show Flag-Down Button"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="showflagdownbutton"
          />
          <CheckBoxSingle
            label="Connected to Chip & Pin"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="connectedtochippin"
          />
          <CheckBoxSingle
            label="Auto Convert Street Jobs"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="autoconvertstreetjobs"
          />
          <CheckBoxSingle
            label="Using fare Meter"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="usingfaremeter"
          />
        </div>

        <Select
          label="Hardware Emergency Button"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          id="hardwareemergencybutton"
          data={docType}
          visibility="visible"
        />
      </div>
      {/* <hr className="line" /> */}
    </div>
  );
}

export default PDA;
