import { useRef, useState } from "react";
import logs from "@/logs.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import LogModal from "@/component/driver/module/modals/LogModal";
import { onShowModal } from "@/actions";
import OperatorLogs from "@/component/driver/module/modals/logs/OperatorLogs";
import DriversLog from "@/component/driver/module/modals/logs/DriversLog";
import SpecificLogs from "@/component/driver/module/modals/logs/SpecificLogs";

function Logs() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableLogs = useRef(null);
  const [filterName, setFilterName] = useState("All Drivers");
  const [logsData] = useState(logs);

  const logsProperties = [
    {
      name: "Please Select ...",
      value: "",
    },
    {
      name: "All Log Entries Over ...",
      value: "alllogs",
    },
    {
      name: "All Log Entries For Driver ...",
      value: "alldriverslogs",
    },
    {
      name: "All Log Entries For Operator ...",
      value: "alloperatorlogs",
    },
    {
      name: "Find Log Entries Containing ...",
      value: "findlog",
    },
  ];

  const filterLogs = (value) => {
    dispatch(onShowModal(value, modal.cPosition + 1));
    return;
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
          tableRef={tableLogs}
          id="filter"
          nId={{
            id: "logsType",
            name: "logsType",
            data: logsProperties,
          }}
          tableData={logs}
          onFilterFirst={{ setFilterName, func: filterLogs }}
          modalList={{ modalFirst: "print", modalSecond: "findlog" }}
          onFilterSecond={{}}
          buttons={[]}
        />
        <GenericTable
          data={logsData}
          properties={[]}
          id="logs"
          nextScreen=""
          tableRef={tableLogs}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>
      {(() => {
        switch (modal?.main?.parent) {
          case "print":
            return (
              <PrintModal data={logs} type={"Logs Data:" + " " + filterName} />
            );
          case "alllogs":
            return <LogModal />;
          case "alloperatorlogs":
            return <OperatorLogs />;
          case "alldriverslogs":
            return <DriversLog />;
          case "findlog":
            return <SpecificLogs />;
          default:
            break;
        }
      })()}
      {(() => {
        switch (modal?.main?.child) {
          case "alllogs":
            return <LogModal />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Logs;
