import Input from "@/component/form/Input";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";
import CheckBoxSingle from "../form/CheckBoxSingle";

function SystemSixFare() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="Fare Meter Tarrif" />
        <div className="override__middle param--thrd">
          <Input
            label="Fare Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Worked  Time includes Sin-Bin"
            type="text"
            id="farename"
            visibility="visible"
          />
          <Input
            label="Tariff Definition"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="500"
            type="text"
            id="tariffdefinition"
            visibility="visible"
          />
          <CheckBoxSingle
            label="Enable Manual Waiting Mode"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="enablemanualwaitingmode"
            placeholder="10"
          />
          <span className="example__text--second">
            Manual Waiting Tariff Definition
          </span>
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

export default SystemSixFare;
