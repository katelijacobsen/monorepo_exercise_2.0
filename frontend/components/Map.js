"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapContainer = useRef(null); // ref to the DOM node
  const mapInstance = useRef(null);  // ref to the Leaflet map
 /*  const customIcon = L.divIcon({
  html: `<div style="
    font-size: 28px;
    line-height: 1;
    transform: translate(-50%, -100%);
  ">📍</div>`,
  className: "",      // removes Leaflet's default white box
  iconSize: [0, 0],   // let the transform handle positioning
})
L.marker([55.6796, 12.5646], { icon: customIcon }).addTo(map).bindPopup("Marker 1");
*/

  useEffect(() => {
    let map;

    import("leaflet").then(L => {
      if (mapContainer.current && !mapInstance.current) {
        map = L.map(mapContainer.current).setView([55.6796, 12.5646], 12);

        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          {
            attribution: "&copy; OpenStreetMap &copy; CARTO",
            subdomains: "abcd",
            maxZoom: 20,
          }
        ).addTo(map);

      const customIcon = L.divIcon({
  html: `<div style="
    font-size: 28px;
    line-height: 1;
    transform: translate(-50%, -100%);
  ">🚗</div>`,
  className: "",      // removes Leaflet's default white box
  iconSize: [0, 0],   // let the transform handle positioning
})
L.marker([55.6796, 12.5646], { icon: customIcon }).addTo(map).bindPopup("Marker 1");
L.marker([55.6800, 12.5746], { icon: customIcon }).addTo(map).bindPopup("Marker 2"); /*x & y*/


        mapInstance.current = map; // store the map instance
      }
    });

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapContainer} style={{ height: "100vh", width: "100%" }} />;
}