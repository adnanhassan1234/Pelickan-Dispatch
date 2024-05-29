import PropTypes from "prop-types";

function Paragraph({ label, id, text, visibility }) {
  return (
    <div className="detail__input">
      <h5 style={{ visibility: visibility }}>{label}</h5>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

Paragraph.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  visibility: PropTypes.string,
  text: PropTypes.string,
};

export default Paragraph;
