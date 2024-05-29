import Input from "@/component/form/Input";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";
import CheckBoxSingle from "../form/CheckBoxSingle";
import InputLabel from "../form/InputLabel";

function SystemEightModal() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="System Parameters" />
        <div className="override__middle param--thrd">
          <Input
            label="Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Driver Document"
            type="text"
            id="drivername"
            visibility="visible"
          />
          <Input
            label="Document Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Document Name"
            type="text"
            id="documentname"
            visibility="visible"
          />
          <span className="example__text--second system--eight__heading">
            Settings for new documents
          </span>
          <CheckBoxSingle
            label="Track Expiry by default"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="enablemanualwaitingmode"
            placeholder="10"
          />
          <span className="example__text--second system--eight__heading">
            Document rules
          </span>
          <div className="document--checkk">
            <CheckBoxSingle
              label="Document Value is Mandatory"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="documentvalue"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Start Date is Mandatory"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="startdate"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Allow time in Start Date (HH:MM)"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="allowtimeinstartdate"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Expiry Date is Mandatory"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="expirydate"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Allow time in Expiry Date (HH:MM)"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="allowtimeinexpirydate"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Show in Driver Dashboard"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="showindriver"
              placeholder="10"
            />
            <CheckBoxSingle
              label="Enable Reminder Period (and text)"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="enablereminderperiod"
              placeholder="10"
            />
          </div>
          <div className="system--reminder__modal">
            <InputLabel
              label="Reminder Period"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="text"
              id="reminderperiod"
              placeholder="30"
              labelText="Days"
              visibility="visible"
            />
            <InputLabel
              label="Reminder Period HR"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="text"
              id="reminderperiodhr"
              placeholder="10"
              labelText="Hours"
              visibility="hidden"
            />
          </div>
          <Paragraph
            label="Custom Reminder Text"
            text="This parameter selects whether the time spent by a driver in state ‘Sin-Bin is counted as worked Time in the Earnings per Work Hour calculation."
            id="customreminder"
            visibility="visible"
          />
          <Paragraph
            label="Hint"
            text="This parameter selects whether the time spent by a driver in state ‘Sin-Bin is counted as worked Time in the Earnings per Work Hour calculation."
            id="hint"
            visibility="visible"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SystemEightModal;
