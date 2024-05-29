import PropTypes from "prop-types";

const SelectorModal = ({ results, id }) => {
  return (
    <div
      id={id}
      onMouseDown={(e) => e.stopPropagation()}
      className="modal__dropdown--floating"
    >
      <div className="d--proper__ms">
        <ul>{results}</ul>
      </div>
    </div>
  );
};

SelectorModal.propTypes = {
  results: PropTypes.any,
  id: PropTypes.string,
};
export default SelectorModal;
