import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "react-chartjs-2";

const VisitorsClients = ({
  annualVisitorsSmallCard,
  annualVisitorsLargeCard,
  annualVisitorsAnnounecmentCard,
}) => {
  return (
    <div className="visitorsClientsOuterDiv">
      <div className="clientOverdueCardDiv">
        <div className="clientCardDiv">
          <label className="clientsInvoiceLabel headingLbl">Clients</label>
          <div className="clientInvoiceInnerDiv">
            <label className="numberOfClientInvoiceLbl">60</label>
            <div className="clientSecondPlusDiv">
              <label>+21.7</label>
            </div>
          </div>
        </div>
        <div className="OverdueCardDiv">
          <label className="clientsInvoiceLabel headingLbl">
            Invoice Overdue
          </label>
          <div className="clientInvoiceInnerDiv">
            <label className="numberOfClientInvoiceLbl">32</label>
            <div className="invoiceSecondPlusDiv">
              <label>+21.7</label>
            </div>
          </div>
        </div>
      </div>
      {annualVisitorsSmallCard && (
        <div className="barGraphOuterDiv1">
          <div className="graphLabelDiv">
            <label className="headingLbl">Annual Visitors</label>
            <label>Current year VS Prior year</label>
          </div>

          <div className="barDesignDiv">
            <Bar
              options={{ maintainAspectRatio: false }}
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "Year Comaparison",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    //   borderColor: [
                    //     "rgba(255, 99, 132, 1)",
                    //     "rgba(54, 162, 235, 1)",
                    //     "rgba(255, 206, 86, 1)",
                    //     "rgba(75, 192, 192, 1)",
                    //     "rgba(153, 102, 255, 1)",
                    //     "rgba(255, 159, 64, 1)",
                    //   ],
                    borderWidth: 0,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
      {annualVisitorsLargeCard && (
        <div className="barGraphOuterDiv2">
          <div className="graphLabelDiv">
            <label className="headingLbl">Annual Visitors</label>
            <label>Current year VS Prior year</label>
          </div>

          <div className="barDesignDiv">
            <Bar
              options={{ maintainAspectRatio: false }}
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "Year Comaparison",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    //   borderColor: [
                    //     "rgba(255, 99, 132, 1)",
                    //     "rgba(54, 162, 235, 1)",
                    //     "rgba(255, 206, 86, 1)",
                    //     "rgba(75, 192, 192, 1)",
                    //     "rgba(153, 102, 255, 1)",
                    //     "rgba(255, 159, 64, 1)",
                    //   ],
                    borderWidth: 0,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
      {annualVisitorsAnnounecmentCard && (
        <div className="lastestAnnouncementDiv">
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
          <div className="dateViseAnnouncement">
            <div className="dateOfAnnounce">
              <label>Dec</label>
              <label>13</label>
            </div>
            <label className="anunceLbl">
              State Contracting manual Vol 2.0
            </label>
          </div>
          <div className="dateViseAnnouncement">
            <div className="dateOfAnnounce">
              <label>Dec</label>
              <label>13</label>
            </div>
            <label className="anunceLbl">
              State Contracting manual Vol 2.0
            </label>
          </div>
          <div className="dateViseAnnouncement">
            <div className="dateOfAnnounce">
              <label>Dec</label>
              <label>13</label>
            </div>
            <label className="anunceLbl">
              State Contracting manual Vol 2.0
            </label>
          </div>
          <div className="dateViseAnnouncement">
            <div className="dateOfAnnounce">
              <label>Dec</label>
              <label>13</label>
            </div>
            <label className="anunceLbl">
              State Contracting manual Vol 2.0
            </label>
          </div>
          <div className="dateViseAnnouncement">
            <div className="dateOfAnnounce">
              <label>Dec</label>
              <label>13</label>
            </div>
            <label className="anunceLbl">
              State Contracting manual Vol 2.0
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitorsClients;
