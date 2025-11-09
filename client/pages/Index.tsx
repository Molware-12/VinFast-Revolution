import {
  Bell,
  Home,
  MapPin,
  Settings,
  Wrench,
  User,
  ChevronRight,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VinFastLogo from "@/components/ui/vinfastlogo";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RoutingControl } from "@/hooks/use-routing";
import L from "leaflet";

const svgString = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 117.4l-26.1 74.6 293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-320 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
`);

const customIcon = L.icon({
  iconUrl: "data:image/svg+xml," + svgString,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const position1: [number, number] = [43.64, -79.63];
const position2: [number, number] = [43.41, -79.73];
const waypoints: [number, number][] = [
  [43.7, -79.4],
  [43.64, -79.63],
];

type ChargerBreakdown = {
  level1: number;
  level2: number;
  dcFast: number;
};

type Lot = {
  id: string;
  name: string;
  position: [number, number];
  totalStations: number;
  available: number;
  breakdown: ChargerBreakdown;
  notes?: string;
};

const LOTS: Lot[] = [
  {
    id: "ambler",
    name: "Ambler Dr Parking Lot",
    position: position1,
    totalStations: 19,
    available: 7,
    breakdown: { level1: 2, level2: 8, dcFast: 2 },
    notes: "Covered lot, close to building A.",
  },
  {
    id: "south-service",
    name: "S Service Rd W Parking Lot",
    position: position2,
    totalStations: 19,
    available: 3,
    breakdown: { level1: 4, level2: 6, dcFast: 6 },
    notes: "Large lot; several DC fast bays (often busy).",
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeLotId, setActiveLotId] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const listRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const navigate = useNavigate();

  const focusLotOnMap = (lot: Lot) => {
    if (!mapRef.current) return;
    mapRef.current.setView(lot.position, 14, { animate: true });
    setActiveLotId(lot.id);

    const el = listRefs.current[lot.id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring", "ring-white/20");
      setTimeout(() => el.classList.remove("ring", "ring-white/20"), 1400);
    }
  };

  const percentAvailable = (lot: Lot) =>
    lot.totalStations === 0
      ? 0
      : Math.round((lot.available / lot.totalStations) * 100);

  const handleMapCreated = (map: L.Map) => {
    mapRef.current = map;
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 relative z-10">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-3">
          <VinFastLogo />
          <h1 className="text-xl md:text-2xl font-bold">VinFast</h1>
        </div>

        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative">
          <Bell className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Banner */}
        <div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0c3b6e] via-[#154a85] to-[#4a7ba7] p-6 md:p-8 lg:p-10"
          style={{ height: "490px" }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-white">
            Find Free Charging Stations
          </h4>
          <div className="my-leaflet-map">
            <MapContainer
              center={position1}
              zoom={9.9}
              style={{ height: "400px", width: "100%" }}
              scrollWheelZoom={true}
              whenCreated={handleMapCreated}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <Marker position={position1}>
                <Popup>
                  Vinfast Charging Station <br /> 5505 Ambler Dr | Route
                </Popup>
              </Marker>
              <Marker position={waypoints[0]} icon={customIcon}>
                <Popup>You are here.</Popup>
              </Marker>
              <Marker position={position2}>
                <Popup>
                  Vinfast Charging Station <br /> 2270 S Service Rd W | Route
                </Popup>
              </Marker>
              <RoutingControl waypoints={waypoints} />
            </MapContainer>
          </div>
        </div>

        {/* Charging Station Section (replaces App Library & Car Controls) */}
        <section className="mb-8 mt-6">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Nearby Parking Lots
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LOTS.map((lot) => {
              const pct = percentAvailable(lot);
              return (
                <div
                  key={lot.id}
                  ref={(el) => (listRefs.current[lot.id] = el)}
                  className={`bg-gradient-to-br ${
                    activeLotId === lot.id
                      ? "from-white/6 to-white/4 ring-1 ring-white/8"
                      : "from-white/4 to-white/2/0"
                  } backdrop-blur-sm rounded-2xl p-4 shadow transition cursor-pointer`}
                  onClick={() => focusLotOnMap(lot)}
                >
                  <h4 className="text-lg font-semibold">{lot.name}</h4>
                  <p className="text-xs text-gray-300 mt-1">{lot.notes}</p>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-400 uppercase">
                        Total stations
                      </div>
                      <div className="text-2xl font-bold">
                        {lot.totalStations}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase">
                        Available
                      </div>
                      <div className="text-2xl font-bold text-green-300">
                        {lot.available}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 w-full bg-white/6 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    {pct}% available
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="bg-white/4 rounded-lg p-2 text-center">
                      <div className="text-sm text-gray-300">Level 1</div>
                      <div className="text-lg font-semibold">
                        {lot.breakdown.level1}
                      </div>
                    </div>
                    <div className="bg-white/4 rounded-lg p-2 text-center">
                      <div className="text-sm text-gray-300">Level 2</div>
                      <div className="text-lg font-semibold">
                        {lot.breakdown.level2}
                      </div>
                    </div>
                    <div className="bg-white/4 rounded-lg p-2 text-center">
                      <div className="text-sm text-gray-300">DC Fast</div>
                      <div className="text-lg font-semibold">
                        {lot.breakdown.dcFast}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Discover VinFast Section */}
        <section>
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            DISCOVER VINFAST
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-6 cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">VinFast</p>
                <h4 className="text-3xl md:text-4xl font-bold text-white">
                  VF 8
                </h4>
              </div>
              <div className="relative h-32 md:h-40 lg:h-48 flex items-center justify-center">
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/2023-vinfast-vf8-8311-64638b6f4efeb.jpg?crop=0.837xw:0.707xh;0.0884xw,0.235xh&resize=640:*"
                  alt="VinFast VF 8"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 p-6 cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">VinFast</p>
                <h4 className="text-3xl md:text-4xl font-bold text-white">
                  VF 9
                </h4>
              </div>
              <div className="relative h-32 md:h-40 lg:h-48 flex items-center justify-center">
                <img
                  src="https://static-cms-prod.vinfastauto.ca/2024-12/exterior-color-blue.png"
                  alt="VinFast VF 9"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === "home" ? "text-white" : "text-gray-500"
              }`}
            >
              <Home className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </button>

            <button
              onClick={() => setActiveTab("navigation")}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === "navigation" ? "text-white" : "text-gray-500"
              }`}
            >
              <MapPin className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Navigation</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("service");
                navigate("/service");
              }}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === "service" ? "text-white" : "text-gray-500"
              }`}
            >
              <Wrench className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Service</span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`flex flex-col items-center justify-center py-3 px-2 transition-colors ${
                activeTab === "settings" ? "text-white" : "text-gray-500"
              }`}
            >
              <Settings className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">Settings</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
