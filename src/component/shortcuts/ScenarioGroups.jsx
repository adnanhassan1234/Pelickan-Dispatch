import { useRef } from "react";
import {
  ScenariosIconDash,
  ScenariosIconExpand,
  ScenariosIconExpandPlus,
} from "../../assets/svg/Svg";
import GenericTable from "../driver/main/GenericTable";
import SelectorModal from "@/component/modal/SelectorModal";
import { onShowModal } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function ScenarioGroups() {
  const groupRef = useRef([]);
  const shorcutGrpRef = useRef([]);
  const scenarioRef = useRef([]);
  const scenarioContextModal = useRef([]);
  const scenarioContextSecond = useRef([]);
  const modalData = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const data1 = [
    {
      name: "National Insurance.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
    },
  ];
  const data2 = [
    {
      name: "National Insurance No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
    },
  ];
  const scenarios = [
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
    {
      title: "WB-AddressShortcuts",
      data: ["Airport", "Flight"],
    },
  ];
  const onCheckDropDown = (e) => {
    let target = e.currentTarget.parentElement;
    target.querySelector("ul").classList.toggle("hidden");
    target.querySelector(".minus__icon").classList.toggle("hidden");
    target.querySelector(".plus__icon").classList.toggle("hidden");
  };
  const onGetValues = (value) => {
    console.log(value);
  };

  const contextWindowGroups = [
    {
      name: "Add New Group",
      tag: "addgroup",
    },
    {
      name: "Edit Group",
      tag: "editgroup",
    },
    {
      name: "Delete Group",
      tag: "deletegroup",
    },
  ];
  const shortcutsInGroupContext = [
    {
      name: "Edit the display name",
      tag: "editdispname",
    },
  ];
  const onTableRowSelection = (e, itm, className) => {
    // e.stopPropagation();
    const ref = scenarioRef.current.querySelector("." + className);
    if (ref) ref.classList.remove(className);

    e.currentTarget.classList.add(className);
  };
  const onOpenModal = (event, itm, ref, refOther) => {
    event.preventDefault();
    let width = event.clientX + 290;
    // console.log(ref);
    ref.classList.remove("hidden");
    refOther.classList.add("hidden");
    if (width <= window.innerWidth) {
      ref.style.left = event.clientX + "px";
      ref.style.top = event.clientY + "px";
    } else {
      ref.style.left = event.clientX - 290 + "px";
      ref.style.top = event.clientY + "px";
    }
    onTableRowSelection(event);
  };
  const onPropertiesModal = (data, modal) => {
    const results =
      data.length > 0 &&
      data.map((item, index) => (
        <li
          key={index}
          value={index}
          onClick={() => {
            if (modal) modal?.classList?.add("hidden");
            if (item.tag !== "") {
              dispatch(onShowModal(item.tag, modalData.cPosition + 1));
            }
          }}
        >
          {item.name}
        </li>
      ));
    return results;
  };
  const contextWindow1 = [
    {
      name: "Add New Scenario",
      tag: "addnewscenario",
    },
    {
      name: "Edit Scenario",
      tag: "editnewscenario",
    },
    {
      name: "Delete Scenario",
      tag: "deletescenario",
    },
  ];
  const contextWindowRight = [
    {
      name: "Remove this Group from Scenario",
      tag: "deletegroup",
    },
  ];

  const handleMouseDown = (e, modal) => {
    if (e.button !== 2) {
      modal.classList.add("hidden");
      e.preventDefault();
    }
  };
  const modal = useSelector((state) => state.modal);

  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
  };
  return (
    <div className="scenario__groups shortcut_animation--forward">
      <div
        className="scenario__groups--table"
        onMouseDown={(e) => {
          handleMouseDown(e, scenarioContextModal.current);
          handleMouseDown(e, scenarioContextSecond.current);
        }}
      >
        <h3>Scenarios</h3>

        <div
          ref={scenarioContextModal}
          className="hidden"
          style={{ position: "absolute", top: "0" }}
        >
          <SelectorModal
            results={onPropertiesModal(
              contextWindow1,
              scenarioContextModal.current
            )}
            //   id={id}
            id="modalfirst"
          />
        </div>
        <div
          ref={scenarioContextSecond}
          className="hidden"
          style={{ position: "absolute", top: "0" }}
        >
          <SelectorModal
            results={onPropertiesModal(
              contextWindowRight,
              scenarioContextSecond.current
            )}
            //   id={id}
            id="shortcut"
          />
        </div>
        {/* <ContextModal /> */}
        <div className="scenarios__first" ref={scenarioRef}>
          {scenarios.map((itm, ind) => (
            <div key={ind}>
              <p
                onMouseDown={(e) => onTableRowSelection(e, itm, "scenario__bg")}
                onClick={onCheckDropDown}
                onContextMenu={(e) =>
                  onOpenModal(
                    e,
                    itm,
                    scenarioContextModal.current,
                    scenarioContextSecond.current
                  )
                }
              >
                <ScenariosIconDash />
                <ScenariosIconExpandPlus />
                <span> {itm.title}</span>
              </p>
              <ul className="hidden">
                {itm.data.map((itm, i) => (
                  <li
                    onMouseDown={(e) =>
                      onTableRowSelection(e, itm, "scenario__color")
                    }
                    onClick={() => onGetValues(itm)}
                    key={i}
                    onContextMenu={(e) =>
                      onOpenModal(
                        e,
                        itm,
                        scenarioContextSecond.current,
                        scenarioContextModal.current
                      )
                    }
                  >
                    <ScenariosIconExpand /> {itm}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="scenario__groups--table">
        <h3>Groups</h3>
        {/* <div className="table__main">
          <Table data={data1} />
        </div> */}
        <GenericTable
          data={data1}
          properties={contextWindowGroups}
          id="groups"
          nextScreen="addgroup"
          tableRef={groupRef}
          tableLength={5}
          onListenEvents={onListenEvents}
        />
      </div>
      <div className="scenario__groups--table">
        <h3>Shortcuts In Group</h3>
        {/* <div className="table__main">
          <Table data={data2} />
        </div> */}
        <GenericTable
          data={data2}
          properties={shortcutsInGroupContext}
          id="shortcut"
          nextScreen="editdispname"
          tableRef={shorcutGrpRef}
          tableLength={5}
          onListenEvents={onListenEvents}
        />
      </div>
    </div>
  );
}

export default ScenarioGroups;
