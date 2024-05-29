import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Select from "@/component/form/Select";
import InputLabel from "@/component/form/InputLabel";
import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Rooster from "@/component/rooster/Rooster";
import { useRef } from "react";
import roosterData from "@/pickups.json";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModal } from "@/actions";
import PropTypes from "prop-types";

function MatricesProperties({ onOpenModal }) {
  const tabelRef = useRef([]);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const docType = [
    {
      name: "Driving License No",
      value: "drivinglicenseno",
    },
    {
      name: "CRB/Disclosure",
      value: "crb-disclosure",
    },
    {
      name: "Special Document No",
      value: "specialdocumentno",
    },
    {
      name: "PCO Certificate No",
      value: "pcocertificateno",
    },
  ];
  const onSubmit = () => {
    const notAvail = tabelRef.current.querySelectorAll(".rooster__notavailble");

    const data = roosterData.map((pick) => ({
      pickup: pick.pickup,
      destinations: pick.destinations.map((dest) => ({
        destination: dest.destination,
        price: dest.price,
        status: ![...notAvail].some(
          (itm) =>
            itm?.getAttribute("data-pickup") === pick.pickup &&
            itm?.getAttribute("data-destination") === dest.destination
        ),
      })),
    }));
    console.log(data);
  };
  const onCancel = () => {
    dispatch(onCloseModal(modal.cPosition));
  };
  return (
    <div className="modal__container" onMouseDown={(e) => e.stopPropagation()}>
      <div className="generic__modal">
        <Header title="Matrices" />
        <div className="generic__middle matrices__middle">
          <InputLabel
            label="Matrix Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            type="text"
            id="Matrix Name"
            placeholder="10_Seater Company Price"
            labelText="Multi-Pickups"
            visibility="visible"
          />
          <div className="templates__modal--input--2">
            <div className="templates__modal--grid">
              <Select
                label="Status"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                data={docType}
                id="status"
                visibility="visible"
              />
              <Select
                label="Charged By"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                data={docType}
                type="text"
                id="chargedby"
                visibility="visible"
              />
              <CheckBoxSingle
                label="Charge For First Leg Only"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="cfflo"
              />
              <CheckBoxSingle
                label="Allow Reverse Matching"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="allowreversematching"
              />
            </div>
          </div>
          <div className="templates__modal--input--2">
            <h3>Multi-Pickup Matching Rules</h3>
            <div className="matrices__check">
              <CheckBoxSingle
                label="Do not Allow multi-pickup chaining"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="donotallowmultipickupchaining"
              />
              <CheckBoxSingle
                label="Strict multi-pickup chaining (all legs of the job must match the Matrix)"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="smpcalotjmmtm"
              />
              <CheckBoxSingle
                label="Flexible multi-pickup chaining (all matching legs of the job are read from the Matrix and the non-matching ones are set to zero)"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="flmpc"
              />
            </div>
          </div>
          <div className="matrices__buttons">
            <button onClick={() => onOpenModal("pickup")}>Pickup</button>
            <button onClick={() => onOpenModal("destination")}>
              Destination
            </button>
          </div>
          <Rooster tabelRef={tabelRef} data={roosterData} />
        </div>
        <hr className="line-bottom" />

        <Footer
          onSubmit={onSubmit}
          buttons={[
            {
              title: "Cancel",
              event: onCancel,
            },
            {
              title: "OK",
              event: onSubmit,
            },
          ]}
        />
      </div>
    </div>
  );
}
MatricesProperties.propTypes = {
  onOpenModal: PropTypes.func,
};
export default MatricesProperties;
