import { useState } from "react";
import Filter from "../../filtermodals/Filter";
import PropTypes from "prop-types";

function FilterSingle({ id, title, filterValues, fieldsData, setFields }) {
  const [filterData] = useState(filterValues);

  const onGenrateModal = (data, fields, setFields) => {
    const results = data.map((item, index) => (
      <li key={index} className="all--fields__ms">
        <input
          type={item.option}
          name="filter"
          id={index}
          defaultChecked={fields.includes(item.name)}
          onClick={(e) =>
            onCheckStatus(item.name, e.target.checked, fields, setFields)
          }
        />
        <label htmlFor={index}>{item.name}</label>
      </li>
    ));
    return results;
  };

  const onCheckStatus = (name, status, fields, setFields) => {
    const uniqueFields = new Set(fields);
    if (status) {
      uniqueFields.add(name);
    } else {
      uniqueFields.delete(name);
    }
    setFields([...uniqueFields]);
  };
  return (
    <Filter
      onGenrateModal={onGenrateModal(filterData, fieldsData, setFields)}
      id={id}
      title={title}
    />
  );
}

FilterSingle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  filterValues: PropTypes.array,
  fieldsData: PropTypes.array,
  setFields: PropTypes.any,
};
export default FilterSingle;
