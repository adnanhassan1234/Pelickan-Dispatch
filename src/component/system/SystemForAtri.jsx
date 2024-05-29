import Input from "@/component/form/Input";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";

function SystemForAtri() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="Attributes" />
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
          <Input
            label="Value"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="500"
            type="text"
            id="value"
            visibility="visible"
          />
          <Input
            label="Abbreviation"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="500"
            type="text"
            id="abbreviation"
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

export default SystemForAtri;
