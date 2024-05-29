import { useEffect, useRef, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import DateShowCalendar from "./calander/DateShowCalendar";

function Earnings() {
  const graphData = [
    {
      title: "Personal",
      total: "£1427",
      boxes: [
        { type: "Account", background: "#00a8e8", amount: "£1424.00" },
        { type: "Card", background: "#57C478", amount: "£0.00" },
        { type: "Cash", background: "#E9AE0B", amount: "£0.00" },
      ],
    },
    {
      title: "Fleet (Average Per Driver)",
      total: "£0.00",
      boxes: [
        { type: "Account", background: "#00a8e8", amount: "£0.00" },
        { type: "Card", background: "#57C478", amount: "£0.00" },
        { type: "Cash", background: "#E9AE0B", amount: "£0.00" },
      ],
    },
  ];
  const calenderRef = useRef(null);
  const [values, setValues] = useState({
    xValues: [],
    accountValues: [],
    cashValues: [],
    cardValues: [],
  });
  const { xValues, accountValues, cashValues, cardValues } = values;
  useEffect(() => {
    var xValues = ["MON", "TUE", "WED", "THR", "FRI", "SAT", "SUN"];
    var accountValues = [10, 25, 30, 20, 0, 45, 15];
    var cashValues = [5, 0, 15, 0, 30, 5, 0];
    var cardValues = [0, 10, 0, 20, 0, 0, 10];

    setValues({
      xValues,
      accountValues,
      cashValues,
      cardValues,
    });
  }, []);

  const onCloseModal = () => {
    const ref = calenderRef.current;
    if (ref) ref.querySelector(".calender__main").classList.add("hidden");
  };

  return (
    <div className="earning--graph__ms" onMouseDown={onCloseModal}>
      <DateShowCalendar />
      <Bar
        style={{ width: "100%", maxHeight: "292px" }}
        data={{
          labels: xValues,
          datasets: [
            {
              backgroundColor: "#00A8E8",
              data: accountValues,
              label: "Account",
              borderRadius: 7,
            },
            {
              backgroundColor: "#E9AE0B",
              data: cashValues,
              label: "Cash",
              borderRadius: 7,
            },
            {
              backgroundColor: "#57C478",
              data: cardValues,
              label: "Card",
              borderRadius: 7,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "top",
              marginTop: "20px",
              labels: {
                usePointStyle: false,
                boxWidth: 15,
              },
            },
          },
          title: {
            display: true,
          },
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
                borderDash: [3, 5],
                lineWidth: 0,
              },
            },
            y: {
              beginAtZero: true,
              max: 60,
            },
          },
        }}
      />
      <div className="graph--down__text">
        <span>During this period: </span>
      </div>
      <hr />
      <div className="graph--down__clnder">
        {graphData.map((item, index) => (
          <div key={index} className="down--data__grph">
            <div className="data--boxes__ms">
              <span>{item.title}</span>
              <p>Total: {item.total}</p>
            </div>
            <div className="three--boxes__graph">
              {item.boxes.map((itm, idx) => (
                <p key={idx} style={{ background: itm.background }}>
                  {itm.type} <br /> {itm.amount}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Earnings;
