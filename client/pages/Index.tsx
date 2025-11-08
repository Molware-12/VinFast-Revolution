import {
  Bell,
  Home,
  MapPin,
  Settings,
  Wrench,
  User,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
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
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20 15L25 17.5V22.5L20 25L15 22.5V17.5L20 15Z"
              fill="white"
            />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold">VinFast ID</h1>
        </div>

        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative">
          <Bell className="w-6 h-6 text-white" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24 md:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Banner */}
        <div className="mt-6 mb-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0c3b6e] via-[#154a85] to-[#4a7ba7] p-6 md:p-8 lg:p-10">
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                  More about our app
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-32 md:w-48 lg:w-64">
                  <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
                      <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                        <div className="aspect-video bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white/60" />
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Add Your Vehicle Section */}
        <section className="mb-8">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            ADD YOUR VEHICLE
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
                  DRIVE WITH VINFAST
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
                  CLAIM OWNER CONTROL
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
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&auto=format&fit=crop&q=80"
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
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=80"
                  alt="VinFast VF 9"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/5">
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
