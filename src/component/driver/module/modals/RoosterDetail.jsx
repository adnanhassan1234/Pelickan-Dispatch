import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";
import { useEffect, useState, useRef } from "react";

function RoosterDetail() {
  const [max, setMax] = useState(0);
  const weekDays = useRef([]);
  const tabelRef = useRef(null);
  const modal = useRef(null);
  const [getId, setId] = useState("");
  const [drag, setDrag] = useState(false);
  const dt = new Date();
  const [calendarData, setCalendarData] = useState([]);

  const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    const generateCalendarData = () => {
      const months = [
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
      ];
      const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
      const newCalendarData = [];
      let maxCells = 0;

      for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(
          new Date().getFullYear(),
          month + 1,
          0
        ).getDate();
        const firstDayOfWeek = new Date(
          new Date().getFullYear(),
          month,
          1
        ).getDay();

        let daysArray = Array.from({ length: firstDayOfWeek }, () => {
          return { day: "", weekday: "" };
        });

        daysArray = daysArray.concat(
          Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const weekdayIndex = (firstDayOfWeek + index) % 7;
            const weekday = weekDays[weekdayIndex];
            return { day, weekday };
          })
        );

        maxCells = Math.max(maxCells, daysArray.length);
        setMax(maxCells);
        const monthData = {
          month: months[month],
          days: daysArray,
        };

        newCalendarData.push(monthData);
      }

      newCalendarData.forEach((monthData) => {
        while (monthData.days.length < maxCells) {
          monthData.days.push({ day: "", weekday: "" });
        }
      });
      console.log(newCalendarData);
      setCalendarData(newCalendarData);
    };

    generateCalendarData();
  }, []);

  const onCheckWeeks = (classAdd, classRemove) => {
    const week = weekDays.current;
    if (!week) return;
    [...week].forEach((itm) => {
      if (!itm) return;
      itm.classList.add(classAdd);
      itm.classList.remove(classRemove);
    });
  };
  const onRemovePrevious = (className) => {
    const boxs = tabelRef.current.querySelectorAll("." + className);
    boxs.length > 0 &&
      [...boxs].forEach((itm) => {
        itm.classList.remove(className);
      });
  };
  const onSelection = (e) => {
    onRemovePrevious("rooster__select");
    onRemovePrevious("head__selection--second");
    onRemovePrevious("head__selection");
    e.target.classList.add("rooster__select");
    const modal1 = modal.current;
    modal1.classList.add("hidden");
    let ref = tabelRef.current.querySelector("#" + e.target.id.split("-")[0]);
    let ref2 = tabelRef.current.querySelector(
      "#" + "head" + e.target.id.split("-")[1]
    );
    ref = ref.querySelector("th");
    ref.classList.add("head__selection--second");
    ref2.classList.add("head__selection--second");
  };
  function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  }
  const onMouseDown = () => {
    setDrag(true);
  };

  const onMouseMove = (e) => {
    if (drag) {
      pauseEvent(e);
      e.target.classList.add("rooster__select");
      onRemovePrevious("head__selection--second");
    }
  };

  const onMouseUp = () => {
    setDrag(false);
  };

  const onOpenModal = (event) => {
    event.preventDefault();
    // onSelection(event);
    event.target.classList.add("rooster__select");
    setId(event.target.id);
    const modal1 = modal.current;
    modal1.classList.remove("hidden");
    modal1.style.left = event.clientX + "px";
    modal1.style.top = event.clientY + "px";
  };
  const onCheckAvailability = (e) => {
    const { value } = e.target;
    const modal1 = modal.current;
    modal1.classList.add("hidden");
    const table = tabelRef.current;
    const boxs = table.querySelectorAll(".rooster__select");
    const box = table.querySelector("#" + getId);
    if (value === 0) {
      box.classList.add("rooster__notavailble");

      boxs.length > 0 &&
        [...boxs].forEach((itm) => itm.classList.add("rooster__notavailble"));
    } else {
      box.classList.remove("rooster__notavailble");
      boxs.length > 0 &&
        [...boxs].forEach((itm) =>
          itm.classList.remove("rooster__notavailble")
        );
    }
    onRemovePrevious("rooster__select");
  };

  const onColumSelection = (e) => {
    onRemovePrevious("head__selection--second");
    onRemovePrevious("head__selection");
    onRemovePrevious("rooster__select");
    e.target.classList.add("head__selection--second");
    const value = e.target.getAttribute("value");
    const months = [
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
    ];
    [...months].map((day) => {
      const dt = tabelRef.current.querySelector("#" + day + "-" + value);
      if (dt) dt.classList.add("rooster__select");
    });
  };
  const onRowSelectionNext = (e) => {
    onRemovePrevious("head__selection--second");
    onRemovePrevious("head__selection");
    onRemovePrevious("rooster__select");
    e.target.classList.add("head__selection--second");
    const value = e.target.getAttribute("value");
    const getById = tabelRef.current.querySelector("#" + value);
    const alltd = getById.querySelectorAll("td");

    alltd.forEach((itm) => {
      itm.classList.add("rooster__select");
    });
  };

  const onSelectAll = (e) => {
    const tbody = tabelRef.current.querySelector("tbody");
    const alltd = tbody.querySelectorAll("td");
    onRemovePrevious("head__selection--second");
    e.target.classList.add("head__selection");

    alltd.forEach((itm) => {
      itm.classList.add("rooster__select");
    });
  };
  const onSubmit = () => {
    const notAvail = tabelRef.current.querySelectorAll(".rooster__notavailble");

    const data = calendarData.map((month) => ({
      month: month.month,
      data: month.days.map((item) => ({
        day: item.day,
        weekday: item.weekday,
        status: ![...notAvail].some(
          (itm) =>
            itm?.getAttribute("data-month") === month.month &&
            itm?.getAttribute("data-value") === item.day.toString()
        ),
      })),
    }));
    console.log(data);
  };
  return (
    <div className="modal__container">
      <div className="rooster__modal--detail">
        <ul
          className="rooster__options hidden dashboard__options--driver"
          ref={modal}
        >
          <li onClick={onCheckAvailability} value="1">
            Remove Day
          </li>
          <li onClick={onCheckAvailability} value="0">
            Exclude Day
          </li>
        </ul>
        <Header title="Driver Rooster" />
        <div className="roosterdetail__container">
          <div className="roosterdetail__top">
            <div className="rooster__detail--year">
              <h3> Year:</h3> <p>{dt.getFullYear()}</p>
            </div>
            <div className="roosterdetail__btn--grp">
              <button
                onClick={() =>
                  onCheckWeeks(
                    "rooster__notavailble",
                    "rooster__detail--bg__weekend"
                  )
                }
              >
                Exclude Weekends
              </button>
              <button
                onClick={() =>
                  onCheckWeeks(
                    "rooster__detail--bg__weekend",
                    "rooster__notavailble"
                  )
                }
              >
                Clear All Exclusions
              </button>
            </div>
          </div>
          <div className="">
            <div className="rooster__scheduler rooster__scheduler--detail">
              <table ref={tabelRef}>
                <thead>
                  <tr>
                    <th onClick={onSelectAll}>Select All</th>
                    {Array(max)
                      .fill(null)
                      .map((_, i) => {
                        return (
                          <th
                            onClick={onColumSelection}
                            key={i}
                            value={i.toString().padStart(2, "0")}
                            id={"head" + i.toString().padStart(2, "0")}
                          >
                            {week[i % 7]}
                          </th>
                        );
                      })}
                  </tr>
                </thead>
                <tbody>
                  {calendarData.map((monthData, index) => (
                    <tr id={monthData.month} key={index}>
                      <th onClick={onRowSelectionNext} value={monthData.month}>
                        {monthData.month}
                      </th>
                      {monthData.days.map((day, dayIndex) => {
                        return (
                          <td
                            ref={(el) =>
                              (day.weekday === "Su" || day.weekday === "Sa") &&
                              weekDays.current.push(el)
                            }
                            onContextMenu={onOpenModal}
                            onMouseDown={onMouseDown}
                            onMouseMove={onMouseMove}
                            onMouseUp={onMouseUp}
                            id={
                              monthData.month +
                              "-" +
                              dayIndex.toString().padStart(2, "0")
                            }
                            onClick={(e) => onSelection(e)}
                            className={`${
                              day.day === ""
                                ? "rooster__detail--bg"
                                : day.weekday === "Su" || day.weekday === "Sa"
                                ? "rooster__detail--bg__weekend"
                                : ""
                            }`}
                            key={dayIndex}
                            data-value={day.day}
                            data-month={monthData.month}
                            data-day={day.weekday}
                          >
                            {day.day}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <button onClick={onSubmit}>submit</button> */}

        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default RoosterDetail;
