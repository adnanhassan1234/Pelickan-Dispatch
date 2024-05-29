import { useState, useRef, useEffect } from "react";
import table from "@/table.json";
import DriverDetail from "@/component/driver/DriverDetail";
import GenericTable from "@/component/driver/main/GenericTable";
import { useDispatch, useSelector } from "react-redux";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { onShowModal } from "@/actions";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import VehicleDetail from "@/component/vehicle/VehicleDetail";
import SearchItems from "@/component/lostfound/modals/SearchItems";
import LostItemDetail from "@/component/lostfound/modals/LostItemDetail";
import LostItemStatus from "@/component/lostfound/modals/LostItemStatus";
import JobDetails from "@/component/lostfound/modals/JobDetails";
const LostFound = () => {
  const tableTop = useRef(null);
  const [lostFoundTypeName, setLostFoundTypeName] = useState("All");
  const [lostFoundData, setLostFoundData] = useState(table);
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);
  const LostFoundDropDown = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Delivered",
      value: "delivered",
    },
    {
      name: "Pending",
      value: "pending",
    },
    {
      name: "Failed",
      value: "failed",
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

  const onFilterLostFound = (value) => {
    const dt = table.filter((itm) => {
      console.log(itm.Status.toLowerCase(), value);
      return value !== "all" ? itm.Status.toLowerCase() === value : itm;
    });
    setLostFoundData(dt);
  };

  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
  };
  const lostFoundProperties = [
    {
      name: "Lost Item Details",
      tag: "lostItemDetails",
    },
    {
      name: "Driver Details",
      tag: "details",
    },
    {
      name: "Job Details",
      tag: "jobdetails",
    },
    {
      name: "Vehicle Details",
      tag: "vehicleproperties",
    },
    {
      name: "Status",
      tag: "lostItemStatus",
    },
    {
      name: "Call Driver",
      tag: "",
    },
    {
      name: "Call Passenger",
      tag: "",
    },
  ];

  return (
    <div className="driver--dash__ms">
      <div className="all--first__tble table__top">
        <TableHeadFilter
          tableRef={tableTop}
          id="filter"
          nId={{
            id: "LostFoundType",
            name: "LostFoundType",
            data: LostFoundDropDown,
          }}
          tableData={table}
          onFilterFirst={{
            setFilterName: setLostFoundTypeName,
            func: onFilterLostFound,
          }}
          modalList={{ modalFirst: "print", modalSecond: "search" }}
          onFilterSecond={{}}
          buttons={[]}
        />

        <GenericTable
          data={lostFoundData}
          properties={lostFoundProperties}
          id="lostfound"
          nextScreen="lostItemDetails"
          tableRef={tableTop}
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
            case "jobdetails":
              return <JobDetails />;
            case "lostItemDetails":
              return <LostItemDetail />;
            case "lostItemStatus":
              return <LostItemStatus />;
            case "details":
              return <DriverDetail />;
            case "vehicleproperties":
              return <VehicleDetail />;
            case "print":
              return (
                <PrintModal
                  data={table}
                  type={"Lost And Found Data:" + " " + lostFoundTypeName}
                />
              );
            case "search":
              return <SearchItems />;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default LostFound;
