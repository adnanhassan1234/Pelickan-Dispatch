import Header from "../modalcomponent/Header";
import Footer from "../modalcomponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";

function SpecificLogs() {
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
        <Header title="Find Log Entry" />
        <div className="search__middle generic__middle">
          <Input
            label="Please enter the phrases to find"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter the phrases"
            type="text"
            id="specificlogs"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default SpecificLogs;
