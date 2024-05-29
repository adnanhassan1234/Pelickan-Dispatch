import { useState, useRef, Fragment } from "react";
import GenericTable from "@/component/driver/main/GenericTable";
import systemParamenterTable from "@/systemParamenterTable.json";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import SystemParameter from "@/component/system/SystemParameter";
import { onShowModal } from "@/actions";
import SystemProperties from "@/component/system/SystemProperties";
import SystemScndModal from "@/component/system/SystemScndModal";
import SystemThrdModal from "@/component/system/SystemThrdModal";
import SystemForAtri from "@/component/system/SystemForAtri";
import SystemFiveLice from "@/component/system/SystemFiveLice";
import SystemSixFare from "@/component/system/SystemSixFare";
import SystemSevenModal from "@/component/system/SystemSevenModal";
import SystemEightModal from "@/component/system/SystemEightModal";

const SystemParameters = () => {
  const [systemTypeName, setSystemTypeName] = useState("");
  const tableTop = useRef(null);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const systemCondition = [
    {
      name: "All System Parameters",
      value: "all",
    },
  ];

  const systemProperties = [
    {
      name: "Edit",
      tag: "editsystemparameters",
    },
    {
      name: "Show Recent Log",
      tag: "systemparameters",
    },
    {
      name: "Delete",
      tag: "deletesystem",
    },
    {
      name: "New",
      tag: "newsystemparameters",
    },
    {
      name: "Attributes",
      tag: "systemforatri",
    },
    {
      name: "License Authority",
      tag: "systemfivelice",
    },
    {
      name: "Fare Meter Tarrif",
      tag: "systemsixfare",
    },
    {
      name: "System Parameters",
      tag: "systemseven",
    },
    {
      name: "System Parameters Eight",
      tag: "systeight",
    },
  ];

  const onFilterPara = () => {};
  const onListenEvents = (data) => {
    if (data.tag !== "") {
      dispatch(onShowModal(data.tag, modal.cPosition + 1));
    }
  };
  return (
    <Fragment>
      <div className="system--container__ms">
        <SystemParameter />
        <div className="right--parms__data">
          <div className="params--table__system table__main">
            <TableHeadFilter
              tableRef={tableTop}
              id="filter"
              nId={{
                id: "systemType",
                name: "systemType",
                data: systemCondition,
              }}
              tableData={systemParamenterTable}
              onFilterFirst={{
                setFilterName: setSystemTypeName,
                func: onFilterPara,
              }}
              modalList={{ modalFirst: "print" }}
              onFilterSecond={{}}
              buttons={[]}
            />
            <GenericTable
              data={systemParamenterTable}
              properties={systemProperties}
              id="systemparamenter"
              nextScreen="editsystemparameters"
              tableRef={tableTop}
              tableLength={13}
              onListenEvents={onListenEvents}
            />
          </div>
          <div className="params--text__area">
            <p>
              Driver Attributes. Once defined these can be associated with a
              driver and used during job booking and despatch
            </p>
          </div>
        </div>
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        >
          {(() => {
            switch (modal?.main?.parent) {
              case "print":
                return (
                  <PrintModal
                    data={systemParamenterTable}
                    type={"System Parameters Data:" + " " + systemTypeName}
                  />
                );
              case "editsystemparameters":
                return <SystemProperties />;
              case "systemparameters":
                return <SystemScndModal />;
              case "newsystemparameters":
                return <SystemThrdModal />;
              case "deletesystem":
                return <DeleteModal />;
              case "systemforatri":
                return <SystemForAtri />;
              case "systemfivelice":
                return <SystemFiveLice />;
              case "systemsixfare":
                return <SystemSixFare />;
              case "systemseven":
                return <SystemSevenModal />;
              case "systeight":
                return <SystemEightModal />;
              default:
                break;
            }
          })()}
        </div>
      </div>
    </Fragment>
  );
};

export default SystemParameters;
