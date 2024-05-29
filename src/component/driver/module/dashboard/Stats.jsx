import { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import DateShowCalendar from "./calander/DateShowCalendar";

const Stats = () => {
  const [dvalues, setdValues] = useState({
    Completed: 50,
    Rejected: 20,
    Accepted: 40,
    Cancelled: 20,
  });

  const { Completed, Rejected, Accepted, Cancelled } = dvalues;

  const completedPercentage = Completed;
  const rejectedPercentage = Rejected;
  const acceptedPercentage = Accepted;
  const cancelledPercentage = Cancelled;

  const [values, setValues] = useState({
    labels: [],
    valuess: [],
  });
  const { labels, valuess } = values;

  useEffect(() => {
    var labels = ["Card", "Account", "Cash"];
    var valuess = [80, 50, 40];
    setValues({
      labels,
      valuess,
    });
  }, []);
  return (
    <div className="earning--graph__ms">
      <DateShowCalendar />
      <div
        style={{
          fontSize: "14px",
          fontWeight: "500",
          margin: "0 0 15px 15rem",
        }}
      >
        You Rejected Jobs Worth £ 193.00 during this period
      </div>
      <Bar
        style={{ width: "100%", maxHeight: "200px" }}
        data={{
          labels: labels,
          datasets: [
            {
              backgroundColor: ["#57C478", "#00A8E8", "#E9AE0B"],
              data: valuess,
              borderRadius: 7,
              barThickness: 80,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          title: {
            display: true,
            text: "Payment Methods",
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />
      <div className="dou--graph__down">
        <div className="outer--graph__ms">
          <Doughnut
            style={{ width: "255px", height: "255px" }}
            data={{
              labels: [
                `Accepted                                 ${acceptedPercentage}%`,
                `Rejected                                  ${rejectedPercentage}%`,
              ],
              datasets: [
                {
                  data: [acceptedPercentage, rejectedPercentage],
                  backgroundColor: ["#008100", "#FE0000"],
                  borderColor: [
                    "rgba(255, 255, 255 ,1)",
                    "rgba(255, 255, 255 ,1)",
                  ],
                  borderWidth: 5,
                },
              ],
            }}
            options={{
              cutout: "60%",
              rotation: -90,
              circumference: 180,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    font: {
                      size: 14,
                    },
                    usePointStyle: false,
                    boxWidth: 15,
                  },
                },
              },
              tooltip: {
                enabled: false,
              },
              maintainAspectRatio: false,
            }}
          />

          <div className="percent--graph__ms dis--flx__ms">
            <span style={{ fontWeight: "600", color: "#615E83" }}>
              Accepted
            </span>
            <span>83.50%</span>
          </div>
        </div>
        <div className="outer--graph__ms">
          <Doughnut
            style={{ width: "255px", height: "255px" }}
            data={{
              labels: [
                `Completed                                 ${completedPercentage}%`,
                `Cancelled                                   ${cancelledPercentage}%`,
              ],
              datasets: [
                {
                  data: [completedPercentage, cancelledPercentage],
                  backgroundColor: ["#008100", "#FE0000"],
                  borderColor: [
                    "rgba(255, 255, 255 ,1)",
                    "rgba(255, 255, 255 ,1)",
                  ],
                  borderWidth: 5,
                },
              ],
            }}
            options={{
              cutout: "60%",
              rotation: -90,
              circumference: 180,
              plugins: {
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    font: {
                      size: 14,
                    },
                    usePointStyle: false,
                    boxWidth: 15,
                  },
                },
              },
              tooltip: {
                enabled: false,
              },
              maintainAspectRatio: false,
            }}
          />

          <div className="percent--graph__ms dis--flx__ms">
            <span style={{ fontWeight: "600", color: "#615E83" }}>
              Completed
            </span>
            <span>83.50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
