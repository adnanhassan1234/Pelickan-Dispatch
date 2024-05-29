import PropTypes from "prop-types";

const ShowVehicle = ({ title, number, imageSrc }) => {
  return (
    <div className="header--left__color dis--flx__ms">
      <div className="header--text__ms">
        <p>{title}</p>
        <span>{number}</span>
      </div>
      <img src={imageSrc} alt="" />
    </div>
  );
};

ShowVehicle.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  imageSrc: PropTypes.string,
};

export default ShowVehicle;
