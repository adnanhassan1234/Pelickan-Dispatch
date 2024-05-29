import Select from "@/component/form/Select";
import Header from "../modalcomponent/Header";
import Footer from "../modalcomponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";

function ChangeFleetModal() {
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
        <Header title="Change Fleet" />
        <div className="search__middle generic__middle">
          <Select
            label="Move vehicles into the fleet..."
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            data={[]}
            id="changefleet"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default ChangeFleetModal;
