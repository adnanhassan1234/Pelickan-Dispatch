import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Header from "@/component/driver/module/modals/modalcomponent/Header";

import Input from "@/component/form/Input";

function DisplayName() {
  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Display Name" />
        <div className="generic__middle displayname__middle">
          {/* <div className="scenario__middle--top"> */}
          <Input
            label="Display Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter display name"
            type="text"
            id="displayname"
            visibility="visible"
          />
          <Footer />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default DisplayName;
