import PropTypes from "prop-types";

function DetailHead({ options, detail, setDetail }) {
  return (
    <div className="detail__header">
      <ul>
        {options.map((itm, index) => (
          <li
            className={`${detail.id === index ? "detail__active" : ""}`}
            onClick={() => setDetail({ id: index, tag: itm })}
            key={index}
          >
            {itm}
          </li>
        ))}
      </ul>
    </div>
  );
}
DetailHead.propTypes = {
  options: PropTypes.array,
  detail: PropTypes.object,
  setDetail: PropTypes.any,
};
export default DetailHead;
