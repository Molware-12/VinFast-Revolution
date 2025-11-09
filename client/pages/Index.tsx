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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutingControl} from "@/hooks/use-routing";


export default function Index() {
  const position1: [number, number] = [43.64, -79.63];
  const position2: [number, number] = [43.41, -79.73];
  const waypoints: [number, number][] = [
    [43.7, -79.4],      // Start point
    [43.64, -79.63],     // End point
  ];
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 relative z-10">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center gap-3">
          <VinFastLogo />
          <h1 className="text-xl md:text-2xl font-bold">
            Good Morning, David 😊
          </h1>
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
            style={{ height: "400px", width: "100%" 
            
          }}
            scrollWheelZoom={true}
            
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
            <Marker position={waypoints[0]}>
              <Popup>
                Vinfast Charging Station <br /> 5505 Ambler Dr | Route
              </Popup>
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

        {/* Add Your Vehicle Section */}
        <section className="mb-8">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 mt-6">
            My Vinfast VF9
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e5bb8] to-[#2d7fe0] p-6 md:p-8 text-left transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M40 25C31.716 25 25 31.716 25 40C25 48.284 31.716 55 40 55C48.284 55 55 48.284 55 40C55 31.716 48.284 25 40 25ZM40 50C34.486 50 30 45.514 30 40C30 34.486 34.486 30 40 30C45.514 30 50 34.486 50 40C50 45.514 45.514 50 40 50Z"
                      fill="white"
                    />
                    <circle cx="40" cy="40" r="5" fill="white" />
                  </svg>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  App Library
                </h4>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e5bb8] to-[#2d7fe0] p-6 md:p-8 text-left transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M40 25C31.716 25 25 31.716 25 40C25 48.284 31.716 55 40 55C48.284 55 55 48.284 55 40C55 31.716 48.284 25 40 25ZM40 30C42.761 30 45 32.239 45 35C45 37.761 42.761 40 40 40C37.239 40 35 37.761 35 35C35 32.239 37.239 30 40 30ZM40 50C35.858 50 32.236 47.761 30.465 44.375C30.531 40.875 37.5 39 40 39C42.487 39 49.469 40.875 49.535 44.375C47.764 47.761 44.142 50 40 50Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  Car Controls
                </h4>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
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
