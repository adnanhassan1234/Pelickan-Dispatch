import React, { useState } from "react";
import VulttureCards from "./VulttureCards";
import VulttureNav from "./VulttureNav";
import VisitorsClients from "./VisitorsClients";
import RecentEmails from "./RecentEmails";

const RightDashboardVultture = ({ rightDashboardVul }) => {
  const [hideFiveCard, setHideFivecard] = useState(true);
  const [shortNotificationMenu, setShortNotificationMenu] = useState(true);
  const [bigNotificationMenu, setBigNotificationMenu] = useState(false);
  const [annualVisitorsSmallCard, setAnnualVisitorsSmallCard] = useState(true);
  const [annualVisitorsLargeCard, setAnnualVisitorsLargeCard] = useState(false);
  const [annualVisitorsAnnounecmentCard, setAnnualVisitorsAnnounecmentCard] =
    useState(true);
  const [showReccentEmail, setShowReccentEmail] = useState(true);
  const [showSmallPieChart, setShowSmallPieChart] = useState(true);
  const [showBigPieChart, setShowBigPieChart] = useState(false);
  const [showRecentEmainAnouncement, setShowRecentEmainAnouncement] =
    useState(false);
  return (
    <>
      {rightDashboardVul && (
        <div className="rightSideVulttureDiv">
          <VulttureNav
            shortNotificationMenu={shortNotificationMenu}
            setShortNotificationMenu={setShortNotificationMenu}
            bigNotificationMenu={bigNotificationMenu}
            setBigNotificationMenu={setBigNotificationMenu}
            setHideFivecard={setHideFivecard}
            setAnnualVisitorsSmallCard={setAnnualVisitorsSmallCard}
            setAnnualVisitorsLargeCard={setAnnualVisitorsLargeCard}
            setAnnualVisitorsAnnounecmentCard={
              setAnnualVisitorsAnnounecmentCard
            }
            setShowReccentEmail={setShowReccentEmail}
            setShowSmallPieChart={setShowSmallPieChart}
            setShowBigPieChart={setShowBigPieChart}
            setShowRecentEmainAnouncement={setShowRecentEmainAnouncement}
          />
          <VulttureCards hideFiveCard={hideFiveCard} />
          <VisitorsClients
            annualVisitorsSmallCard={annualVisitorsSmallCard}
            annualVisitorsLargeCard={annualVisitorsLargeCard}
            annualVisitorsAnnounecmentCard={annualVisitorsAnnounecmentCard}
          />
          <RecentEmails
            showReccentEmail={showReccentEmail}
            showSmallPieChart={showSmallPieChart}
            showBigPieChart={showBigPieChart}
            showRecentEmainAnouncement={showRecentEmainAnouncement}
          />
        </div>
      )}
    </>
  );
};

export default RightDashboardVultture;
