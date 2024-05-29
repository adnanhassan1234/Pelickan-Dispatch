import Header from "./modalcomponent/Header";
import Input from "@/component/form/Input";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Footer from "./modalcomponent/Footer";
import SelectSingleLabel from "@/component/form/SelectSingleLabel";
import { useState, useRef, useEffect } from "react";

function Rooster() {
  const [hour, setHour] = useState([]);
  const tabelRef = useRef([]);
  const modal = useRef(null);

  const [getId, setId] = useState("");
  const [drag, setDrag] = useState(false);
  useEffect(() => {
    const weekdays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    const data = weekdays.map((day) => ({
      value: day,
      data: Array.from({ length: 24 }, (_, index) => ({
        key: index.toString().padStart(2, "0"),
        status: 0,
      })),
    }));
    setHour(data);
  }, []);

  const docType = [
    {
      name: "Driving License No",
      value: "drivinglicenseno",
    },
    {
      name: "CRB/Disclosure",
      value: "crb-disclosure",
    },
    {
      name: "Special Document No",
      value: "specialdocumentno",
    },
    {
      name: "PCO Certificate No",
      value: "pcocertificateno",
    },
  ];

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
      box.classList.remove("rooster__available");
      boxs.length > 0 &&
        [...boxs].forEach((itm) => itm.classList.remove("rooster__available"));
      boxs.length > 0 &&
        [...boxs].forEach((itm) => itm.classList.add("rooster__notavailble"));
    } else {
      box.classList.add("rooster__available");
      box.classList.remove("rooster__notavailble");
      boxs.length > 0 &&
        [...boxs].forEach((itm) =>
          itm.classList.remove("rooster__notavailble")
        );
      boxs.length > 0 &&
        [...boxs].forEach((itm) => itm.classList.add("rooster__available"));
    }
    onRemovePrevious("rooster__select");
  };

  const onColumSelection = (e) => {
    onRemovePrevious("head__selection--second");
    onRemovePrevious("head__selection");
    onRemovePrevious("rooster__select");
    e.target.classList.add("head__selection--second");

    const value = e.target.getAttribute("value");

    const weekdays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    [...weekdays].map((day) => {
      const dt = tabelRef.current.querySelector("#" + day + "-" + value);
      if (dt) dt.classList.add("rooster__select");
    });
  };
  const onRowSelection = (e) => {
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
    const weekdays = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    const data = weekdays.map((day) => ({
      value: day,
      data: Array.from({ length: 24 }, (_, index) => ({
        hour: index.toString().padStart(2, "0"),
        status: ![...notAvail].some(
          (itm) =>
            itm?.getAttribute("data-day") === day &&
            itm?.getAttribute("data-value") ===
              index.toString().padStart(2, "0")
        ),
      })),
    }));
    console.log(data);
  };
  return (
    <div className="modal__container">
      <div className="rooster__modal">
        <ul
          className="rooster__options hidden dashboard__options--driver"
          ref={modal}
        >
          <li onClick={onCheckAvailability} value="1">
            Available
          </li>
          <li onClick={onCheckAvailability} value="0">
            Not Available
          </li>
        </ul>
        <Header title="Driver Roster" />
        <div className="rooster__container">
          <div className="rooster__container--grid">
            <div className="rooster__left">
              <h3>Specify Driver’s Holidays Below:</h3>
              <SelectSingleLabel
                label="year"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                id="year"
                labelText="Edit"
                data={docType}
                visibility="hidden"
              />
            </div>
            <div className="rooster__right">
              <div className="rooster__input--grp">
                <CheckBoxSingle
                  label="Enforce Shift-Start Time"
                  // onChange={onChange}
                  // name="reminderperiod"
                  // value=""
                  type="checkbox"
                  id="enforceshiftdtarttime"
                />
                <div className="rooster__right--input">
                  {/* <h4>Shift-start window</h4> */}
                  <Input
                    label="Shift-start window"
                    // onChange={onChange}
                    // name="reminderperiod"
                    // value=""
                    placeholder="Shift-start window"
                    type="text"
                    id="shift-startwindow"
                    visibility="visible"
                  />
                  <span>Minutes</span>
                </div>
              </div>
              <div className="rooster__input--grp">
                <CheckBoxSingle
                  label="Sin-Bin Driver for being Late"
                  // onChange={onChange}
                  // name="reminderperiod"
                  // value=""
                  type="checkbox"
                  id="sinbindriverforbeinglate"
                />
                <div className="rooster__right--input">
                  {/* <label html>Sin-Bin Duration</h4> */}
                  <Input
                    label="Sin-Bin Duration"
                    // onChange={onChange}
                    // name="reminderperiod"
                    // value=""
                    placeholder="Sin-Bin Duration"
                    type="text"
                    id="sin-binduration"
                    visibility="visible"
                  />
                  <span>Minutes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rooster__container--bottom">
            <h3>Specify the Driver’s Roster Below:</h3>
            <div className="rooster__scheduler">
              <table ref={tabelRef}>
                <thead>
                  <tr>
                    <th onClick={onSelectAll}>Select All</th>
                    {Array(24)
                      .fill(null)
                      .map((_, i) => (
                        <th
                          onClick={onColumSelection}
                          key={i}
                          value={i.toString().padStart(2, "0")}
                          id={"head" + i.toString().padStart(2, "0")}
                        >
                          {i.toString().padStart(2, "0")}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {hour.map((itm, ind) => (
                    <tr id={itm.value} key={ind}>
                      <th onClick={onRowSelection} value={itm.value}>
                        {itm.value}
                      </th>
                      {itm.data.map((it, i) => (
                        <td
                          onContextMenu={onOpenModal}
                          onMouseDown={onMouseDown}
                          onMouseMove={onMouseMove}
                          onMouseUp={onMouseUp}
                          id={itm.value + "-" + i.toString().padStart(2, "0")}
                          onClick={(e) => onSelection(e)}
                          className="rooster__available"
                          key={i}
                          data-value={it.key}
                          data-day={itm.value}
                        ></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <button onClick={onSubmit}>submit</button> */}
        <hr className="line-bottom" />
        <Footer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Rooster;
