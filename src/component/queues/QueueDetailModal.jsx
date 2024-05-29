import { DriverLimitIcon, LeadTimeIcon, MethodIcon } from "@/assets/svg/Svg";
import PropTypes from "prop-types";
import Input from "@/component/form/Input";

function QueueDetailModal({ onOpenModal }) {
  return (
    <div className="detail__middle">
      <div className="detail__top--form">
        <Input
          label="Queue Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="BARKING"
          type="text"
          id="queuename"
          visibility="visible"
        />
        <Input
          label="Location"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="BARKING"
          type="text"
          id="location"
          visibility="visible"
        />
        <Input
          label="Radius (m)"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="1729"
          type="text"
          id="radius"
          visibility="visible"
        />
        <Input
          label="NGR East"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="544902"
          type="text"
          id="ngreast"
          visibility="visible"
        />
        <Input
          label="NGR North"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="184625"
          type="text"
          id="ngrnorth"
          visibility="visible"
        />
        <Input
          label="Lead Time Centre NGR E"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="544902"
          type="text"
          id="leadtime"
          visibility="visible"
        />
        <Input
          label="Lead Time Centre NGR N"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="184625"
          type="text"
          id="leadtimecenter"
          visibility="visible"
        />
        <div className="col-3">
          <div className="detail__input">
            <div className="detail__input--group three--roaster__button">
              <div
                className="leadtime--center "
                onClick={() => onOpenModal("rooster")}
              >
                <LeadTimeIcon />
                Lead Time
              </div>
              <div
                className="leadtime--center"
                onClick={() => onOpenModal("rooster")}
              >
                <DriverLimitIcon />
                Driver Limits
              </div>
              <div
                className="leadtime--center"
                onClick={() => onOpenModal("rooster")}
              >
                <MethodIcon />
                Method
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
QueueDetailModal.propTypes = {
  onOpenModal: PropTypes.func,
};
export default QueueDetailModal;
