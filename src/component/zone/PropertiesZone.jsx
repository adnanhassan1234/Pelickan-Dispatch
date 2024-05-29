import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import DetailHead from "../driver/module/modals/modalcomponent/DetailHead";
import FooterMain from "../driver/module/modals/modalcomponent/FooterMain";
import DetailsZoneModal from "./DetailsZoneModal";

function PropertiesZone() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Details",
  });
  const dispatch = useDispatch();
  const options = ["Details"];
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
      <div className="driver__detail--container Zone--modal__container">
        <div className="driver__detail--top">
          <h2>Charge Zone properties</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "220px" }}>
          {(() => {
            switch (detail.tag) {
              case "Details":
                return <DetailsZoneModal onOpenModal={onOpenModal} />;
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

export default PropertiesZone;
