import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarGraphHome = () => {
  const [values, setValues] = useState({
    xValues: [],
    ridePercentage: [],
    rideBarColors: [],
    gapData: [],
    signOnVehicles: [],
  });
  const { xValues, ridePercentage, rideBarColors, gapData, signOnVehicles } =
    values;
  useEffect(() => {
    var xValues = [];
    var currentTime = new Date();
    for (var i = 0; i < 13; i++) {
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      xValues.push(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
      currentTime.setMinutes(currentTime.getMinutes() + 15);
    }

    var signOnVehicles = [100, 45, 50, 55, 90, 65, 100, 70, 50, 70, 70, 70, 50];
    var rides = [76, 10, 40, 30, 50, 38, 35, 70, 35, 35, 60, 35, 40];

    var ridePercentage = rides.map(
      (rideCount, index) => (rideCount / signOnVehicles[index]) * 100
    );
    var rideBarColors = ridePercentage.map((percentage) => {
      if (percentage <= 50) return "#47B749";
      if (percentage <= 75) return "#FFB818";
      return "#F45B69";
    });

    var gapData = new Array(xValues.length).fill(0);

    setValues({
      xValues,
      ridePercentage,
      rideBarColors,
      gapData,
      signOnVehicles,
    });
  }, []);
  return (
    <div>
      <Bar
        style={{ width: "1110px", height: "370px", maxWidth: "1180px" }}
        data={{
          labels: xValues,
          datasets: [
            {
              data: signOnVehicles,
              backgroundColor: " rgba(59, 130, 246, 1)",
              label: "Sign On Vehicle",
              barPercentage: 0.4,
              barThickness: 10,
              borderSkipped: "bottom",
              borderRadius: 3,
            },
            {
              data: gapData,
              backgroundColor: "transparent",
              label: "",
            },
            {
              data: ridePercentage,
              backgroundColor: rideBarColors,
              label: "Ride Percentage",
              barPercentage: 0.4,
              barThickness: 10,
              borderSkipped: "bottom",
              borderRadius: 3,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                usePointStyle: false,
                boxWidth: 15,
              },
            },
          },
          title: {
            display: true,
            text: "Ride Percentage and Sign-on Vehicles",
          },

          scales: {
            x: {
              stacked: true,
              grid: {
                drawOnChartArea: false,
                borderDash: [3, 5],
                lineWidth: 0,
              },
            },
            y: {
              beginAtZero: true,
              stacked: true,

              title: {
                display: true,
                text: "Total Number of Rides",
                color: "rgba(59, 130, 246, 1)",
                font: {
                  size: 20,
                  weight: 400,
                },
                padding: 15,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarGraphHome;

// import { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import "chart.js/auto";

// const BarGraphHome = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     const generateData = () => {
//       const xValues = [];
//       const currentTime = new Date();
//       for (let i = 0; i < 13; i++) {
//         const hours = currentTime.getHours();
//         const minutes = currentTime.getMinutes();
//         xValues.push(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
//         currentTime.setMinutes(currentTime.getMinutes() + 15);
//       }

//       const signOnVehicles = [100, 45, 50, 55, 90, 65, 100, 70, 50, 70, 70, 70, 50];
//       const rides = [76, 10, 40, 30, 50, 38, 35, 70, 35, 35, 60, 35, 40];

//       const ridePercentage = rides.map(
//         (rideCount, index) => (rideCount / signOnVehicles[index]) * 100
//       );
//       const rideBarColors = ridePercentage.map((percentage) => {
//         if (percentage <= 50) return "#47B749";
//         if (percentage <= 75) return "#FFB818";
//         return "#F45B69";
//       });

//       const gapData = new Array(xValues.length).fill(0);

//       setChartData({
//         labels: xValues,
//         datasets: [
//           {
//             data: signOnVehicles,
//             backgroundColor: "rgba(59, 130, 246, 1)",
//             label: "Sign On Vehicle",
//             barPercentage: 0.4,
//             barThickness: 10,
//             borderSkipped: "bottom",
//             borderRadius: 3,
//           },
//           {
//             data: gapData,
//             backgroundColor: "transparent",
//             label: "",
//           },
//           {
//             data: ridePercentage,
//             backgroundColor: rideBarColors,
//             label: "Ride Percentage",
//             barPercentage: 0.4,
//             barThickness: 10,
//             borderSkipped: "bottom",
//             borderRadius: 3,
//           },
//         ],
//       });
//     };

//     generateData();
//   }, []);

//   return (
//     <div>
//       <Bar
//         style={{ width: "1110px", height: "370px", maxWidth: "1180px" }}
//         data={chartData}
//         options={{
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               display: true,
//               position: "top",
//               labels: {
//                 usePointStyle: false,
//                 boxWidth: 15,
//               },
//             },
//           },
//           title: {
//             display: true,
//             text: "Ride Percentage and Sign-on Vehicles",
//           },
//           scales: {
//             x: {
//               stacked: true,
//               grid: {
//                 drawOnChartArea: false,
//                 borderDash: [3, 5],
//                 lineWidth: 0,
//               },
//             },
//             y: {
//               beginAtZero: true,
//               stacked: true,
//               title: {
//                 display: true,
//                 text: "Total Number of Rides",
//                 color: "rgba(59, 130, 246, 1)",
//                 font: {
//                   size: 20,
//                   weight: 400,
//                 },
//                 padding: 15,
//               },
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default BarGraphHome;
