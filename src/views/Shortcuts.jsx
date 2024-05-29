import { useRef, useState } from "react";
import shortcut from "@/shortcuts.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import { onShowModal } from "@/actions";

import ShortcutSearch from "../component/shortcuts/modals/ShortcutSearch";
import ShortcutDetails from "../component/shortcuts/modals/ShortcutDetails";
import DeleteModal from "../component/driver/module/modals/DeleteModal";
import ShortcutMap from "../component/shortcuts/ShortcutMap";
import ScenarioGroups from "../component/shortcuts/ScenarioGroups";
import StreetView from "../component/shortcuts/modals/StreetView";
import AddNewScenario from "@/component/shortcuts/modals/AddNewScenario";
import DisplayName from "@/component/shortcuts/modals/DisplayName";
import Groups from "@/component/shortcuts/modals/Groups";

function Shortcuts() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableShortcut = useRef(null);
  const [filterName, setFilterName] = useState("");
  const [shortcutData, setShortcutData] = useState(shortcut);

  const shortcutProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Shortcuts",
      value: "all_shortcuts",
    },

    {
      name: "Airport Shortcuts",
      value: "airport_shortcuts",
    },
    {
      name: "Other Shortcuts",
      value: "other_shortcuts",
    },
    {
      name: "All Shortcuts for Mobiles",
      value: "all_shortcuts_for_mobiles",
    },
    {
      name: "All Shortcuts for End Users",
      value: "all-shortcuts_for_end_users",
    },
  ];

  const contextWindow = [
    {
      name: "Edit Shortcut",
      tag: "shortcutdetails",
    },
    {
      name: "Delete Shortcut",
      tag: "deleteshortcut",
    },
    {
      name: "New Shortcut",
      tag: "shortcutdetails",
    },
  ];

  const onFilterShortcut = (value, key) => {
    if (value === "vehicle_attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    // const dt = shortcut.filter((itm) =>
    //   value !== "" ? itm[`${key}`] === value : itm
    // );
    // setShortcutData(dt);
  };

  const onOpenMap = () => {
    dispatch(onShowModal("displaymap", modal.cPosition + 1));
  };
  const onScenarioGroups = () => {
    dispatch(onShowModal("scenariogroups", modal.cPosition + 1));
  };
  const onListenEvents = (data, details) => {
    if (data.tag !== "") {
      dispatch(onShowModal(data.tag, modal.cPosition + 1));
    }
  };
  return (
    <div className="driver--dash__ms">
      <div className="all--first__tble table__top">
        <TableHeadFilter
          tableRef={tableShortcut}
          id="filter"
          nId={{
            id: "shortcutType",
            name: "shortcutType",
            data: shortcutProperties,
          }}
          tableData={shortcut}
          onFilterFirst={{ setFilterName, func: onFilterShortcut }}
          modalList={{ modalFirst: "print", modalSecond: "findshortcut" }}
          onFilterSecond={{}}
          buttons={[
            { name: "Map", func: onOpenMap },
            { name: "Scenario & Groups", func: onScenarioGroups },
          ]}
        />
        <div onMouseDown={(e) => e.stopPropagation(e)}>
          {(() => {
            switch (modal?.main?.parent) {
              case "displaymap":
                return <ShortcutMap />;
              case "scenariogroups":
                return <ScenarioGroups />;
              default:
                break;
            }
          })()}
        </div>
        <GenericTable
          data={shortcutData}
          properties={contextWindow}
          id="shortcut"
          nextScreen="shortcutdetails"
          tableRef={tableShortcut}
          tableLength={
            modal?.main?.parent === "displaymap" ||
            modal?.main?.parent === "scenariogroups"
              ? 7
              : 18
          }
          onListenEvents={onListenEvents}
        />
      </div>
      <div onMouseDown={(e) => e.stopPropagation(e)}>
        {(() => {
          switch (modal?.main?.parent) {
            case "shortcutdetails":
              return <ShortcutDetails />;
            case "print":
              return (
                <PrintModal
                  data={shortcut}
                  type={"Shortcut Data:" + " " + filterName}
                />
              );
            case "findshortcut":
              return <ShortcutSearch />;
            case "deletegroup":
            case "deleteshortcut":
              return <DeleteModal />;
            default:
              break;
          }
        })()}
        {(() => {
          switch (modal?.main?.child) {
            case "deletescenario":
            case "deletegroup":
              return <DeleteModal />;
            case "streetview":
              return <StreetView />;
            case "editnewscenario":
            case "addnewscenario":
              return <AddNewScenario />;
            case "editgroup":
            case "addgroup":
              return <Groups />;
            case "editdispname":
              return <DisplayName />;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Shortcuts;
