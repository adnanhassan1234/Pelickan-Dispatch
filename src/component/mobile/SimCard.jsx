import PropTypes from "prop-types";
import Input from "@/component/form/Input";
function SimCard({ onOpenModal }) {
  return (
    <div className="detail__middle">
      <div className="vdetail__top--form">
        <Input
          label="SIM Card [19]"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="115"
          type="text"
          id="simcard19"
          visibility="visible"
        />
        <Input
          label="SIM Card [20]"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder="Inactive"
          type="text"
          id="simcard20"
          visibility="visible"
        />
        <Input
          label="SIM Lock State"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder=""
          type="text"
          id="simlockstate"
          visibility="visible"
        />
        <Input
          label="Telephone Number"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder=""
          type="text"
          id="telenumber"
          visibility="visible"
        />
        <Input
          label="Network Operator"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder=""
          type="text"
          id="networkoperator"
          visibility="visible"
        />
        <Input
          label="Connection Name"
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          placeholder=""
          type="text"
          id="connectionname"
          visibility="visible"
        />
        <div className="detail__input col-4">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows="4" cols="60"></textarea>
        </div>
      </div>
    </div>
  );
}
SimCard.propTypes = {
  onOpenModal: PropTypes.func,
};
export default SimCard;
