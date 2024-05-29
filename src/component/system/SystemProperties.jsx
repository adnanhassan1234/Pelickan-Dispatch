import Input from "@/component/form/Input";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";

function SystemProperties() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="System Parameter" />
        <div className="override__middle param--thrd">
          <Input
            label="Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Worked  Time includes Sin-Bin"
            type="text"
            id="name"
            visibility="visible"
          />
          <div className="override__middle--check">
            <CheckBoxSingle
              label="Yes"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="yes"
            />
            <CheckBoxSingle
              label="No"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              type="checkbox"
              id="no"
            />
          </div>
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

export default SystemProperties;
