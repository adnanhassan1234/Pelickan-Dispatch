import { useRef, useState } from "react";
import MobileTable from "@/mobile.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import { onShowModal } from "@/actions";
import FindVehicleModal from "@/component/driver/module/modals/vehicles/FindVehicleModal";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import PropertiesMobile from "@/component/mobile/PropertiesMobile";
import FindMobileModal from "@/component/mobile/FindMobileModal";

function Mobiles() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableMobile = useRef(null);
  const [filterName, setFilterName] = useState("All Mobiles");
  const [mobileData, setmobileData] = useState(MobileTable);

  const mobileSelect = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Mobiles",
      value: "all_charging_zone",
    },

    {
      name: "All SIM Cards",
      value: "toll_zone",
    },
    {
      name: "All Authorised Mobiles",
      value: "toll_zone",
    },
    {
      name: "All unauthorised Mobiles",
      value: "toll_zone",
    },
  ];

  const mobileProperties = [
    {
      name: "Properties",
      tag: "mobileproperties",
    },
    {
      name: "Unauthorise Mobile",
      tag: "charges",
    },
    {
      name: "Remove Mobile",
      tag: "removemobile",
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
  const onFilterMobiles = (value, key) => {
    if (value === "vehicle_attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = MobileTable.filter((itm) =>
      value !== "" ? itm[`${key}`] === value : itm,
    );
    setmobileData(dt);
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
        ? MobileTable.filter((item) => uniqueFields.has(item[key]))
        : MobileTable;

    setFields([...uniqueFields]);
    setmobileData(dataMain);
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
          tableRef={tableMobile}
          id="filter"
          nId={{
            id: "mobileType",
            name: "mobileType",
            data: mobileSelect,
          }}
          tableData={MobileTable}
          onFilterFirst={{ setFilterName, func: onFilterMobiles }}
          modalList={{ modalFirst: "print", modalSecond: "findmobile" }}
          onFilterSecond={{
            id: "fleets",
            func: onFilterFleets,
            fleetsField,
            fleetsFieldsData,
          }}
          buttons={[]}
        />
        <GenericTable
          data={mobileData}
          properties={mobileProperties}
          id="mobiletable"
          nextScreen="mobileproperties"
          tableRef={tableMobile}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>
      <div onMouseDown={(e) => e.stopPropagation()}>
        {(() => {
          switch (modal?.main?.parent) {
            case "print":
              return <PrintModal data={MobileTable} type={filterName} />;
            case "findmobile":
              return <FindMobileModal />;
            case "removemobile":
              return <DeleteModal />;
            case "mobileproperties":
              return <PropertiesMobile />;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Mobiles;
