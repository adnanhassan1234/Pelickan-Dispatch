import { useEffect, React, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Ratings = () => {
  const [values, setValues] = useState({
    maxLimit: [],
    commonData: [],
    xValues: [],
    ratingValue: [],
  });
  const { maxLimit, commonData, xValues, ratingValue } = values;
  useEffect(() => {
    const maxLimit = 10;
    const commonData = [10, 10, 10, 10, 10];
    var xValues = ["5", "4", "3", "2", "1"];
    const ratingValue = [8, 6, 4, 3, 2];
    setValues({
      maxLimit,
      commonData,
      xValues,
      ratingValue,
    });
  }, []);
  return (
    <div className="earning--graph__ms">
      <div className="graph--up__clnder">
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
            margin: "0 0 0 20rem",
          }}
        >
          Your Current Rating
        </span>
      </div>
      <div className="both--sec__rating">
        <div className="left--rating__text">
          <p style={{ color: "#808080", fontSize: "100px", fontWeight: "500" }}>
            3.8
          </p>
          <p>
            <i
              className="fa-solid fa-star"
              style={{
                color: "#FFC824",
                fontSize: "14px",
                letterSpacing: "1em",
              }}
            ></i>
            <i
              className="fa-solid fa-star"
              style={{
                color: "#FFC824",
                fontSize: "14px",
                letterSpacing: "1em",
              }}
            ></i>
            <i
              className="fa-solid fa-star"
              style={{
                color: "#FFC824",
                fontSize: "14px",
                letterSpacing: "1em",
              }}
            ></i>
            <i
              className="fa-solid fa-star"
              style={{
                color: "#FFC824",
                fontSize: "14px",
                letterSpacing: "1em",
              }}
            ></i>
            <i
              className="fa-solid fa-star"
              style={{
                color: "#FFC824",
                fontSize: "14px",
                letterSpacing: "1em",
              }}
            ></i>
          </p>
          <p style={{ fontSize: "15px", fontWeight: "500", marginTop: "10px" }}>
            You have had 67 related jobs{" "}
          </p>
        </div>
        <div className="rating--outer__graph">
          <Bar
            //   style={{ width: "1120px", height: "110px", maxWidth: "1180px" }}
            style={{ width: "100%", maxHeight: "320px" }}
            data={{
              labels: xValues,
              datasets: [
                {
                  backgroundColor: [
                    "#AED581",
                    "#D4E156",
                    "#FFD351",
                    "#FFB54E",
                    "#EF9998",
                  ],
                  data: ratingValue,
                  borderRadius: 7,
                  barThickness: 16,
                },
                {
                  backgroundColor: "#F8F8FF",
                  data: commonData,
                  borderRadius: 7,
                  barThickness: 16,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              indexAxis: "y",
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                  stacked: true,
                  max: maxLimit,
                },
              },
            }}
          />
          <div className="rating--percent__graph">
            <p style={{ letterSpacing: "0.3em" }}>
              5
              <i
                className="fa-solid fa-star"
                style={{ color: "#FFC824", fontSize: "10px" }}
              ></i>
            </p>
            <p style={{ letterSpacing: "0.3em" }}>
              4
              <i
                className="fa-solid fa-star"
                style={{ color: "#FFC824", fontSize: "10px" }}
              ></i>
            </p>
            <p style={{ letterSpacing: "0.3em" }}>
              3
              <i
                className="fa-solid fa-star"
                style={{ color: "#FFC824", fontSize: "10px" }}
              ></i>
            </p>
            <p style={{ letterSpacing: "0.3em" }}>
              2
              <i
                className="fa-solid fa-star"
                style={{ color: "#FFC824", fontSize: "10px" }}
              ></i>
            </p>
            <p style={{ letterSpacing: "0.3em" }}>
              1
              <i
                className="fa-solid fa-star"
                style={{ color: "#FFC824", fontSize: "10px" }}
              ></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
