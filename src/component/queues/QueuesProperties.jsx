import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import DetailHead from "../driver/module/modals/modalcomponent/DetailHead";
import RoosterDetail from "../driver/module/modals/RoosterDetail";
import FooterMain from "../driver/module/modals/modalcomponent/FooterMain";
import Rooster from "../driver/module/modals/Rooster";
import QueueDetailModal from "./QueueDetailModal";
import QueueDespatchModal from "./QueueDespatchModal";

function QueuesProperties() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Details",
  });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const options = ["Details", "Despatch Queue Order"];
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
          <h2>Queues Properties</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "600px" }}>
          {(() => {
            switch (detail.tag) {
              case "Details":
                return <QueueDetailModal onOpenModal={onOpenModal} />;
              case "despatch_queue_order":
                return <QueueDespatchModal />;
              default:
                break;
            }
          })()}

          {(() => {
            switch (modal?.main?.child) {
              case "rooster":
                return (
                  <Fragment>
                    <Rooster />
                    {(() => {
                      switch (modal?.main?.grandChild) {
                        case "roosterdetail":
                          return <RoosterDetail />;
                        default:
                          break;
                      }
                    })()}
                  </Fragment>
                );

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

export default QueuesProperties;
