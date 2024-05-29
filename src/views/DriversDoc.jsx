import { useState, useRef, useEffect } from "react";
import driversCondition from "@/driversCondition.json";
// import properties from "@/properties.json";
import table from "@/table.json";
import charge from "@/charge.json";
import DriverDetail from "@/component/driver/DriverDetail";
import SearchModal from "@/component/driver/module/modals/SearchModal";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import DriverChargesTemplateModal from "@/component/driver/module/modals/DriverChargesTemplateModal";
import GenericTable from "@/component/driver/main/GenericTable";
import { useDispatch, useSelector } from "react-redux";
import AttributesModal from "@/component/driver/module/modals/AttributesModal";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import LogModal from "@/component/driver/module/modals/LogModal";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import TableHeadHeading from "@/component/driver/module/modals/modalcomponent/TableHeadHeading";
import { onShowModal } from "@/actions";
import UploadDocuments from "@/component/driver/module/modals/UploadDocuments";
const DriversDoc = () => {
  const chargeRef = useRef(null);
  const tableTop = useRef(null);
  const [driverTypeName, setDriverTypeName] = useState("All Drivers");
  const [driversData, setDriverData] = useState(table);
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);

  const chargeTemplate = [
    {
      name: "Charge Template Properties",
      tag: "charges",
    },
    {
      name: "Copy Charge Template",
      tag: "charges",
    },
    {
      name: "Delete Charge Template",
      tag: "delete_template",
    },
    {
      name: "New Charge Template",
      tag: "charges",
    },
    {
      name: "Show Drivers using this Template",
      tag: "",
    },
  ];

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (!body) {
      return;
    }

    if (
      modal?.main?.parent === "details" ||
      modal?.main?.parent === "print" ||
      modal?.main?.parent === "charges" ||
      modal?.main?.parent === "filter_charge" ||
      modal?.main?.parent === "search"
    ) {
      body.style.overflow = "hidden";
      return;
    }

    body.style.overflow = "auto";
  }, [modal?.main]);

  const onFilterDrivers = (value, key) => {
    if (value === "attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = table.filter((itm) =>
      value !== "all" ? itm[key] === value : itm
    );
    setDriverData(dt);
  };
  const onUploadDoc = () => {
    dispatch(onShowModal("uploaddoc", modal.cPosition + 1));
  };
  const onOpenNewDriver = () => {
    dispatch(onShowModal("details", modal.cPosition + 1));
  };
  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
    // switch (list.name) {
    //   case "Driver Properties":
    //     return <DriverDetail />;
    //   case "Copy Driver":
    //     return <UploadDocuments />;
    //   case "View Driver Log":
    //     return <PrintModal data={table} type={driverTypeName} />;
    //   case "New Driver":
    //     return <SearchModal />;
    //   case "Print Summary Sheet":
    //     return <DriverChargesTemplateModal />;
    //   case "Set up Charges for the Selected Driver":
    //     return <AttributesModal />;
    //   case "Add charges":
    //     return <LogModal />;
    //   case "delete_template":
    //     return <DeleteModal />;

    //   default:
    //     break;
    // }
  };
  const driverProperties = [
    {
      name: "Driver Properties",
      tag: "details",
    },
    {
      name: "Copy Driver",
      tag: "details",
    },
    {
      name: "View Driver Log",
      tag: "drivers_log",
    },
    {
      name: "New Driver",
      tag: "details",
    },
    {
      name: "Print Summary Sheet",
      tag: "print",
    },
    {
      name: "Set up Charges for the Selected Driver",
      tag: "charges",
    },
    {
      name: "Add charges",
      tag: "charges",
    },
  ];

  return (
    <div className="driver--dash__ms">
      <div className="all--first__tble table__top">
        <TableHeadFilter
          tableRef={tableTop}
          id="filter"
          nId={{
            id: "driverType",
            name: "driverType",
            data: driversCondition,
          }}
          tableData={table}
          onFilterFirst={{
            setFilterName: setDriverTypeName,
            func: onFilterDrivers,
          }}
          modalList={{ modalFirst: "print", modalSecond: "search" }}
          onFilterSecond={{}}
          buttons={[
            { name: "Add Driver", func: onOpenNewDriver },
            { name: "Bulk Upload", func: onUploadDoc },
          ]}
        />

        <GenericTable
          data={driversData}
          properties={driverProperties}
          id="properties"
          nextScreen="details"
          tableRef={tableTop}
          tableLength={6}
          onListenEvents={onListenEvents}
        />
      </div>
      <div className="all--first__tble table__bottom">
        <TableHeadHeading
          tableRef={chargeRef}
          id="Charges"
          title="Charge Template"
          tableData={charge}
        />
        <GenericTable
          data={charge}
          properties={chargeTemplate}
          id="charges"
          nextScreen="charges"
          tableRef={chargeRef}
          tableLength={6}
          onListenEvents={onListenEvents}
        />
      </div>
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        {(() => {
          switch (modal?.main?.parent) {
            case "details":
              return <DriverDetail />;
            case "uploaddoc":
              return <UploadDocuments />;
            case "print":
              return (
                <PrintModal
                  data={table}
                  type={"Driver Data:" + " " + driverTypeName}
                />
              );
            case "search":
              return <SearchModal />;
            case "charges":
              return <DriverChargesTemplateModal />;
            case "attributes":
              return <AttributesModal />;
            case "drivers_log":
              return <LogModal />;
            case "delete_template":
              return <DeleteModal />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default DriversDoc;
