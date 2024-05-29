import { useState, useRef } from "react";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import QueuesTable from "@/queues.json";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import ZonefindModal from "@/component/zone/ZonefindModal";
import PropertiesZone from "@/component/zone/PropertiesZone";
import MapShow from "@/component/home/MapShow";
import QueuesProperties from "@/component/queues/QueuesProperties";
const Queues = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [queueType, setqueueType] = useState("All Zones");
  const mapShowStyles = {
    height: "420px",
  };
  const queuesProperties = [
    {
      name: "Properties",
      tag: "propertiesmobile",
    },
    {
      name: "Rename Queue",
      tag: "charges",
    },
    {
      name: "Delete Queue",
      tag: "deletechargezone",
    },
    {
      name: "Goto Backup Queue",
      tag: "propertiesmobile",
    },
    {
      name: "Set ‘No App Jobs’",
      tag: "propertiesmobile",
    },
    {
      name: "Clear ‘No App Jobs’",
      tag: "charges",
    },
    {
      name: "Draw new Queue",
      tag: "charges",
    },
    {
      name: "Insert new Queue here",
      tag: "charges",
    },
    {
      name: "Split this Queue horizontally",
      tag: "charges",
    },
    {
      name: "Split this Queue vertically",
      tag: "charges",
    },
    {
      name: "Merge Queues",
      tag: "charges",
    },
    {
      name: "Copy Queues from another Fleet",
      tag: "charges",
    },
  ];
  const tollProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Active Queues",
      value: "all_active_queues",
    },

    {
      name: "Queues being Designed",
      value: "queues_being_designed",
    },
  ];
  const onOpenMap = () => {
    dispatch(onShowModal("displaymap", modal.cPosition + 1));
  };
  const onSave = () => {};
  const onApplyDesign = () => {};
  const onFilterZone = (value, key) => {
    if (value === "attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = QueuesTable.filter((itm) =>
      value !== "all" ? itm[`${key}`] === value : itm,
    );
    setqueueType(dt);
  };
  const tableZone = useRef(null);

  const onListenEvents = (data, details) => {
    if (data.tag !== "") {
      dispatch(onShowModal(data.tag, modal.cPosition + 1));
    }
  };
  const onFilterFleets = (value, key, status, setFields, fields) => {
    const uniqueFields = new Set(fields);
    if (status) {
      uniqueFields.add(value);
    } else {
      uniqueFields.delete(value);
    }
    const dataMain =
      uniqueFields.size > 0
        ? QueuesTable.filter((item) => uniqueFields.has(item[key]))
        : QueuesTable;

    setFields([...uniqueFields]);
    setqueueType(dataMain);
  };
  const fleetsFieldsData = [
    {
      name: "BAC",
      type: "fleet",
      value: "bac",
      status: true,
      option: "checkbox",
    },
    {
      name: "BPC",
      type: "fleet",
      value: "bpc",
      status: true,
      option: "checkbox",
    },
    {
      name: "GBC",
      type: "fleet",
      value: "gbc",
      status: true,
      option: "checkbox",
    },
    {
      name: "PNC",
      type: "fleet",
      value: "pnc",
      status: true,
      option: "checkbox",
    },
    {
      name: "SBC",
      type: "fleet",
      value: "sbc",
      status: true,
      option: "checkbox",
    },
  ];
  const fleetsField = ["BAC", "BPC", "GBC", "PNC", "SBC"];
  return (
    <div className="zone--map__main">
      <div className="params--table__system">
        <TableHeadFilter
          tableRef={tableZone}
          id="filter"
          nId={{
            id: "queueType",
            name: "queueType",
            data: tollProperties,
          }}
          tableData={QueuesTable}
          onFilterFirst={{
            setFilterName: setqueueType,
            func: onFilterZone,
          }}
          modalList={{ modalFirst: "print", modalSecond: "search" }}
          onFilterSecond={{
            id: "fleets",
            func: onFilterFleets,
            fleetsField,
            fleetsFieldsData,
          }}
          buttons={[
            { name: "Map", func: onOpenMap },
            { name: "Revert Design Changes", func: onSave },
            { name: "Apply Design Changes", func: onApplyDesign },
          ]}
        />
        <div onMouseDown={(e) => e.stopPropagation(e)}>
          {(() => {
            switch (modal?.main?.parent) {
              case "displaymap":
                return <MapShow styles={mapShowStyles} />;
            }
          })()}
        </div>
        <GenericTable
          data={QueuesTable}
          properties={queuesProperties}
          id="systemparamenter"
          nextScreen="propertiesmobile"
          tableRef={tableZone}
          tableLength={modal?.main?.parent === "displaymap" ? 7 : 18}
          onListenEvents={onListenEvents}
        />
      </div>
      {(() => {
        switch (modal?.main?.parent) {
          case "print":
            return (
              <PrintModal
                data={QueuesTable}
                type={"Zones Data:" + " " + queueType}
              />
            );
          case "search":
            return <ZonefindModal />;
          case "deletechargezone":
            return <DeleteModal />;
          case "propertiesmobile":
            return <QueuesProperties />;
          default:
            break;
        }
      })()}
    </div>
  );
};

export default Queues;
