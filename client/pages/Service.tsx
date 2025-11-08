import { Battery, MapPin, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white pb-24">
      {/* Header */}
      <header className="px-4 py-6 md:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Top Preview Section */}
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c3b6e] via-[#154a85] to-[#2d5a8f] p-6 mb-6">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-[#2a3f5f] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
              <div className="relative z-10 w-full max-w-xs mx-auto">
                <div className="bg-[#1a2332]/90 backdrop-blur-md rounded-xl p-4 text-sm">
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center justify-between py-2 border-b border-gray-600">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                        </svg>
                        Service Booking
                      </span>
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-600">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                        </svg>
                        Roadside Assistance
                      </span>
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-600">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                        </svg>
                        Vehicle Alert
                      </span>
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </div>
                    <div className="pt-2 text-gray-400 text-xs uppercase tracking-wide">
                      Other Services
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                        </svg>
                        Test Drive
                      </span>
                      <ChevronLeft className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            VinFast application allows you to book services and pay your bills
            online for many services such as maintenance - repair, roadside
            assistance... It helps customers save time and stay up-to-date to
            any information easily.
          </p>
        </div>

        {/* Battery Status Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Battery className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Battery Status</h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c3b6e] via-[#154a85] to-[#2d5a8f] p-6 mb-4">
            <div className="aspect-[16/10] md:aspect-[16/9] bg-[#0a1929] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.3),transparent)]"></div>
              </div>
              <div className="relative z-10 w-full max-w-sm mx-auto px-4">
                <div className="bg-[#1a2332]/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Battery & Charging</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded bg-gray-700"></div>
                      <div className="w-6 h-6 rounded bg-gray-700"></div>
                    </div>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <svg
                        className="w-48 h-32"
                        viewBox="0 0 200 120"
                        fill="none"
                      >
                        <ellipse
                          cx="100"
                          cy="100"
                          rx="80"
                          ry="15"
                          fill="#0a1929"
                          opacity="0.5"
                        />
                        <path
                          d="M60 80 L60 50 L140 50 L140 80 L130 100 L70 100 Z"
                          fill="#374151"
                        />
                        <path
                          d="M65 55 L135 55 L135 75 L125 95 L75 95 L65 75 Z"
                          fill="#1f2937"
                        />
                        <rect
                          x="50"
                          y="60"
                          width="15"
                          height="8"
                          rx="2"
                          fill="#10b981"
                        />
                        <rect
                          x="135"
                          y="60"
                          width="15"
                          height="8"
                          rx="2"
                          fill="#10b981"
                        />
                        <path
                          d="M80 75 L120 75 L115 85 L85 85 Z"
                          fill="#2563eb"
                        />
                        <path
                          d="M75 65 L80 75 L120 75 L125 65 Z"
                          fill="#1e40af"
                          opacity="0.8"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-400 mb-1 flex items-center justify-center gap-2">
                      <Battery className="w-4 h-4 text-green-500" />4 hrs 35 min
                      left to reach 100%
                    </p>
                    <p className="text-xs text-gray-500">
                      Charging Target: 100%
                    </p>
                  </div>

                  <div className="flex justify-around text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">
                        20<span className="text-lg">%</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Current</div>
                    </div>
                    <div className="w-px bg-gray-700"></div>
                    <div>
                      <div className="text-3xl font-bold text-white">
                        150<span className="text-lg">km</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Range</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Check the battery status to book charging timely and monitor the
            charging process easily, anytime & anywhere.
          </p>
        </section>

        {/* Navigation Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Navigation</h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c3b6e] via-[#154a85] to-[#2d5a8f] p-6 mb-4">
            <div className="aspect-[16/10] md:aspect-[16/9] bg-[#0a1929] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.3),transparent)]"></div>
              </div>
              <div className="relative z-10 w-full max-w-sm mx-auto px-4">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gray-100 p-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search here"
                        className="flex-1 text-sm outline-none bg-transparent text-gray-700"
                        disabled
                      />
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2 p-2 bg-gray-50">
                    <button className="flex-1 bg-gray-700 text-white text-xs py-1.5 px-3 rounded-full">
                      Charging
                    </button>
                    <button className="flex-1 bg-gray-300 text-gray-700 text-xs py-1.5 px-3 rounded-full">
                      Service Center
                    </button>
                    <button className="flex-1 bg-gray-300 text-gray-700 text-xs py-1.5 px-3 rounded-full">
                      Parking
                    </button>
                  </div>
                  <div className="aspect-square bg-gray-100 relative">
                    <div className="absolute inset-0 opacity-30">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 300 300"
                        fill="none"
                      >
                        <path
                          d="M50 150 Q100 100 150 150 T250 150"
                          stroke="#94a3b8"
                          strokeWidth="2"
                        />
                        <path
                          d="M150 50 Q200 100 150 150 T150 250"
                          stroke="#94a3b8"
                          strokeWidth="2"
                        />
                        <circle cx="150" cy="150" r="8" fill="#3b82f6" />
                      </svg>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            You can locate your car, find the fastest route to charging stations
            and track your trip history.
          </p>
        </section>
      </main>
    </div>
  );
}
