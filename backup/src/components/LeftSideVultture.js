import React from "react";
import Logo from "../images/logo.svg";
import vLogo from "../images/V_logo.png";
import dashboard from "../images/dashboard.png";
import { useDispatch } from "react-redux";
import { logOut } from "../reducer/auth";
import { useNavigate } from "react-router-dom";

function LeftSideVultture({
  leftSeideVulCom,
  setLeftSideVulCom,
  setLeftSideVulIcon,
  leftSeideVulIcon,
  setRightDashboardVul,
  setDriversTab,
  setVehiclesTab,
  setDictionaryTab,
  setGlobalTab,
  setDocumentTab,
  setShowDiscountOffer,
  setShowPickupCharges,
  setShowBookings,
  setShowFixAndmilageFare,
  setShowMileagefare,
  setShowFixfare,
  setShowUser,
  setShowDynamicPage,
  setShowMileageCalculator,
  setShowDayHirePricing,
  setShowDropOffCharges,
  setShowCongestionZoneCharges,
  setVehicleType,
  setThreshold,
  setNightCharges,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showVultureComplete = () => {
    setLeftSideVulCom(false);
    setLeftSideVulIcon(true);
  };

  const showVultureIconSide = () => {
    setLeftSideVulIcon(false);
    setLeftSideVulCom(true);
  };
  const showSpecficTab = (e) => {
    if (e.target.innerText === "Dashboard") {
      console.log("Dashboard");
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setRightDashboardVul(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Vehicles") {
      console.log("Vehicles");
      setRightDashboardVul(false);
      setDriversTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setVehiclesTab(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Drivers") {
      console.log("Drivers");
      setRightDashboardVul(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setDriversTab(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Discount offers") {
      console.log("Discount offers");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowPickupCharges(false);
      setShowBookings(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowDiscountOffer(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Pickup charges") {
      console.log("Pickup charges");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowPickupCharges(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Fare %") {
      console.log("fare %");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowPickupCharges(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowFixAndmilageFare(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Documents") {
      console.log("Dcument");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setGlobalTab(false);
      setDictionaryTab(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setDocumentTab(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Global") {
      console.log("global");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setShowBookings(false);
      setDictionaryTab(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setGlobalTab(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Dictionary") {
      console.log("dictionary");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowBookings(false);
      setShowPickupCharges(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setDictionaryTab(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Bookings") {
      console.log("Bookings");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowBookings(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Mileage Fare") {
      console.log("Mileage fare");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowMileagefare(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Fix Fare") {
      console.log("Fix fare");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowFixfare(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "User") {
      console.log("User");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowUser(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Dynamic Page") {
      console.log("Dynamic Page");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowDynamicPage(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Mileage Calculator") {
      console.log("Mileage Calculator");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowMileageCalculator(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Day Hire Pricing") {
      console.log("Day Hire Pricing");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setShowDayHirePricing(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Drop Off Charges") {
      console.log("Drop Off Charges");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowCongestionZoneCharges(false);
      setShowDropOffCharges(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Congestion Charges") {
      console.log("Congestion Charges");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(true);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(false);
    } else if (e.target.innerText === "Vehicles Type") {
      console.log("Vehicles Type");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setVehicleType(true);
      setNightCharges(false);
    } else if (e.target.innerText === "Threshold") {
      console.log("Threshold");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setVehicleType(false);
      setThreshold(true);
      setNightCharges(false);
    } else if (e.target.innerText === "Night Charges") {
      console.log("Night Charges");
      setRightDashboardVul(false);
      setDriversTab(false);
      setVehiclesTab(false);
      setDocumentTab(false);
      setGlobalTab(false);
      setShowBookings(false);
      setShowDiscountOffer(false);
      setShowPickupCharges(false);
      setDictionaryTab(false);
      setShowFixAndmilageFare(false);
      setShowBookings(false);
      setShowMileagefare(false);
      setShowFixfare(false);
      setShowUser(false);
      setShowDynamicPage(false);
      setShowMileageCalculator(false);
      setShowDayHirePricing(false);
      setShowDropOffCharges(false);
      setShowCongestionZoneCharges(false);
      setVehicleType(false);
      setThreshold(false);
      setNightCharges(true);
    }
  };
  const logoutCurrentPerson = () => {
    dispatch(logOut());
    navigate("/login");
  };
  const showTabsData = (e) => {
    console.log(e.target.id);
  };
  return (
    <>
      {leftSeideVulCom && (
        <div className="leftSideDivVultture">
          <img
            src={Logo}
            alt="vultture logo"
            style={{ marginTop: "20px", width: "170px", marginBottom: "20px" }}
          />
          <div className="iconsArrow" onClick={showVultureComplete}>
            <i className="fa-solid fa-circle-chevron-down rotateIcon"></i>
          </div>
          <div className="tabsInnerDiv">
            <div className="commonVulttureDiv">
              <img
                src={dashboard}
                alt="dashboard"
                className="dashBoardLblIcon"
              />
              <label className="vulttureLbl" id="dash" onClick={showSpecficTab}>
                Dashboard
              </label>
            </div>
            {/* <div className="commonVulttureDiv">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Vehicles
              </label>
            </div> */}
            <div className="commonVulttureDiv">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Vehicles Type
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Threshold
              </label>
            </div>
            {/* <div className="commonVulttureDiv">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Drivers
              </label>
            </div> */}

            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Mileage Calculator
              </label>
            </div>
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Day Hire Pricing
              </label>
            </div> */}
            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Drop Off Charges
              </label>
            </div>
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Member Disount
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Pricing
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Members
              </label>
            </div> */}
            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Congestion Charges
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Night Charges
              </label>
            </div>
            <div className="commonVulttureDiv">
              <img
                src={dashboard}
                alt="dashboard"
                className="dashBoardLblIcon"
              />
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Pickup charges
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Bookings
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Fare %
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Mileage Fare
              </label>
            </div>
            <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Fix Fare
              </label>
            </div>
            {/* <div className="commonVulttureDiv">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Discount offers
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl">Privileges</label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                User
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Dynamic Page
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
              <label className="vulttureLbl">Payment Setting</label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-sharp fa-solid fa-file leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Documents
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-solid fa-globe leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Global
              </label>
            </div> */}
            {/* <div className="commonVulttureDiv">
              <i className="fa-solid fa-spell-check leftSideIcondesign"></i>
              <label className="vulttureLbl" onClick={showSpecficTab}>
                Dictionary
              </label>
            </div> */}
          </div>
          <div className="logoutdiv">
            <i className="fa-solid fa-right-from-bracket"></i>
            <button className="logoutBtn" onClick={logoutCurrentPerson}>
              Logout
            </button>
          </div>
        </div>
      )}

      {leftSeideVulIcon && (
        <div className="leftSideDivVulttureIcons">
          <img
            src={vLogo}
            alt="vultture logo"
            style={{ marginTop: "20px", width: "60px", marginBottom: "20px" }}
          />
          <div className="iconsArrow" onClick={showVultureIconSide}>
            <i className="fa-solid fa-circle-chevron-down rotateIconOfIcons"></i>
          </div>
          <div className="tabsInnerDiv">
            <div className="commonVulttureDivIcons">
              <img
                src={dashboard}
                alt="dashboard"
                style={{ width: "17px", height: "17px", marginRight: "3px" }}
                id="dashboardIcon"
                onClick={showTabsData}
              />
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
            </div>

            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-car leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-regular fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-chart-line leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-user leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-sharp fa-solid fa-file leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-globe leftSideIcondesign"></i>
            </div>
            <div className="commonVulttureDivIcons">
              <i className="fa-solid fa-spell-check leftSideIcondesign"></i>
            </div>
          </div>
          <i
            className="fa-solid fa-right-from-bracket logoutIconForIconsDiv"
            onClick={logoutCurrentPerson}
          ></i>
        </div>
      )}
    </>
  );
}

export default LeftSideVultture;
