import { useEffect, useState } from "react";
import Filter from "../../filtermodals/Filter";
import PropTypes from "prop-types";

function TableHeadHeading({
  //   onGenrateModal,
  //   filterData,
  //   fieldsData,
  //   setFields,
  tableRef,
  id,
  title,
  tableData,
}) {
  const [fieldsData, setFields] = useState([]);
  const [filterData, setFilter] = useState([]);

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

  const onGenrateModal = (data, fields, setFields, tableRef) => {
    const results = data.map((item, index) => (
      <li key={index} className="all--fields__ms">
        <input
          type={item.option}
          name="filter"
          id={index}
          defaultChecked={fields.includes(item.name)}
          onClick={(e) =>
            onCheckStatus(
              item.name,
              e.target.checked,
              fields,
              setFields,
              tableRef
            )
          }
        />
        <label htmlFor={index}>{item.name}</label>
      </li>
    ));
    return results;
  };

  const onCheckStatus = (name, status, fields, setFields, tableRef) => {
    const ref = tableRef.querySelectorAll(
      "." + name?.split(" ")?.join("_").toLowerCase()
    );
    if (status) {
      setFields([...fields, name]);
      [...ref].forEach(function (key) {
        key.classList.remove("hidden");
      });
    } else {
      const data = fields.filter((itm) => itm !== name);
      setFields(data);
      [...ref].forEach(function (key) {
        key.classList.add("hidden");
      });
    }
  };
  return (
    <div className="table__head">
      {/* <h3>Charge Template</h3> */}
      <h3>{title}</h3>
      <Filter
        onGenrateModal={onGenrateModal(
          filterData,
          fieldsData,
          setFields,
          tableRef.current
        )}
        id={id}
        title={id}
      />
    </div>
  );
}

TableHeadHeading.propTypes = {
  tableRef: PropTypes.any,
  id: PropTypes.string,
  title: PropTypes.string,
  tableData: PropTypes.array,
};
export default TableHeadHeading;
