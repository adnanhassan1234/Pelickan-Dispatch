import { onShowModal } from "@/actions";
import SelectSingle from "@/component/form/SelectSingle";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../filtermodals/Filter";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function TableHeadFilter({
  tableRef,
  id,
  nId,
  tableData,
  onFilterFirst,
  modalList,
  onFilterSecond,
  buttons,
}) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const [sortValue, setSortValue] = useState("");
  // const fleetProperties = ;
  const [fieldsData, setFields] = useState([]);
  const [filterData, setFilter] = useState([]);
  const [filterDataSecond] = useState(onFilterSecond.fleetsFieldsData);
  const [fieldsDataSecond, setFieldsSecond] = useState(
    onFilterSecond.fleetsField,
  );
  useEffect(() => {
    let data = {};
    const dt = Object.keys(tableData[0]).map((itm) => {
      data = {
        ...data,
        name: itm,
        status: true,
        option: "checkbox",
      };
      return data;
    });
    setFilter(dt);
    setFields(Object.keys(tableData[0]).map((itm) => itm));
  }, [tableData]);

  const onChange = (e) => {
    const { value } = e.target;
    setSortValue(value);

    onFilterFirst.func(value, "Icon");
    const selectedOption = e.target.selectedOptions[0];
    if (selectedOption) {
      const dataName = selectedOption.getAttribute("data-name");
      onFilterFirst.setFilterName(dataName);
    }
  };
  const onGenrateModal = (data, fields, setFields, tableRef) => {
    const results = data.map((item, index) => (
      <li key={index} className="all--fields__ms">
        <input
          type={item.option}
          name="filter"
          id={index}
          defaultChecked={fields.includes(item.name)}
          onClick={(e) => {
            switch (item.type) {
              case "fleet":
                return onFilterSecond.func(
                  item.name,
                  "Fleet",
                  e.target.checked,
                  setFieldsSecond,
                  fieldsDataSecond,
                );

              default:
                return onCheckStatus(
                  item.name,
                  e.target.checked,
                  fields,
                  setFields,
                  tableRef,
                );
            }
          }}
        />
        <label htmlFor={index}>{item.name}</label>
      </li>
    ));
    return results;
  };

  const onCheckStatus = (name, status, fields, setFields, tableRef) => {
    const ref = tableRef.querySelectorAll(
      "." + name.split(" ").join("_").toLocaleLowerCase(),
    );
    const uniqueFields = new Set(fields);

    if (status) {
      uniqueFields.add(name);
      [...ref].forEach(function (key) {
        key.classList.remove("hidden");
      });
    } else {
      uniqueFields.delete(name);

      [...ref].forEach(function (key) {
        key.classList.add("hidden");
      });
    }
    setFields([...uniqueFields]);
  };
  return (
    <div className="d--head__nav dis--flx__ms">
      <div className="d--left__head">
        {modalList.modalFirst && (
          <i
            onClick={() => {
              dispatch(onShowModal(modalList.modalFirst, modal.cPosition + 1));
            }}
            className="fa-solid fa-print"
          ></i>
        )}
        {modalList.modalSecond && (
          <i
            onClick={() => {
              dispatch(onShowModal(modalList.modalSecond, modal.cPosition + 1));
            }}
            className="fa-solid fa-magnifying-glass"
          ></i>
        )}{" "}
        {buttons.length > 0 &&
          buttons.map((itm, key) => (
            <button key={key} onClick={itm.func}>
              {itm.name}
            </button>
          ))}
        {Object.keys(nId).length > 0 && (
          <div style={{ position: "relative" }}>
            <div className="d--left__headms">
              <SelectSingle
                onChange={onChange}
                name={nId.name}
                value={sortValue}
                id={nId.id}
                data={nId.data}
              />
            </div>
          </div>
        )}
        {Object.keys(onFilterSecond).length > 0 && (
          <div>
            <Filter
              onGenrateModal={onGenrateModal(
                filterDataSecond,
                fieldsDataSecond,
                setFieldsSecond,
                tableRef.current,
              )}
              id={onFilterSecond.id}
              title={onFilterSecond.id}
            />
          </div>
        )}
      </div>
      <Filter
        onGenrateModal={onGenrateModal(
          filterData,
          fieldsData,
          setFields,
          tableRef.current,
        )}
        id={id}
        title={id}
      />
    </div>
  );
}

TableHeadFilter.propTypes = {
  id: PropTypes.string,
  tableRef: PropTypes.any,
  nId: PropTypes.object,
  tableData: PropTypes.array,
  onFilterSecond: PropTypes.object,
  modalList: PropTypes.object,
  onFilterFirst: PropTypes.object,
  buttons: PropTypes.array,
};
export default TableHeadFilter;
