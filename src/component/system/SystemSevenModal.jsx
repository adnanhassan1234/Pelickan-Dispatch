import Input from "@/component/form/Input";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";

function SystemSevenModal() {
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
            placeholder="Worked  Time includes Sin-Bin"
            type="text"
            id="name"
            visibility="visible"
          />
          <Paragraph
            label="Text"
            text="This parameter selects whether the time spent by a driver in state ‘Sin-Bin is counted as worked Time in the Earnings per Work Hour calculation."
            id="text"
            visibility="visible"
          />
          <span className="example__text--second">Reply Options</span>
          <div className="buton--input">
            <span>1</span>
            <Input
              label=""
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="5000"
              type="text"
              id="oneinput"
              visibility="visible"
            />
          </div>
          <div className="buton--input">
            <span>2</span>
            <Input
              label=""
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="5000"
              type="text"
              id="twoinput"
              visibility="visible"
            />
          </div>
          <div className="buton--input">
            <span>3</span>
            <Input
              label=""
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="5000"
              type="text"
              id="threeinput"
              visibility="visible"
            />
          </div>
          <div className="buton--input">
            <span>4</span>
            <Input
              label=""
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="5000"
              type="text"
              id="fourinput"
              visibility="visible"
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

export default SystemSevenModal;
