import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";
import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";

function FindOperator() {
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
        <Header title="Find Operator" />
        <div className="search__middle generic__middle">
          <span className="example__text--second">
            Please Enter as much information as you can:
          </span>
          <Input
            label="User Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter user name"
            type="text"
            id="username"
            visibility="visible"
          />
          <Input
            label="Full Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter full name"
            type="text"
            id="fullname"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default FindOperator;
