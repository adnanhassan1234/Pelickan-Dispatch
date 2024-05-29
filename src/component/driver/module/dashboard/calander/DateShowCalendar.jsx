import { useState } from "react";
import Calendar from "./Calendar";

function DateShowCalendar() {
  const onShowCalender = (e) => {
    const target = e.currentTarget.parentElement;
    target.querySelector(".calender__main").classList.toggle("hidden");
  };
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleDateRangeChange = (start, end) => {
    const formattedStart = formatDate(start);
    const formattedEnd = formatDate(end);
    const dateRangeString = `${formattedStart} - ${formattedEnd}`;
    setSelectedDateRange(dateRangeString);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en", options);
  };
  return (
    <div className="graph--up__clnder">
      <span>{selectedDateRange}</span>
      <div className="calnder--rlt__uper">
        <i onClick={onShowCalender} className="fa-solid fa-calendar-days"></i>
        <div className="hidden calender__main">
          <Calendar onDateRangeChange={handleDateRangeChange} />
        </div>
      </div>
    </div>
  );
}

export default DateShowCalendar;
