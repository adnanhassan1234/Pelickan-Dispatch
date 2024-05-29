import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";
import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";

function FindLocation() {
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
        <Header title="Postcode" />
        <div className="search__middle generic__middle">
          <Input
            label="Please enter a full / partial Postcode"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="SW19 7PQ"
            type="text"
            id="postcode"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default FindLocation;
