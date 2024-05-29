import { useEffect } from "react";
const apiKey =
  import.meta.env.VITE_BASE_API_KEY_MAP ||
  "AIzaSyBH2ZANbvdcc6TiUpYezn9LQ0-CuNodGOs";

const ZoneMap = () => {
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
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 51.508742, lng: -0.12085 },
      zoom: 8,
    });
    new window.google.maps.Marker({
      map: map,
    });
    let line;
    let path = [];

    const mouseDownHandler = (event) => {
      const latLng = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      path.push(latLng);

      if (!line) {
        line = new window.google.maps.Polyline({
          path: path,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
          editable: true,
          draggable: true,
        });

        line.setMap(map);
      } else {
        line.setPath(path);
      }
    };

    window.google.maps.event.addListener(map, "mousedown", mouseDownHandler);
  };

  return (
    <div>
      <div className="shortcut__right">
        <div id="map" style={{ height: "420px" }}></div>
      </div>
    </div>
  );
};

export default ZoneMap;
