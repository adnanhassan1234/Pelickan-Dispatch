import { useRef, useState } from "react";
import vehicle from "@/vehicle.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import { onShowModal } from "@/actions";
import FindVehicleModal from "@/component/driver/module/modals/vehicles/FindVehicleModal";
import ChangeFleetModal from "@/component/driver/module/modals/vehicles/ChangeFleetModal";
import VehicleDetail from "@/component/vehicle/VehicleDetail";
import VAttributesSecond from "@/component/vehicle/screens/VAttributesSecond";

function Vehicles() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableVehicle = useRef(null);
  const [filterName, setFilterName] = useState("All Drivers");
  const [vehiclesData, setVehiclesData] = useState(vehicle);

  const vehiclesProperties = [
    {
      name: "All Active Vehicles",
      value: "all_active_vehicles",
    },
    {
      name: "All Inactive Vehicles",
      value: "all_inactive_vehicles",
    },
    {
      name: "All Vehicles",
      value: "all_vehicles",
    },
    {
      name: "All vehicles With Attribute ...",
      value: "vehicle_attributes",
    },
    {
      name: "All Vehicles With Expired Documents",
      value: "vehicle_expired_documents",
    },
    {
      name: "All Vehicles With Documents Warnings",
      value: "vehicle_documents_warnings",
    },
    {
      name: "All Vehicles locked down to Driver App",
      value: "all_lockeddow_nvehicles",
    },
  ];

  const contextWindow = [
    {
      name: "Vehicle Properties",
      tag: "vehicleproperties",
    },
    {
      name: "New Vehicle",
      tag: "vehicleproperties",
    },
    {
      name: "Change Fleet",
      tag: "chnagefleet",
    },
    {
      name: "Lock down selected vehicles to the Driver App",
      tag: "vehicleproperties",
    },
  ];
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
  const onFilterVehicles = (value, key) => {
    if (value === "vehicle_attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = vehicle.filter((itm) =>
      value !== "" ? itm[`${key}`] === value : itm
    );
    setVehiclesData(dt);
    // return;
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
        ? vehicle.filter((item) => uniqueFields.has(item[key]))
        : vehicle;

    setFields([...uniqueFields]);
    setVehiclesData(dataMain);
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
          tableRef={tableVehicle}
          id="filter"
          nId={{
            id: "vehiclesType",
            name: "vehiclesType",
            data: vehiclesProperties,
          }}
          tableData={vehicle}
          onFilterFirst={{ setFilterName, func: onFilterVehicles }}
          modalList={{ modalFirst: "print", modalSecond: "findvehicle" }}
          onFilterSecond={{
            id: "fleets",
            func: onFilterFleets,
            fleetsField,
            fleetsFieldsData,
          }}
          buttons={[]}
        />
        <GenericTable
          data={vehiclesData}
          properties={contextWindow}
          id="vehicle"
          nextScreen="vehicleproperties"
          tableRef={tableVehicle}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>

      {(() => {
        switch (modal?.main?.parent) {
          case "vehicleproperties":
            return <VehicleDetail />;
          case "print":
            return (
              <PrintModal
                data={vehicle}
                type={"Vehicles Data:" + " " + filterName}
              />
            );
          case "chnagefleet":
            return <ChangeFleetModal />;
          case "findvehicle":
            return <FindVehicleModal />;
          case "vehicle_attributes":
            return <VAttributesSecond />;
          default:
            break;
        }
      })()}
    </div>
  );
}

export default Vehicles;
