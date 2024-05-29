import Input from "@/component/form/Input";
import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";

function SearchItems() {
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="search__modal">
        <Header title="Lost & Found Search" />
        <div className="search__middle">
          <span className="example__text--second">
            Please Enter as much information as you can:{" "}
          </span>
          <Input
            label="Driver ID"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Driver ID"
            type="text"
            id="driverid"
            visibility="visible"
          />
          <span className="example__text--second center">OR</span>
          <Input
            label="Job Number"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Job Number"
            type="text"
            id="jobnumber"
            visibility="visible"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchItems;
