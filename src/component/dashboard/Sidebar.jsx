import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import "./sidebar.css";
import {
  // UploadDocuments_icon,
  // DriverDocuments_icon,
  // DayHire_icon,
  // DropOff_icon,
  // DiscountOffer_icon,
  // Privileges_icon,
  // MileageCalculator_icon,
  // PaymentSetting_icon,
  // PickUpCharges_icon,
  // Members_icon,
  // MemberDiscount_icon,
  // Bookings_icon,
  // Pricing_icon,
  // Address_icon,
  // Fleet_icon,
  Dashboard_icon,
  Operators_icon,
  Settings_icon,
  Logout_icon,
  Vehicle_icon,
  Drivers_icon,
  Logs,
  Zone_icon,
  Shortcuts_icon,
  FormulasIcon,
  MatricesIcon,
  QueuesIcon,
  MobileIcon,
  AccountIcon,
  LostFoundIcon,
} from "../../assets/svg/Svg";
import Logo from "@/assets/logo-1.png";
import LogoSecondry from "@/assets/logo1.png";
import { useSelector } from "react-redux";
function Sidebar() {
  const [sidebar, setSidebar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = useSelector((state) => state.redirect.payload);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!redirect) return;
    if (!auth.data.status) {
      navigate(redirect);
      return;
    }
    navigate(location.pathname);
  }, [redirect, navigate, location, auth]);

  const onLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const data = [
    {
      title: "Dashboard",
      icon: <Dashboard_icon />,
      link: "/",
    },
    // {
    //   title: "Call Booker",
    //   icon: <Drivers_icon />,
    //   link: "/call-booker",
    // },
    {
      title: "Drivers",
      icon: <Drivers_icon />,
      link: "/drivers",
    },
    // {
    //   title: "Driver Documents",
    //   icon: <DriverDocuments_icon />,
    //   link: "/driver-documents",
    // },
    // {
    //   title: "Upload Documents",
    //   icon: <UploadDocuments_icon />,
    //   link: "/upload",
    // },
    {
      title: "Logs",
      icon: <Logs />,
      link: "/logs",
    },
    // {
    //   title: "Pricing",
    //   icon: <Pricing_icon />,
    //   link: "/pricing",
    // },

    {
      title: "Vehicles",
      icon: <Vehicle_icon />,
      link: "/vehicles",
    },
    {
      title: "Shortcuts",
      icon: <Shortcuts_icon />,
      link: "/shortcuts",
    },
    // {
    //   title: "Fleet",
    //   icon: <Fleet_icon />,
    //   link: "/fleets",
    // },
    // {
    //   title: "Address",
    //   icon: <Address_icon />,
    //   link: "/address",
    // },
    {
      title: "Operators",
      icon: <Operators_icon />,
      link: "/operators",
    },
    {
      title: "Matrices",
      icon: <MatricesIcon />,
      link: "/matrices",
    },
    {
      title: "Lost & Found",
      icon: <LostFoundIcon />,
      link: "/lost-and-found",
    },
    {
      title: "Queues",
      icon: <QueuesIcon />,
      link: "/queues",
    },
    // {
    //   title: "Discount",
    //   icon: <DiscountOffer_icon />,
    //   link: "/discount",
    // },
    // {
    //   title: "Privileges",
    //   icon: <Privileges_icon />,
    //   link: "/privileges",
    // },
    // {
    //   title: "Milage Calculator",
    //   icon: <MileageCalculator_icon />,
    //   link: "/milage-calculator",
    // },
    // {
    //   title: "Day Hire Pricing",
    //   icon: <DayHire_icon />,
    //   link: "/day-hire-pricing",
    // },
    // {
    //   title: "Pickup Charges",
    //   icon: <PickUpCharges_icon />,
    //   link: "/pickup-charges",
    // },
    // {
    //   title: "Drop off Charges",
    //   icon: <DropOff_icon />,
    //   link: "/drop-off-charges",
    // },
    // {
    //   title: "Members",
    //   icon: <Members_icon />,
    //   link: "/members",
    // },
    // {
    //   title: "Member Discount",
    //   icon: <MemberDiscount_icon />,
    //   link: "/member-discount",
    // },
    // {
    //   title: "Bookings",
    //   icon: <Bookings_icon />,
    //   link: "/bookings",
    // },
    // {
    //   title: "Payment Settings",
    //   icon: <PaymentSetting_icon />,
    //   link: "/payment-setting",
    // },

    {
      title: "Formulas",
      icon: <FormulasIcon />,
      link: "/formulas",
    },
    {
      title: "Account",
      icon: <AccountIcon />,
      link: "/account",
    },
    {
      title: "Mobiles",
      icon: <MobileIcon />,
      link: "/mobiles",
    },
    {
      title: "Zone",
      icon: <Zone_icon />,
      link: "/zone",
    },
    {
      title: "System Parameters",
      icon: <Settings_icon />,
      link: "/system-parameters",
    },
  ];

  return (
    <div
      className={`sidebar  ${!sidebar ? "unshow sidebar__padding--sm" : ""}`}
    >
      <Link to="/" className="logo-wrapper">
        {!sidebar ? (
          <img className="logo__large" src={Logo} alt="Main_Logo" />
        ) : (
          <img className="logo__small" src={LogoSecondry} alt="Main_Logo" />
        )}
      </Link>
      <div className="sidebar__icon">
        <i
          onClick={() => setSidebar(!sidebar)}
          className={`fa-solid fa-circle-chevron-${
            !sidebar ? "left" : "right"
          }`}
        ></i>
      </div>
      <ul className="sidebar-menu">
        {data.map((itm, ind) => (
          <li key={ind}>
            <NavLink
              to={itm.link}
              className="nav-link"
              onClick={() => setSidebar(true)}
            >
              <span title={itm.title} className="icon align-center">
                {itm.icon}
              </span>
              <span style={{ visibility: sidebar ? "hidden" : "visible" }}>
                {itm.title}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="sidebar-menu bottom overflow-none">
        <li>
          <button
            onClick={() => onLogOut()}
            className="btn btn-warning d-flex-row w-100 align-center"
          >
            <span className="icon align-center px-1">
              <Logout_icon />
            </span>
            <span style={{ visibility: sidebar ? "hidden" : "visible" }}>
              Sign Out
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
