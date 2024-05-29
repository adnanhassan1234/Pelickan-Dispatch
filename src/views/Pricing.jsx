import Sidebar from "@/component/dashboard/Sidebar";
import React, { useEffect, useState } from "react";
import Navbar from "@/component/dashboard/Navbar";
import "@/css/sec.css";
function Pricing() {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date());
  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const [calendarData, setCalendarData] = useState({
    currentDate: "",
    days: "",
  });

  useEffect(() => {
    renderCalendar();
  }, [currYear, currMonth]);

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "cactive"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    setCalendarData({
      currentDate: `${months[currMonth]} ${currYear}`,
      days: liTag,
    });
  };

  const handleIconClick = (direction) => {
    let newYear = currYear;
    let newMonth = currMonth;

    if (direction === "prev") {
      newMonth = currMonth - 1;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }
    } else {
      newMonth = currMonth + 1;
      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
    }

    setCurrYear(newYear);
    setCurrMonth(newMonth);
  };
  return (
    <>
      <Sidebar />
      <Navbar title="Promotion Price" />
      <div className="mian-container w-100 margin__width">
        {/* <!-- TOP BAR --> */}

        {/* /*SideBar Calendar*/}
        <div className="d-flex flex-wrap">
          <div className="sidebar-cal">
            {/* <!-- CALENDAR --> */}
            <div className="wrapper mx-1">
              <header>
                <p className="current-date">{calendarData.currentDate}</p>
                <div className="icons">
                  <span
                    id="prev"
                    className="fas fa-chevron-left"
                    onClick={() => handleIconClick("prev")}
                  ></span>
                  <span
                    id="next"
                    className="fas fa-chevron-right"
                    onClick={() => handleIconClick("next")}
                  ></span>
                </div>
              </header>
              <div className="calendar">
                <ul className="weeks">
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul
                  className="days"
                  dangerouslySetInnerHTML={{ __html: calendarData.days }}
                ></ul>
              </div>
            </div>

            {/* <!-- DropDown Menu --> */}
            <div className="mx-2 my-1 d-flex-row align-center gap">
              <label>Calendar Filter</label>
              <select className="d-flex">
                <option selected>All</option>
                <option>Planning</option>
                <option>Reminder</option>
                <option>campaign</option>
                <option>Meeting</option>
              </select>
            </div>

            {/* <!-- CALENDAR FILTER --> */}

            <div className="mx-2 my-1 justify-space-between">
              <div className="">
                <input className="" type="checkbox" id="" name="" value="" />
                <span className="py-1">Planning </span>
              </div>
              <div className="">
                <input className="" type="checkbox" id="" name="" value="" />
                <span className="py-1">Reminder </span>
              </div>
              <div className="">
                <input className="" type="checkbox" id="" name="" value="" />
                <span className="py-1">Campaign </span>
              </div>
              <div className="">
                <input className="" type="checkbox" id="" name="" value="" />
                <span className="py-1">Meeting </span>
              </div>
            </div>
            <hr className="mx-1" />

            <div className="mx-2 gap-1">
              <div className="d-flex gap align-center my-1">
                <i className="text-success fas fa-square f-24"></i>
                <p>Your Campaign Expires Today</p>
              </div>
              <div className="d-flex gap align-center my-1">
                <i className="text-primary fas fa-square f-24"></i>
                <p>Investor Meeting Schedule</p>
              </div>
              <div className="d-flex gap align-center my-1">
                <i className="text-warning fas fa-square f-24"></i>
                <p>Meeting with Frank Goodman</p>
              </div>
            </div>

            <button className="mx-2 btn btn-dark">
              <i className="fas fa-plus-circle"></i> Add New Promotion
            </button>
          </div>

          {/* <!-- Detailed Calendar --> */}
          <div className="monthly-_-Calendar py-1">
            <div className="calendar-_-header">
              <div className="d-flex align-center gap-1">
                <div className="icons gap-1">
                  <span
                    id="prev"
                    className="fas fa-chevron-left mx-1"
                    onClick={() => handleIconClick("prev")}
                  ></span>
                  <span
                    id="next"
                    className="fas fa-chevron-right"
                    onClick={() => handleIconClick("next")}
                  ></span>
                </div>
                <div>
                  <select>
                    <option>22-10-2023 - 28-10-2023</option>
                    <option>22-10-2023 - 28-10-2023</option>
                    <option>22-10-2023 - 28-10-2023</option>
                  </select>
                </div>
              </div>
              <div className="">
                <span>Day</span>
                <span>Weekly</span>
                <span>Monthly</span>
              </div>
            </div>
            {/* <div className="mx-1 ">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th>
                        <p className="th-f">8</p>
                        <br />
                        <span className=""> SUN </span>
                      </th>
                      <th>
                        <p className="th-f">9</p>
                        <br />
                        <span> MON </span>
                      </th>
                      <th>
                        <p className="th-f">10</p>
                        <br />
                        <span> TUE </span>
                      </th>
                      <th>
                        <p className="th-f">11</p>
                        <br />
                        <span> WED </span>
                      </th>
                      <th>
                        <p className="th-f">12</p>
                        <br />
                        <span> THU </span>
                      </th>
                      <th>
                        <p className="th-f">13</p>
                        <br />
                        <span> FRI </span>
                      </th>
                      <th>
                        <p className="th-f">14</p>
                        <br />
                        <span> SAT </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-left-success px-1">
                        <div className="justify-space-between">
                          08:00 - 11:00{" "}
                          <i className="fas fa-tags text-success"></i>
                        </div>
                        <h5 className="text-success py-1">
                          Pelickan Campaign Expires
                        </h5>
                      </td>

                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="border-left-primary px-1">
                        <div className="justify-space-between">
                          08:00 - 11:00{" "}
                          <i className="fas fa-tags text-primary"></i>
                        </div>
                        <h5 className="text-primary py-1">
                          Pelickan Campaign Expires
                        </h5>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="border-left-warning px-1">
                        <div className="justify-space-between">
                          08:00 - 11:00{" "}
                          <i className="fas fa-tags text-warning"></i>
                        </div>
                        <h5 className="text-warning py-1">
                          Pelickan Campaign Expires
                        </h5>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div> */}

            {/* <div className="d-flex flex-wrap justify-space-between m-2">
                <div className="promotion-cards bg-success-gradient align-center justify-center text-white">
                  <div className="text-center">
                    <h3>Active Promotions</h3>
                    <h1 className="th-f">14</h1>
                  </div>
                </div>
                <div className="promotion-cards bg-danger-gradient align-center justify-center text-white">
                  <div className="text-center">
                    <h3>Expired Promotions</h3>
                    <h1 className="th-f">08</h1>
                  </div>
                </div>
                <div className="promotion-cards bg-primary-gradient align-center justify-center text-white">
                  <div className="text-center">
                    <h3>Upcoming Promotions</h3>
                    <h1 className="th-f">20</h1>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
