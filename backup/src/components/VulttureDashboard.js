import React, { useState } from "react";
import LeftSideVultture from "./LeftSideVultture";
import RightDashboardVultture from "./RightDashboardVultture";
import Drivers from "../pages/driver/Drivers";
import Vehicles from "../pages/vehicle/Vehicles";
import Document from "../pages/documents/Document";
import Global from "../pages/globalSetting/Global";
import Dictionary from "../pages/dictionarySetting/Dictionary";
import DiscountOffer from "../pages/discountOffer/DiscountOffer";
import PickupCharges from "../pages/pickupcharges/PickupCharges";
import Bookings from "../pages/bookings/Bookings";
import FixAndMilagefare from "../pages/farePercentage/FixAndMilagefare";
import MileageFare from "../pages/mileageFare/MileageFare";
import FixFare from "../pages/fixFare/FixFare";
import User from "../pages/user/User";
import DynamicPage from "../pages/dynamicPages/DynamicPage";
import MileageCal from "../pages/mileageCalCulator/MileageCal";
import { DayHirePricing } from "../pages/dayHirePricing/DayHirePricing";
import DropOffCharges from "../pages/dropOffCharges/DropOffCharges";
import CongestionZoneCharges from "../pages/congestionZonecharges/CongestionZoneCharges";
import VehicleType from "../pages/VehicleType/VehicleType";
import Threshold from "../pages/Treshold/Threshold";
import NightCharges from "../pages/nightCharges/NightCharges";

function VulttureDashboard() {
  const [leftSeideVulIcon, setLeftSideVulIcon] = useState(true);
  const [leftSeideVulCom, setLeftSideVulCom] = useState(false);
  const [rightDashboardVul, setRightDashboardVul] = useState(true);
  const [showVehiclesTab, setVehiclesTab] = useState(false);
  const [showDriversTab, setDriversTab] = useState(false);
  const [showDocumentTab, setDocumentTab] = useState(false);
  const [showGlobalTab, setGlobalTab] = useState(false);
  const [showDictionaryTab, setDictionaryTab] = useState(false);
  const [showDiscountOffer, setShowDiscountOffer] = useState(false);
  const [showPickupCharges, setShowPickupCharges] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showFixAndmilageFare, setShowFixAndmilageFare] = useState(false);
  const [showMileagefare, setShowMileagefare] = useState(false);
  const [showFixfare, setShowFixfare] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showDynamicPage, setShowDynamicPage] = useState(false);
  const [showMileageCalculator, setShowMileageCalculator] = useState(false);
  const [showDayHirePricing, setShowDayHirePricing] = useState(false);
  const [showDropOffCharges, setShowDropOffCharges] = useState(false);
  const [showCongestionZoneCharges, setShowCongestionZoneCharges] =
    useState(false);
  const [vehicleType, setVehicleType] = useState(false);
  const [threshold, setThreshold] = useState(false);
  const [nightCharges, setNightCharges] = useState(false);

  return (
    <div className="mainVulttureDiv">
      <div className="vulttureInnerDiv">
        <LeftSideVultture
          leftSeideVulCom={leftSeideVulCom}
          leftSeideVulIcon={leftSeideVulIcon}
          setLeftSideVulCom={setLeftSideVulCom}
          setLeftSideVulIcon={setLeftSideVulIcon}
          setRightDashboardVul={setRightDashboardVul}
          setVehiclesTab={setVehiclesTab}
          setDriversTab={setDriversTab}
          setDocumentTab={setDocumentTab}
          setGlobalTab={setGlobalTab}
          setDictionaryTab={setDictionaryTab}
          setShowDiscountOffer={setShowDiscountOffer}
          setShowPickupCharges={setShowPickupCharges}
          setShowBookings={setShowBookings}
          setShowFixAndmilageFare={setShowFixAndmilageFare}
          setShowMileagefare={setShowMileagefare}
          setShowFixfare={setShowFixfare}
          setShowUser={setShowUser}
          setShowDynamicPage={setShowDynamicPage}
          setShowMileageCalculator={setShowMileageCalculator}
          setShowDayHirePricing={setShowDayHirePricing}
          setShowDropOffCharges={setShowDropOffCharges}
          setShowCongestionZoneCharges={setShowCongestionZoneCharges}
          setVehicleType={setVehicleType}
          setThreshold={setThreshold}
          setNightCharges={setNightCharges}
        />
        <RightDashboardVultture rightDashboardVul={rightDashboardVul} />
        <Drivers showDriversTab={showDriversTab} />
        <Vehicles showVehiclesTab={showVehiclesTab} />
        <Document showDocumentTab={showDocumentTab} />
        <Global showGlobalTab={showGlobalTab} />
        <Dictionary showDictionaryTab={showDictionaryTab} />
        <DiscountOffer showDiscountOffer={showDiscountOffer} />
        <PickupCharges showPickupCharges={showPickupCharges} />
        <Bookings showBookings={showBookings} />
        <FixAndMilagefare showFixAndmilageFare={showFixAndmilageFare} />
        <MileageFare showMileagefare={showMileagefare} />
        <FixFare showFixfare={showFixfare} />
        <User showUser={showUser} />
        <DynamicPage showDynamicPage={showDynamicPage} />
        <MileageCal showMileageCalculator={showMileageCalculator} />
        <DayHirePricing showDayHirePricing={showDayHirePricing} />
        <DropOffCharges showDropOffCharges={showDropOffCharges} />
        <CongestionZoneCharges
          showCongestionZoneCharges={showCongestionZoneCharges}
        />
        <VehicleType vehicleTypeAll={vehicleType} />
        <Threshold vThreshold={threshold} />
        <NightCharges vNightCharges={nightCharges} />
      </div>
    </div>
  );
}

export default VulttureDashboard;
