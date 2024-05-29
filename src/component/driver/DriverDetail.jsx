import { Fragment, useState } from "react";
import Details from "./module/Details";
import Picture from "./module/Picture";
import Docs from "./module/Docs";
import Charges from "./module/Charges";
import Templates from "./module/Templates";
import Attributes from "./module/Attributes";
import Styles from "./module/Styles";
import Restrictions from "./module/Restrictions";
import Overrides from "./module/Overrides";
import Drivers from "@/component/driver/module/Drivers.jsx";
import Notes from "./module/Notes";
import Dashboard from "@/component/driver/module/Dashboard";
import AddressSearchModal from "./module/modals/AddressSearchModal";
import AddDocumentsModal from "./module/modals/AddDocumentsModal";
import ChargesModal from "./module/modals/ChargesModal";
import DriverChargesTemplateModal from "./module/modals/DriverChargesTemplateModal";
import RestrictionModal from "./module/modals/RestrictionModal";
import OverrideModal from "./module/modals/OverrideModal";
import VehicleModal from "./module/modals/VehicleModal";
import { useDispatch, useSelector } from "react-redux";
import InviteCode from "./module/modals/InviteCode";
import ColorPicker from "./module/ColorPicker";
import Rooster from "./module/modals/Rooster";
import RoosterDetail from "./module/modals/RoosterDetail";
import FooterMain from "./module/modals/modalcomponent/FooterMain";
import { onShowModal } from "@/actions";
import Reason from "./module/modals/Reason";
import DetailHead from "./module/modals/modalcomponent/DetailHead";
import VehicleDetail from "../vehicle/VehicleDetail";

function DriverDetail() {
  const [detail, setDetail] = useState({
    id: 0,
    tag: "Details",
  });
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const options = [
    "Details",
    "Picture",
    "Docs",
    "Charges",
    "Templates",
    "Styles",
    "Attributes",
    "Restrictions",
    "Overrides",
    "Drives",
    "Notes",
    "Dashboard",
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
      <div className="driver__detail--container">
        <div className="driver__detail--top">
          <h2>Driver Detail</h2>

          <DetailHead options={options} detail={detail} setDetail={setDetail} />
        </div>
        <div style={{ height: "600px" }}>
          {(() => {
            switch (detail.tag) {
              case "Details":
                return <Details onOpenModal={onOpenModal} />;
              case "Picture":
                return <Picture />;
              case "Docs":
                return <Docs onOpenModal={onOpenModal} />;
              case "Charges":
                return <Charges onOpenModal={onOpenModal} />;
              case "Templates":
                return <Templates />;
              case "Styles":
                return <Styles />;
              case "Attributes":
                return <Attributes />;
              case "Restrictions":
                return <Restrictions onOpenModal={onOpenModal} />;
              case "Overrides":
                return <Overrides onOpenModal={onOpenModal} />;
              case "Drives":
                return <Drivers onOpenModal={onOpenModal} />;
              case "Notes":
                return <Notes />;
              case "Dashboard":
                return <Dashboard />;
              default:
                break;
            }
          })()}

          {(() => {
            switch (modal?.main?.child) {
              case "address":
                return <AddressSearchModal />;
              case "document":
                return <AddDocumentsModal />;
              case "vehicleproperties":
                return (
                  <Fragment>
                    <VehicleDetail />
                    {(() => {
                      switch (modal.main.grandChild) {
                        case "display":
                          return <ColorPicker />;
                        case "document":
                          return <AddDocumentsModal />;
                        default:
                          break;
                      }
                    })()}
                  </Fragment>
                );
              case "charges":
                return (
                  <Fragment>
                    <ChargesModal />
                    {(() => {
                      switch (modal.main.grandChild) {
                        case "templates":
                          return <DriverChargesTemplateModal />;

                        default:
                          break;
                      }
                    })()}
                  </Fragment>
                );
              case "templates":
                return <DriverChargesTemplateModal />;
              case "restrictions":
                return <RestrictionModal />;
              case "overrides":
                return <OverrideModal />;
              case "vehicle":
                return <VehicleModal />;
              case "invitecode":
                return <InviteCode />;
              case "reason":
                return <Reason />;
              case "display":
                return <ColorPicker />;
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

export default DriverDetail;
