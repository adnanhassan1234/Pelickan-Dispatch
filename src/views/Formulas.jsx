import { useState, useRef } from "react";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import FormulasTable from "@/formulas.json";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import SearchModal from "@/component/driver/module/modals/SearchModal";
import DeleteModal from "@/component/driver/module/modals/DeleteModal";
import FormulasProperties from "@/component/formulas/modals/FormulasProperties";
import FormulaModal from "@/component/formulas/modals/FormulaModal";
const Formulas = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [formulaType, setformulaType] = useState("All Formulas");
  const formulaProperties = [
    {
      name: "Formula Properties",
      tag: "formulasproperties",
    },
    {
      name: "Copy Formula",
      tag: "formulasproperties",
    },
    {
      name: "New Formula",
      tag: "formulasproperties",
    },
    {
      name: "New Sliding Formula",
      tag: "formulasproperties",
    },
    {
      name: "New Driver Points Formula",
      tag: "formulasproperties",
    },
    {
      name: "New Driver Points Sliding Formula",
      tag: "formulasproperties",
    },
  ];
  const tollProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Active Formulas",
      value: "all_charging_zone",
    },

    {
      name: "All Formulas",
      value: "toll_zone",
    },
    {
      name: "All InActive Formulas",
      value: "toll_zone",
    },
  ];
  const onFilterZone = (value, key) => {
    if (value === "attributes") {
      dispatch(onShowModal(value, modal.cPosition + 1));
      return;
    }
    const dt = FormulasTable.filter((itm) =>
      value !== "all" ? itm[`${key}`] === value : itm,
    );
    setformulaType(dt);
  };
  const tableFormula = useRef(null);
  const onOpenModal = (tag) => {
    dispatch(onShowModal(tag, modal.cPosition + 1));
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
  return (
    <div className="zone--map__main">
      <div className="params--table__system">
        <TableHeadFilter
          tableRef={tableFormula}
          id="filter"
          nId={{
            id: "formulaType",
            name: "formulaType",
            data: tollProperties,
          }}
          tableData={FormulasTable}
          onFilterFirst={{
            setFilterName: setformulaType,
            func: onFilterZone,
          }}
          modalList={{ modalFirst: "print", modalSecond: "search" }}
          onFilterSecond={{}}
          buttons={[]}
        />
        <GenericTable
          data={FormulasTable}
          properties={formulaProperties}
          id="systemparamenter"
          nextScreen="formulasproperties"
          tableRef={tableFormula}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>
      <div onMouseDown={(e) => e.stopPropagation()}>
        {(() => {
          switch (modal?.main?.parent) {
            case "print":
              return (
                <PrintModal
                  data={FormulasTable}
                  type={"Formulas Data:" + " " + formulaType}
                />
              );
            case "searchh":
              return <SearchModal />;
            case "deletechargezone":
              return <DeleteModal />;
            case "formulasproperties":
              return <FormulasProperties onOpenModal={onOpenModal} />;
            default:
              break;
          }
        })()}
        {(() => {
          switch (modal?.main?.child) {
            case "formulamodal":
              return <FormulaModal />;
            case "deletechargezone":
              return <DeleteModal />;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default Formulas;
