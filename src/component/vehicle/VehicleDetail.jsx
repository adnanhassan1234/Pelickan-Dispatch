import { useState } from "react";
import ColorPicker from "../driver/module/ColorPicker";

import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import FooterMain from "../driver/module/modals/modalcomponent/FooterMain";
import DetailHead from "../driver/module/modals/modalcomponent/DetailHead";
import VDetails from "./screens/VDetails";
import VDocuments from "./screens/VDocuments";
import AddDocumentsModal from "../driver/module/modals/AddDocumentsModal";
import PDA from "./screens/PDA";
import VAttributes from "./screens/VAttributes";

function VehicleDetail() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Details",
  });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const options = ["Details", "PDA", "Documents", "Attributes"];
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
      <div className="driver__detail--container">
        <div className="driver__detail--top">
          <h2>Vehicle Detail</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "563px" }}>
          {(() => {
            switch (detail.tag) {
              case "Details":
                return <VDetails onOpenModal={onOpenModal} />;
              case "PDA":
                return <PDA />;
              case "Documents":
                return <VDocuments onOpenModal={onOpenModal} />;
              case "Attributes":
                return <VAttributes />;

              default:
                break;
            }
          })()}

          {(() => {
            switch (modal?.main?.child) {
              case "document":
                return <AddDocumentsModal />;

              case "display":
                return <ColorPicker />;
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

export default VehicleDetail;
