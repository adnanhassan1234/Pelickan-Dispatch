import Input from "@/component/form/Input";
import Paragraph from "@/component/form/Paragraph";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";
import Select from "../form/Select";

function SystemThrdModal() {
  const UseBoth = [
    {
      name: "Use Both",
      value: "useboth",
    },
    {
      name: "Use Longer",
      value: "uselonger",
    },
    {
      name: "Use Shorter",
      value: "useshorter",
    },
    {
      name: "Use Shorter 2 of 3",
      value: "extrastops",
    },
  ];
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
          <Select
            // label="Charged By"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            data={UseBoth}
            id="useboth"
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

export default SystemThrdModal;
