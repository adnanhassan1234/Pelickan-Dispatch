import { useEffect, useState } from "react";
import Options from "./modals/Options";
import {
  EarningOrange,
  PaymentOrange,
  PinOrange,
  PointsOrange,
  RattingOrange,
  StatsOrange,
  UserOrange,
} from "@/assets/svg/Svg";
import Details from "./dashboard/Details";
import Payment from "./dashboard/Payment";
import SelfAllocated from "./dashboard/SelfAllocated";
import Earnings from "./dashboard/Earnings";
import Points from "./dashboard/Points";
import Stats from "./dashboard/Stats";
import Ratings from "./dashboard/Ratings";
function Dashboard() {
  const [dropDown, setDropDown] = useState({
    state: false,
    value: "Details",
  });
  const data = [
    {
      title: "Details",
      icon: <UserOrange />,
    },
    {
      title: "Earnings",
      icon: <EarningOrange />,
    },
    {
      title: "Points",
      icon: <PointsOrange />,
    },
    {
      title: "Stats",
      icon: <StatsOrange />,
    },
    {
      title: "Ratings",
      icon: <RattingOrange />,
    },
    {
      title: "Payments",
      icon: <PaymentOrange />,
    },
    {
      title: "Self Alloc Jobs",
      icon: <PinOrange />,
    },
  ];

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setDropDown((prevState) => ({
        ...prevState,
        state: false,
      }));
    });
  }, []);
  return (
    <div className="dashboard__container--driver">
      <div className="dashboard__nav--driver">
        <div className="nav__right">
          <i
            className="fa-solid fa-bars"
            style={{ cursor: "pointer" }}
            onClick={() => setDropDown({ ...dropDown, state: !dropDown.state })}
          ></i>
          <h3>Driver Dashboard</h3>
        </div>
        <span>{dropDown.value}</span>
        {dropDown.state && <Options setDropDown={setDropDown} data={data} />}
      </div>
      <div style={{ height: "760px" }}>
        {(() => {
          switch (dropDown.value) {
            case "Details":
              return <Details />;
            case "Payments":
              return <Payment />;
            case "Self Alloc Jobs":
              return <SelfAllocated />;
            case "Earnings":
              return <Earnings />;
            case "Points":
              return <Points />;
            case "Stats":
              return <Stats />;
            case "Ratings":
              return <Ratings />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Dashboard;
