import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";
import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";

function OperatorPassword() {
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
        <Header title="Operator Password" />
        <div className="search__middle generic__middle">
          <Input
            label="New Password"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter new password"
            type="text"
            id="newpassword"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default OperatorPassword;
