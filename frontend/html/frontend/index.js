const chargingStations = [
  { name: "Station A", lat: 43.653, lon: -79.383, status: "open" },
  { name: "Station B", lat: 43.700, lon: -79.420, status: "closed" },
  { name: "Station C", lat: 43.620, lon: -79.510, status: "open" }
];

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // distance in meters
}

function formatDistance(meters) {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  } else {
    return `${(meters / 1000).toFixed(2)} km`;
  }
}

function getClosestStation(vehicleLat, vehicleLon) {
  const openStations = chargingStations.filter(s => s.status === "open");

  if (openStations.length === 0) {
    return "No open charging stations available.";
  }

  let closest = openStations[0];
  let shortest = getDistance(vehicleLat, vehicleLon, closest.lat, closest.lon);

  for (let i = 1; i < openStations.length; i++) {
    const s = openStations[i];
    const dist = getDistance(vehicleLat, vehicleLon, s.lat, s.lon);

    if (dist < shortest) {
      shortest = dist;
      closest = s;
    }
  }

  return {
    station: closest.name,
    distance: formatDistance(shortest)
  };
}

const result = getClosestStation(43.651, -79.347);
console.log(result);