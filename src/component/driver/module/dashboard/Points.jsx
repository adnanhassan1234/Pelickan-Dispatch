import { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import DateShowCalendar from "./calander/DateShowCalendar";

const Points = () => {
  const [lvalues, setlValues] = useState({
    xValues: [],
    yValues: [],
  });
  const { xValues, yValues } = lvalues;
  useEffect(() => {
    const currentDate = new Date();

    var xValues = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(
        currentDate.getTime() + i * 7 * 24 * 60 * 60 * 1000,
      );
      const dayOfMonth = nextDate.getDate();
      xValues.push(dayOfMonth);
    }

    var yValues = [2, -1, 3, -2, 1, 4, -4];
    setlValues({
      xValues,
      yValues,
    });
  }, []);
  return (
    <div className="earning--graph__ms">
      <p
        style={{
          fontSize: "14px",
          fontWeight: "500",
          margin: "0 0 15px 23rem",
        }}
      >
        You currently have +0 points
      </p>
      <hr />
      <br />
      <DateShowCalendar />
      <Bar
        style={{ width: "100%", maxHeight: "350px" }}
        data={{
          labels: xValues,
          datasets: [
            {
              backgroundColor: yValues.map((value) =>
                value >= 0 ? "#008100" : "#FE0000",
              ),
              data: yValues,
              borderRadius: 7,
              barThickness: 65,
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              type: "category",
              grid: {
                drawOnChartArea: true,
                borderDash: [5, 5],
                lineWidth: 0,
              },
            },
            y: {
              beginAtZero: false,
              max: 5,
              min: -5,
            },
          },
        }}
      />
    </div>
  );
};

export default Points;
