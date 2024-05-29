import Input from "@/component/form/Input";
import Header from "../driver/module/modals/modalcomponent/Header";
import Footer from "../driver/module/modals/modalcomponent/Footer";
import CheckBoxSingle from "../form/CheckBoxSingle";

function SystemFiveLice() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="License Authority" />
        <div className="override__middle param--thrd">
          <Input
            label="Authority Short Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Worked  Time includes Sin-Bin"
            type="text"
            id="shortname"
            visibility="visible"
          />
          <Input
            label="Authority Full Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="500"
            type="text"
            id="authority"
            visibility="visible"
          />
          <Input
            label="License Holder "
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="500"
            type="text"
            id="licenseholder"
            visibility="visible"
          />
          <CheckBoxSingle
            label="Default Authority ?"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="checkbox"
            id="defaultauthority"
            placeholder="10"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SystemFiveLice;
