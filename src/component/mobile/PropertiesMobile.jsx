import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import DetailHead from "../driver/module/modals/modalcomponent/DetailHead";
import FooterMain from "../driver/module/modals/modalcomponent/FooterMain";
import MobileP from "./MobileP";
import SimCard from "./SimCard";
import MobileVehicle from "./MobileVehicle";

function PropertiesMobile() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Mobile",
  });
  const dispatch = useDispatch();
  const options = ["Mobile", "SIM Card", "Vehicle"];
  const { cPosition } = useSelector((state) => state.modal) || 0;

  const onOpenModal = (tag) => {
    dispatch(onShowModal(tag, cPosition + 1));
  };

  return (
    <div
      className="driver__main"
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="driver__detail--container mobile--container">
        <div className="driver__detail--top">
          <h2>Mobile Properties</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "490px" }}>
          {(() => {
            switch (detail.tag) {
              case "Mobile":
                return <MobileP onOpenModal={onOpenModal} />;
              case "SIM Card":
                return <SimCard />;
              case "Vehicle":
                return <MobileVehicle onOpenModal={onOpenModal} />;

              default:
                break;
            }
          })()}
        </div>
        <hr className="line-bottom" />
        <FooterMain />
      </div>
    </div>
  );
}

export default PropertiesMobile;
