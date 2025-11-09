import * as React from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet-routing-machine";
import L from "leaflet";

export function RoutingControl({ waypoints }) {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const control = L.Routing.control({
      waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
      // @ts-ignore
      lineOptions: { styles: [{ color: "purple", weight: 6 }] },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      createMarker: () => null,
    }).addTo(map);

    // Return cleanup function
    return () => {
      map.removeControl(control);
    };
  }, [map, waypoints]);
  return null;
}
