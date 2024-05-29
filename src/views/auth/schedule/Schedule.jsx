import NightChargesModal from "@/component/modal/NightChargesModal";
import { useEffect, useState } from "react";

function Schedule() {
  const [modalData, setModalData] = useState({
    data: {},
    status: false,
    note: "",
  });
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());
  const [date] = useState(new Date());
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

    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag = [
        ...liTag,
        {
          class: "inactive",
          day: lastDateofLastMonth - i + 1,
        },
      ];
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? ""
          : "";
      liTag = [
        ...liTag,
        {
          class: isToday,
          day: i,
        },
      ];
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag = [
        ...liTag,
        {
          class: "inactive",
          day: i - lastDayofMonth + 1,
        },
      ];
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
  const onChange = (e) => {
    setModalData({ ...modalData, note: e.target.value });
  };
  useEffect(() => {
    let data = [];
    if (calendarData.currentDate === modalData.data.my) {
      const event = calendarData.days.map((itm) => {
        if (itm.day === modalData.data.date && itm.class !== "inactive") {
          data = { ...itm, event: modalData.note };
        } else {
          data = { ...itm };
        }
        return data;
      });
      setCalendarData({ ...calendarData, days: event });
    }
  }, [modalData]);
  return (
    <div className="ml-260">
      <NightChargesModal
        modalData={modalData}
        setModalData={setModalData}
        onChange={onChange}
      />
      <div>day</div>
      <div>Month</div>
      <div className="wrapper mx-1">
        {" "}
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
            // dangerouslySetInnerHTML={{ __html: calendarData.days }}
          >
            {calendarData.days.length > 0 &&
              calendarData?.days?.map((itm, ind) => (
                <li
                  onClick={() =>
                    setModalData({
                      ...modalData,
                      data: {
                        date: itm.day,
                        my: calendarData.currentDate,
                      },

                      status: true,
                    })
                  }
                  key={ind}
                  className={itm.class}
                >
                  {itm.day}
                  {itm.event && (
                    <span
                      style={{
                        background: "green",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      {itm.event}
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
