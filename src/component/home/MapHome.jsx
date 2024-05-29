import { useState } from "react";
// import MapShow from "./MapShow";

const MapHome = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };
  // const mapShowStyles = {
  //   width: "36.9375rem",
  //   height: "18.125rem",
  //   borderRadius: "0.75rem",
  // };
  return (
    <div className="map--side__ms">
      <span>
        <img
          src="src/assets/map.png"
          alt=""
          style={{ width: "36.9375rem", height: "18.125rem" }}
        />
        {/* <MapShow styles={mapShowStyles} /> */}
      </span>
      <br />
      <div className="map--down__ms">
        <span className="mis--cls__ms">{sliderValue} mins</span>
        <div className="slider-container">
          <div className="slider-wrapper">
            <div className="slider-labels stright--lable__ms">
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <input
              type="range"
              className="slider"
              min="0"
              max="60"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <div className="slider-labels">
            <span>0</span>
            <span>30</span>
            <span>60</span>
          </div>
        </div>
        <div className="map--icon__ms">
          <span>
            <i
              className="fa-regular fa-calendar-days"
              style={{ color: "rgba(215, 150, 24, 1)" }}
            ></i>
          </span>
          <span>
            <i
              className="fa-solid fa-car"
              style={{ color: "rgba(215, 150, 24, 1)" }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MapHome;
