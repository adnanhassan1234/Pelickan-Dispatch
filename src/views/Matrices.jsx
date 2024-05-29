import { useRef, useState } from "react";
import matricesData from "@/matrics.json";
import GenericTable from "@/component/driver/main/GenericTable";
import TableHeadFilter from "@/component/driver/module/modals/modalcomponent/TableHeadFilter";
import { useDispatch, useSelector } from "react-redux";
import { onShowModal } from "@/actions";
import PrintModal from "@/component/driver/module/modals/PrintModal";
import MatricesProperties from "@/component/matrices/modals/MatricesProperties";
import FindLocation from "@/component/matrices/modals/FindLocation";
import MultiPickups from "@/component/matrices/modals/MultiPickups";

function Matrices() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const tableMatrices = useRef(null);
  const [filterName, setFilterName] = useState("");
  const [matrices, setMatriceData] = useState(matricesData);

  const matricesProperties = [
    {
      name: "Please Select",
      value: "",
    },
    {
      name: "All Active Matrices",
      value: "all_active_matrices",
    },
    {
      name: "All Matrices",
      value: "all_matrices",
    },
    {
      name: "All Inactive Matrices",
      value: "all_inactive_matrices",
    },
  ];

  const contextWindow = [
    {
      name: "Matrix Properties",
      tag: "matrixproperties",
    },
    {
      name: "Copy Matrix",
      tag: "copymatrix",
    },
    {
      name: "New Matrix",
      tag: "newmatrix",
    },
    {
      name: "New Zone Matrix",
      tag: "newzonematrix",
    },
  ];

  const onFilterMatrices = (value, key) => {
    // if (value === "matricesData_attributes") {
    //   dispatch(onShowModal(value, modal.cPosition + 1));
    //   return;
    // }
    // const dt = matricesData.filter((itm) =>
    //   value !== "" ? itm[`${key}`] === value : itm
    // );
    // setMatriceData(dt);
  };
  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
  };
  const onOpenModal = (tag) => {
    dispatch(onShowModal(tag, modal.cPosition + 1));
  };
  return (
    <div className="driver--dash__ms">
      <div className="all--first__tble table__top">
        <TableHeadFilter
          tableRef={tableMatrices}
          id="filter"
          nId={{
            id: "matricesType",
            name: "matricesType",
            data: matricesProperties,
          }}
          tableData={matricesData}
          onFilterFirst={{ setFilterName, func: onFilterMatrices }}
          modalList={{ modalFirst: "print" }}
          onFilterSecond={{}}
          buttons={[]}
        />
        <GenericTable
          data={matrices}
          properties={contextWindow}
          id="matrices"
          nextScreen="matrixproperties"
          tableRef={tableMatrices}
          tableLength={18}
          onListenEvents={onListenEvents}
        />
      </div>

      {(() => {
        switch (modal?.main?.parent) {
          case "matrixproperties":
            return <MatricesProperties onOpenModal={onOpenModal} />;
          case "print":
            return (
              <PrintModal
                data={matricesData}
                type={"Matrices Data:" + " " + filterName}
              />
            );
          default:
            break;
        }
      })()}
      {(() => {
        switch (modal?.main?.child) {
          case "pickup":
          case "destination":
            return <FindLocation />;
          case "multipickups":
            return <MultiPickups onOpenModal={onOpenModal} />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Matrices;
