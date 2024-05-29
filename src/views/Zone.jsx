import { useState, useRef } from "react";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import ZoneTable from "@/zoneTable.json";
import ZoneMap from "@/component/zone/ZoneMap";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import ZonefindModal from "@/component/zone/ZonefindModal";
import PropertiesZone from "@/component/zone/PropertiesZone";
const Zone = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [zoneType, setzoneType] = useState("All Zones");
  const zoneProperties = [
    {
      name: "Properties",
      tag: "propertiesmobile",
    },
    {
      name: "Merge Charge Zone",
      tag: "charges",
    },
    {
      name: "Delete Charge Zone",
      tag: "deletechargezone",
    },
    {
      name: "Draw Charge Zone",
      tag: "propertiesmobile",
    },
    {
      name: "Insert new Zone here",
      tag: "propertiesmobile",
    },
    {
      name: "Split this Zone horizontally",
      tag: "charges",
    },
    {
      name: "Split this Zone vertically",
      tag: "charges",
    },
  ];
  const tollProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Charging Zones",
      value: "all_charging_zone",
    },

    {
      name: "Toll Zone",
      value: "toll_zone",
    },
  ];
  const onOpenMap = () => {
    dispatch(onShowModal("displaymap", modal.cPosition + 1));
  };
  const onSave = () => {};
  const onFilterZone = (value, key) => {
    if (value === "attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = ZoneTable.filter((itm) =>
      value !== "all" ? itm[`${key}`] === value : itm,
    );
    setzoneType(dt);
  };
  const tableZone = useRef(null);

  const onListenEvents = (data, details) => {
    if (data.tag !== "") {
      dispatch(onShowModal(data.tag, modal.cPosition + 1));
    }
  };
  return (
    <div className="zone--map__main">
      <div className="params--table__system">
        <TableHeadFilter
          tableRef={tableZone}
          id="filter"
          nId={{
            id: "zoneType",
            name: "zoneType",
            data: tollProperties,
          }}
          tableData={ZoneTable}
          onFilterFirst={{
            setFilterName: setzoneType,
            func: onFilterZone,
          }}
          modalList={{ modalFirst: "print", modalSecond: "search" }}
          onFilterSecond={{}}
          buttons={[
            { name: "Map", func: onOpenMap },
            { name: "Save", func: onSave },
          ]}
        />
        <div onMouseDown={(e) => e.stopPropagation(e)}>
          {(() => {
            switch (modal?.main?.parent) {
              case "displaymap":
                return <ZoneMap />;
            }
          })()}
        </div>
        <GenericTable
          data={ZoneTable}
          properties={zoneProperties}
          id="systemparamenter"
          nextScreen="propertiesmobile"
          tableRef={tableZone}
          tableLength={modal?.main?.parent === "displaymap" ? 7 : 17}
          onListenEvents={onListenEvents}
        />
      </div>
      {(() => {
        switch (modal?.main?.parent) {
          case "print":
            return (
              <PrintModal
                data={ZoneTable}
                type={"Zones Data:" + " " + zoneType}
              />
            );
          case "search":
            return <ZonefindModal />;
          case "deletechargezone":
            return <DeleteModal />;
          case "propertiesmobile":
            return <PropertiesZone />;
          default:
            break;
        }
      })()}
    </div>
  );
};

export default Zone;
