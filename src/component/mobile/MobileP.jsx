import PropTypes from "prop-types";
import Input from "@/component/form/Input";
function MobileP({ onOpenModal }) {
  return (
    <div className="detail__middle">
      <div className="vdetail__top--form">
        <Input
          label="Device Type"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="115"
          type="text"
          id="devicetype"
          visibility="visible"
        />
        <Input
          label="IMEI"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Inactive"
          type="text"
          id="imei"
          visibility="visible"
        />
        <Input
          label="Serial Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="39BBE5D7-7DC8-47D6-8E99-664E2EB12267"
          type="text"
          id="serialnumber"
          visibility="visible"
        />
        <Input
          label="Pelickan Software"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="cPAQ 2.37.3 - 2023/10/29"
          type="text"
          id="pelickansoftware"
          visibility="visible"
        />
        <Input
          label="Navigator Software"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Ios 16.4.1"
          type="text"
          id="navigatorsodtware"
          visibility="visible"
        />
        <div className="detail__input col-4">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows="4" cols="60"></textarea>
        </div>
      </div>
      {/* <hr className="line" /> */}
    </div>
  );
}
MobileP.propTypes = {
  onOpenModal: PropTypes.func,
};
export default MobileP;
