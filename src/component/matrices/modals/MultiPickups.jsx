import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import { useRef } from "react";
import roosterData from "@/multipickup.json";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModal } from "@/actions";
import PropTypes from "prop-types";
import MultiTripRooster from "@/component/rooster/MultiTripRooster";

function MultiPickups({ onOpenModal }) {
  const tabelRef = useRef([]);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  console.log(roosterData);
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
        <Header title="Multi-Pickup Trips" />
        <div className="generic__middle multitrip_middle">
          <MultiTripRooster tabelRef={tabelRef} data={roosterData} />
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
MultiPickups.propTypes = {
  onOpenModal: PropTypes.func,
};
export default MultiPickups;
