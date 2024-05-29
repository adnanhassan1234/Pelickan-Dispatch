import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import FilterSingle from "../driver/module/modals/modalcomponent/FilterSingle";

const DoughnutMapHome = () => {
  const mapData = [
    {
      name: "None",
      option: "checkbox",
    },
    {
      name: "Jobs/Hr",
      option: "checkbox",
    },
    {
      name: "Calls/Hr",
      option: "checkbox",
    },
    {
      name: "%Rejected",
      option: "checkbox",
    },
    {
      name: "%Cancelled",
      option: "checkbox",
    },
  ];

  const [fleets, setFleets] = useState([]);
  const [chartTitles, setChartTitles] = useState({
    drivers: "Total Drivers",
    vehicles: "Undispatched",
    jobs: "Total Jobs",
  });
  const [dvalues, setdValues] = useState({
    totalDrivers: [],
    totalVehicles: [],
    totalJobs: [],
  });
  const { totalDrivers, totalVehicles, totalJobs } = dvalues;
  useEffect(() => {
    const totalDrivers = 90;
    const totalVehicles = 65;
    const totalJobs = 80;

    setdValues({
      totalDrivers,
      totalVehicles,
      totalJobs,
    });
  }, []);
  return (
    <>
      <div className="maingraph--container dis--flx__ms">
        <div className="graph--set__ms dis--flx__ms">
          <FilterSingle
            title="Total Drivers"
            id="drivers"
            filterValues={mapData}
            fieldsData={fleets}
            setFields={setFleets}
          />
        </div>
        <br />
        <div className="dash--outer__graph">
          <Doughnut
            style={{ maxWidth: "270px" }}
            data={{
              labels: [chartTitles.drivers, "Empty"],
              datasets: [
                {
                  backgroundColor: ["rgba(20, 184, 166, 1)", "#F8F8FF"],
                  data: [totalDrivers, 100 - totalDrivers],
                },
              ],
            }}
            options={{
              cutout: "80%",
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: "center",
                  align: "center",
                  padding: 120,
                },
              },
            }}
          />

          <div className="dash--percent__graph">
            <span
              style={{ fontWeight: "500", color: "#615E83", fontSize: "18px" }}
            >
              {chartTitles.drivers}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>83</span>
          </div>
        </div>
      </div>
      <div className="maingraph--container dis--flx__ms">
        <div className="graph--set__ms dis--flx__ms">
          <FilterSingle
            title="UnDispatched"
            id="UnDispatched"
            filterValues={mapData}
            fieldsData={fleets}
            setFields={setFleets}
          />
        </div>
        <br />
        <div className="dash--outer__graph">
          <Doughnut
            style={{ maxWidth: "270px" }}
            data={{
              labels: [chartTitles.vehicles, "Empty"],
              datasets: [
                {
                  backgroundColor: ["rgba(245, 158, 11, 1)", "#F8F8FF"],
                  data: [totalVehicles, 100 - totalVehicles],
                },
              ],
            }}
            options={{
              cutout: "80%",
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: "center",
                  align: "center",
                  padding: 120,
                },
              },
            }}
          />

          <div className="dash--percent__graph">
            <span
              style={{ fontWeight: "500", color: "#615E83", fontSize: "18px" }}
            >
              {chartTitles.vehicles}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>50.6%</span>
          </div>
        </div>
      </div>
      <div className="maingraph--container dis--flx__ms">
        <div className="graph--set__ms dis--flx__ms">
          <FilterSingle
            title="Total Jobs"
            id="totalljobs"
            filterValues={mapData}
            fieldsData={fleets}
            setFields={setFleets}
          />
        </div>
        <br />
        <div className="dash--outer__graph">
          <Doughnut
            style={{ maxWidth: "270px" }}
            data={{
              labels: [chartTitles.jobs, "Empty"],
              datasets: [
                {
                  backgroundColor: ["rgba(236, 72, 153, 1)", "#F8F8FF"],
                  data: [totalJobs, 100 - totalJobs],
                },
              ],
            }}
            options={{
              cutout: "80%",
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: true,
                  position: "center",
                  align: "center",
                  padding: 120,
                },
              },
            }}
          />

          <div className="dash--percent__graph">
            <span
              style={{ fontWeight: "500", color: "#615E83", fontSize: "18px" }}
            >
              {chartTitles.jobs}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "700" }}>80</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoughnutMapHome;
