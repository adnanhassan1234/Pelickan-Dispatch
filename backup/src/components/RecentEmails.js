import React from "react";
import userImg from "../images/profile.jpg";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "react-chartjs-2";

const RecentEmails = ({
  showReccentEmail,
  showBigPieChart,
  showSmallPieChart,
  showRecentEmainAnouncement,
}) => {
  return (
    <div className="recentEmailAndPieGraphDiv">
      {showReccentEmail && (
        <div className="recentEmailsDiv">
          <label className="headingLbl">Recent Emails</label>
          <div className="emailDataDiv">
            <img src={userImg} alt="user iamge" className="imageDesign" />
            <label className="emailUserSche marginLeftForEmailUser">
              Tassawar Abbas
            </label>
            <label className="emailUserSche">Meeting Schedule</label>
            <label>01:23pm</label>
          </div>
          <div className="emailDataDiv1">
            <img src={userImg} alt="user iamge" className="imageDesign" />
            <label className="emailUserSche marginLeftForEmailUser">
              Tassawar Abbas
            </label>
            <label className="emailUserSche">Meeting Schedule</label>
            <label>01:23pm</label>
          </div>
          <div className="emailDataDiv2">
            <img src={userImg} alt="user iamge" className="imageDesign" />
            <label className="emailUserSche marginLeftForEmailUser">
              Tassawar Abbas
            </label>
            <label className="emailUserSche">Meeting Schedule</label>
            <label>01:23pm</label>
          </div>
        </div>
      )}
      {showRecentEmainAnouncement && (
        <div className="latestAnnouncementOfRecenetEmailSection">
          <div className="firstLatestIconLblDiv">
            <div className="latestLblAndIcons">
              <i className="fa-solid fa-bullhorn"></i>
              <div className="latestLbl">
                <label className="headingLbl">Latest Annoucement</label>
                <label
                  style={{
                    color: "#26A0FC",
                    fontSize: "18px",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  (7)
                </label>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div className="notificationMainDivRecentEmail">
            <div className="notificationMainDivTodayRecentEmail">
              <label>Today</label>
              <div className="numberOfNotificationDivAll">
                <label className="notficationLblAll">5</label>
              </div>
            </div>
            <div className="notificationAllLabelAndNum">
              <label>All</label>
              <div className="numberOfNotificationDiv">
                <label className="notficationLbl">5</label>
              </div>
            </div>
          </div>
          <div className="recentEmaillatestAnnouncementDiv">
            <i className="fa-solid fa-wifi iconAnouncement"></i>
            <div className="dateOfThingAnounecement">
              <label className="dateOfAnounce">August 29, 2022</label>
              <div className="thingAnouncementlabel">
                <label className="anounementLbl">
                  State Contracting Contracting Manual Vol 2.0
                </label>
                <label className="moreLbl">More</label>
              </div>
            </div>
            <label className="anouncementTime">10:02 am</label>
          </div>
          <div className="recentEmaillatestAnnouncementDiv">
            <i className="fa-solid fa-wifi iconAnouncement"></i>
            <div className="dateOfThingAnounecement">
              <label className="dateOfAnounce">August 29, 2022</label>
              <div className="thingAnouncementlabel">
                <label className="anounementLbl">
                  State Contracting Contracting Manual Vol 2.0
                </label>
                <label className="moreLbl">More</label>
              </div>
            </div>
            <label className="anouncementTime">10:02 am</label>
          </div>
          <div className="recentEmaillatestAnnouncementDiv">
            <i className="fa-solid fa-wifi iconAnouncement"></i>
            <div className="dateOfThingAnounecement">
              <label className="dateOfAnounce">August 29, 2022</label>
              <div className="thingAnouncementlabel">
                <label className="anounementLbl">
                  State Contracting Contracting Manual Vol 2.0
                </label>
                <label className="moreLbl">More</label>
              </div>
            </div>
            <label className="anouncementTime">10:02 am</label>
          </div>
        </div>
      )}
      {showSmallPieChart && (
        <div className="pieChartsDiv1">
          <Pie
            options={{ maintainAspectRatio: false }}
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderColor: [
                    // "rgba(255, 99, 132, 1)",
                    // "rgba(54, 162, 235, 1)",
                    // "rgba(255, 206, 86, 1)",
                    // "rgba(75, 192, 192, 1)",
                    // "rgba(153, 102, 255, 1)",
                    // "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 0,
                },
              ],
            }}
          />
        </div>
      )}
      {showBigPieChart && (
        <div className="pieChartsDiv2">
          <Pie
            options={{ maintainAspectRatio: false }}
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderColor: [
                    // "rgba(255, 99, 132, 1)",
                    // "rgba(54, 162, 235, 1)",
                    // "rgba(255, 206, 86, 1)",
                    // "rgba(75, 192, 192, 1)",
                    // "rgba(153, 102, 255, 1)",
                    // "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 0,
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};
export default RecentEmails;
