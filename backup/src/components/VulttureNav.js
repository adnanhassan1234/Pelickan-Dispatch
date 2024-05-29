import React, { useState } from "react";
import userImg from "../images/profile.jpg";
import Calendar from "moedim";

const VulttureNav = ({
  shortNotificationMenu,
  setShortNotificationMenu,
  bigNotificationMenu,
  setBigNotificationMenu,
  setHideFivecard,
  setAnnualVisitorsSmallCard,
  setAnnualVisitorsLargeCard,
  setAnnualVisitorsAnnounecmentCard,
  setShowReccentEmail,
  setShowSmallPieChart,
  setShowBigPieChart,
  setShowRecentEmainAnouncement,
}) => {
  const [value, setValue] = useState(new Date());
  console.log(value);

  const showBigNotificationMenu = () => {
    setShortNotificationMenu(false);
    setHideFivecard(false);
    setAnnualVisitorsSmallCard(false);
    setAnnualVisitorsAnnounecmentCard(false);
    setShowReccentEmail(false);
    setShowSmallPieChart(false);
    setShowRecentEmainAnouncement(true);
    setShowBigPieChart(true);
    setAnnualVisitorsLargeCard(true);
    setBigNotificationMenu(true);
  };
  const showSmallNotificationMenu = () => {
    setBigNotificationMenu(false);
    setAnnualVisitorsLargeCard(false);
    setShowBigPieChart(false);
    setShowRecentEmainAnouncement(false);
    setShowSmallPieChart(true);
    setAnnualVisitorsSmallCard(true);
    setShowReccentEmail(true);
    setAnnualVisitorsAnnounecmentCard(true);
    setHideFivecard(true);
    setShortNotificationMenu(true);
  };

  return (
    <div className="vulttureNavDiv">
      <label className="welcomeLbl">Welcome to Vultture</label>
      <div className="pagginationAndNoticationMessageDiv">
        <div className="pagginationArrowOuterDiv">
          <div className="pagginationArrowDiv">
            <i className="fa-solid fa-angle-right"></i>
          </div>
          <div className="pagginationArrowDiv">
            <i className="fa-solid fa-angle-left"></i>
          </div>
        </div>
        {shortNotificationMenu && (
          <div className="notificationMessageOthersDiv1">
            <i className="fa-solid fa-calendar leftSideIcondesign"></i>
            <i className="fa-regular fa-bell leftSideIcondesign"></i>
            <i className="fa-regular fa-message leftSideIcondesign"></i>

            <img src={userImg} alt="user iamge" className="imageDesign" />
            <i
              className="fa-solid fa-chevron-down leftSideIcondesign"
              onClick={showBigNotificationMenu}
            ></i>
          </div>
        )}
        {bigNotificationMenu && (
          <div className="notificationMessageOthersDiv2">
            <div className="notficationMessageSectionVultture">
              <i className="fa-solid fa-calendar leftSideIcondesign"></i>
              <i className="fa-regular fa-bell leftSideIcondesign"></i>
              <i className="fa-regular fa-message leftSideIcondesign"></i>

              <img src={userImg} alt="user iamge" className="imageDesign" />

              <i
                className="fa-solid fa-angle-up leftSideIcondesign"
                onClick={showSmallNotificationMenu}
              ></i>
            </div>

            <div className="messagesDivVultture">
              <div className="messageLableDivOuter">
                <div>
                  <label className="messageLblVul">Message</label>
                  <label className="numOfMsgVul">(2)</label>
                </div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="searchDivVul">
                <i className="fa-solid fa-magnifying-glass seacrhIconVul"></i>
                <input type="text" className="searchInput" />
                <label className="searchLbl">Search</label>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">Anamta Atif</label>
                    <label className="emailUserSecondLbl">
                      Anamta is typing
                    </label>
                  </div>
                </div>
                <label>10:23am</label>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">Anamta Atif</label>
                    <label className="emailUserSecondLbl">
                      Anamta is typing
                    </label>
                  </div>
                </div>
                <label>10:23am</label>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">Anamta Atif</label>
                    <label className="emailUserSecondLbl">
                      Anamta is typing
                    </label>
                  </div>
                </div>
                <label>10:23am</label>
              </div>
            </div>

            <div className="messagesDivVultture">
              <div className="messageLableDivOuter">
                <div>
                  <label className="messageLblVul">Notification</label>
                </div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <div className="notificationMainDiv">
                <div className="notificationLabelAndNum">
                  <label>All</label>
                  <div className="numberOfNotificationDivAll">
                    <label className="notficationLblAll">5</label>
                  </div>
                </div>
                <div className="unreadnotificationLabelAndNum">
                  <label>Unread</label>
                  <div className="numberOfNotificationDiv">
                    <label className="notficationLbl">5</label>
                  </div>
                </div>
                <div className="archiveNotificationLabelAndNum">
                  <label>Archieve</label>
                </div>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">
                      Anamta Upload a file
                    </label>
                    <label className="emailUserSecondLbl">Just now</label>
                  </div>
                </div>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">
                      Anamta Upload a file
                    </label>
                    <label className="emailUserSecondLbl">Just now</label>
                  </div>
                </div>
              </div>
              <div className="emailUserNameTime">
                <div className="emailUserIconAndLbl">
                  <div className="emailUserIcon">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="emailUser">
                    <label className="emailUsername">
                      Anamta Upload a file
                    </label>
                    <label className="emailUserSecondLbl">Just now</label>
                  </div>
                </div>
              </div>
            </div>
            <Calendar
              className="js"
              value={value}
              onChange={(d) => setValue(d)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VulttureNav;
