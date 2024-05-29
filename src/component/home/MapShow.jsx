import { useEffect } from "react";
import PropTypes from "prop-types";
const apiKey =
  import.meta.env.VITE_BASE_API_KEY_MAP ||
  "AIzaSyBH2ZANbvdcc6TiUpYezn9LQ0-CuNodGOs";
const MapShow = ({ styles }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  const initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.508742, lng: -0.12085 },
      zoom: 8,
    });
  };

  return <div id="map" style={styles}></div>;
};
MapShow.propTypes = {
  styles: PropTypes.any,
};
export default MapShow;
