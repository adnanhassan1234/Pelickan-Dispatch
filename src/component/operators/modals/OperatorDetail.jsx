import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import DetailHead from "@/component/driver/module/modals/modalcomponent/DetailHead";
import FooterMain from "@/component/driver/module/modals/modalcomponent/FooterMain";
import PDetails from "./PDetails";
import Privileges from "./Privileges";
import EventFilter from "./EventFilter";
import Reports from "./Reports";
import Fleets from "./Fleets";
import Accounts from "./Accounts";

function OperatorDetail() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Details",
  });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const options = [
    "Details",
    "Privileges",
    "Accounts",
    "Event Filter",
    "Reports",
    "Fleets",
  ];
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
      <div className="driver__detail--container operator__detail--container">
        <div className="driver__detail--top">
          <h2>Operators Properties</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "563px" }}>
          {(() => {
            switch (detail.tag) {
              case "Details":
                return <PDetails onOpenModal={onOpenModal} />;
              case "Privileges":
                return <Privileges />;
              case "Accounts":
                return <Accounts onOpenModal={onOpenModal} />;
              case "Event Filter":
                return <EventFilter />;
              case "Reports":
                return <Reports />;
              case "Fleets":
                return <Fleets />;

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

export default OperatorDetail;
