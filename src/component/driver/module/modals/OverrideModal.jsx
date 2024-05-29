import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";
import Input from "@/component/form/Input";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Paragraph from "@/component/form/Paragraph";

function OverrideModal() {
  return (
    <div className="modal__container">
      <div className="override__modal">
        <Header title="Address Search" />
        <div className="override__middle">
          <Input
            label="Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Show Payment Type  at Job Offer"
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
            text="Flag to control if the payment type should be shown to the Driver during job offer.<br/> Default value is 'Y'"
            id="hint"
            visibility="visible"
          />
          <hr className="" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default OverrideModal;
