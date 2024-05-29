import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import Input from "@/component/form/Input";
import Header from "../../driver/module/modals/modalcomponent/Header";
import Footer from "../../driver/module/modals/modalcomponent/Footer";

function ShortcutSearch() {
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
        <Header title="Find Address Shouctcut" />
        <div className="search__middle generic__middle">
          <span className="example__text--second">
            Please enter as much information as you can:
          </span>
          <Input
            label="Shortcut"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter shortcut"
            type="text"
            id="shortcut"
            visibility="visible"
          />
          <Input
            label="Display Address"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="enter display address"
            type="text"
            id="displayaddress"
            visibility="visible"
          />
        </div>
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default ShortcutSearch;
