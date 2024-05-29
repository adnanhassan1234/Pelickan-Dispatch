import Header from "../modalcomponent/Header";
import Footer from "../modalcomponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";

function FindVehicleModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const onSubmit = () => {
    dispatch(onShowModal("alllogs", modal.cPosition + 1));
  };
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="search__modal generic__modal">
        <Header title="Find" />
        <div className="search__middle generic__middle">
          <span className="example__text--second">
            Please enter as much information as you can:
          </span>
          <Input
            label="Vehicle Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter vehicle name"
            type="text"
            id="vehiclename"
            visibility="visible"
          />
          <Input
            label="Registration"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter registration"
            type="text"
            id="registration"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default FindVehicleModal;
