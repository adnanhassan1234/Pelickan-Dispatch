import Select from "@/component/form/Select";
import Header from "../modalcomponent/Header";
import Footer from "../modalcomponent/Footer";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";

function DriversLog() {
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
        <Header title="Driver" />
        <div className="search__middle generic__middle">
          <Select
            label="Please select an Driver"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            data={[]}
            id="driverslog"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default DriversLog;
