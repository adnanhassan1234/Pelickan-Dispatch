import { useState, useRef } from "react";
import PropTypes from "prop-types";
function MultiTripRooster({ tabelRef, data }) {
  const modal = useRef(null);
  const [getId, setId] = useState("");
  const [drag, setDrag] = useState(false);

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
    data.map((itm) => {
      const dt = tabelRef.current.querySelector("#" + itm.pickup + "-" + value);
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

  return (
    <div className="generic__rooster multitrip__rooster">
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
      <div className="rooster__scheduler">
        <table ref={tabelRef}>
          <thead>
            <tr>
              <th
              //   onClick={onSelectAll}
              >
                £
              </th>
              {data[0].stops.map((itm, i) => (
                <th
                  //   onClick={onColumSelection}
                  key={i}
                  value={i.toString().padStart(2, "0")}
                  id={"head" + i.toString().padStart(2, "0")}
                >
                  {itm.stop}
                </th>
              ))}
            </tr>
          </thead>
        
        </table>
      </div>
    </div>
  );
}
MultiTripRooster.propTypes = {
  tabelRef: PropTypes.any,
  data: PropTypes.any,
};
export default MultiTripRooster;
