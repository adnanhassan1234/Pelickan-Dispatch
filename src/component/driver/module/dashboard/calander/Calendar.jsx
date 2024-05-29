import { useState } from "react";
import PropTypes from "prop-types";
const Calendar = ({ onDateRangeChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const createCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const calendar = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      calendar.push(<div key={`empty-${i}`} className="day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDates.some(
        (selectedDate) => selectedDate.toDateString() === date.toDateString(),
      );

      const dayElement = (
        <div
          key={day}
          className={`day--clnder__ms ${
            isSelected ? "selected--date__clnder" : ""
          }`}
          onClick={() => toggleDate(date)}
        >
          {day}
        </div>
      );

      calendar.push(dayElement);
    }

    return calendar;
  };

  const toggleDate = (date) => {
    const updatedDates = [...selectedDates];

    if (updatedDates.length === 1) {
      const existingDate = updatedDates[0];

      if (date > existingDate) {
        const datesInRange = getDatesInRange(existingDate, date);
        updatedDates.push(...datesInRange);
      } else {
        const datesInRange = getDatesInRange(date, existingDate);
        updatedDates.unshift(...datesInRange);
      }
    } else {
      updatedDates.length = 0;
      updatedDates.push(date);
    }

    setSelectedDates(updatedDates);
    if (updatedDates.length > 1) {
      const [start, end] = updatedDates;
      onDateRangeChange(start, end);
    }
  };
  const getDatesInRange = (start, end) => {
    const datesInRange = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      datesInRange.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return datesInRange;
  };

  const handleMonthChange = (change) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + change);
    setCurrentMonth(newMonth);
  };

  return (
    <div className="doubble--calendar_pick">
      <div className="header--calander__pick">
        <i
          className="fa-solid fa-angle-left"
          onClick={() => handleMonthChange(-1)}
        ></i>
        {currentMonth.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
        <i
          className="fa-solid fa-angle-right"
          onClick={() => handleMonthChange(1)}
        ></i>
      </div>
      <div className="dayNames--weeks__ms">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((name) => (
          <div key={name} className="dayName--calnder__ms">
            {name}
          </div>
        ))}
      </div>
      <div className="days--ms__clnder">{createCalendar()}</div>
    </div>
  );
};
Calendar.propTypes = {
  onDateRangeChange: PropTypes.func.isRequired,
};
export default Calendar;
