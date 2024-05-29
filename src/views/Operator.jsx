import { useRef, useState } from "react";
import operatorData from "@/operator.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import FindOperator from "@/component/operators/modals/FindOperator";
import OperatorDetail from "@/component/operators/modals/OperatorDetail";
import OperatorPassword from "@/component/operators/modals/OperatorPassword";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import { onShowModal } from "@/actions";

function Operator() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableOperator = useRef(null);
  const [filterName, setFilterName] = useState("All Drivers");
  const [operator, setOperatorData] = useState(operatorData);

  const operatorProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Operators",
      value: "all_operators",
    },
  ];

  const contextWindow = [
    {
      name: "Properties",
      tag: "operatorsproperties",
    },
    {
      name: "Copy Operator",
      tag: "copyoperator",
    },
    {
      name: "Delete Operator",
      tag: "deleteoperator",
    },
    {
      name: "New Operator",
      tag: "newoperator",
    },
    {
      name: "Enable Operator",
      tag: "enableoperator",
    },
    {
      name: "Disable Operator",
      tag: "disableoperator",
    },

    {
      name: "Send Password by Email",
      tag: "sendpasswordbyemail",
    },
    {
      name: "Send Password by Text",
      tag: "sendpasswordbytext",
    },
    {
      name: "Display Password",
      tag: "operatorpaswsword",
    },

    {
      name: "Unlock Operator",
      tag: "unlockoperator",
    },
  ];

  const onFilterOperator = (value, key) => {
    // if (value === "operatorData_attributes") {
    //   dispatch(onShowModal(value, modal.cPosition + 1));
    //   return;
    // }
    // const dt = operatorData.filter((itm) =>
    //   value !== "" ? itm[`${key}`] === value : itm
    // );
    // setoperator(dt);
  };
  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
  };
  return (
    <div className="driver--dash__ms">
      <div className="all--first__tble table__top">
        <TableHeadFilter
          tableRef={tableOperator}
          id="filter"
          nId={{
            id: "operatorType",
            name: "operatorType",
            data: operatorProperties,
          }}
          tableData={operatorData}
          onFilterFirst={{ setFilterName, func: onFilterOperator }}
          modalList={{ modalFirst: "print", modalSecond: "findoperator" }}
          onFilterSecond={{}}
          buttons={[]}
        />
        <GenericTable
          data={operator}
          properties={contextWindow}
          id="operator"
          nextScreen="operatorsproperties"
          tableRef={tableOperator}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>

      {(() => {
        switch (modal?.main?.parent) {
          case "newoperator":
          case "operatorsproperties":
          case "copyoperator":
            return <OperatorDetail />;
          case "print":
            return (
              <PrintModal
                data={operatorData}
                type={"Operator Data:" + " " + filterName}
              />
            );
          case "findoperator":
            return <FindOperator />;
          case "operatorpaswsword":
            return <OperatorPassword />;
          case "deleteoperator":
            return <DeleteModal />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Operator;
