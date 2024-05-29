import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";
import Input from "@/component/form/Input";

function LogModal() {
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="generic__modal log__modal">
        <Header title="Date / Time" />
        <div className="generic__middle">
          <span className="example__text--second">
            Please Enter a Date/Time Range
          </span>
          <div className="log__box">
            <div>
              <span className="example__text--second">From</span>
              <Input
                label="Date"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="date"
                id="fromdate"
                visibility="visible"
              />
              <Input
                label="Time"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="time"
                id="fromtime"
                visibility="visible"
              />
            </div>

            <div>
              <span className="example__text--second">To</span>
              <Input
                label="Date"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="date"
                id="todate"
                placeholder="Start Date"
                visibility="visible"
              />
              <Input
                label="Time"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="time"
                id="totime"
                placeholder="Start Date"
                visibility="visible"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default LogModal;
