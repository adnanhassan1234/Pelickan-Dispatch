import PropTypes from "prop-types";
import Input from "@/component/form/Input";
function DetailsZoneModal({ onOpenModal }) {
  return (
    <div className="detail__middle">
      <div className="vdetail__top--form">
        <Input
          label="Charge Zone Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="City oF London"
          type="text"
          id="chargezonename"
          visibility="visible"
        />
      </div>
      {/* <hr className="line" /> */}
    </div>
  );
}
DetailsZoneModal.propTypes = {
  onOpenModal: PropTypes.func,
};
export default DetailsZoneModal;
