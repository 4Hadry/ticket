import React from "react";

const Map = () => {
  return (
    <div className="">
      <div className="bg-gray-800 rounded-lg p-4 h-64">
        <div className="w-full h-full bg-gray-700 rounded relative overflow-hidden">
          {/* Map pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 300 200">
              <path
                d="M50 50 L100 45 L150 55 L200 50 L250 60 L280 80 L270 120 L240 140 L200 145 L150 140 L100 135 L50 130 Z"
                fill="none"
                stroke="#6B7280"
                strokeWidth="1"
              />
              <path
                d="M80 80 L120 75 L160 85 L180 90 L170 110 L140 115 L100 110 Z"
                fill="none"
                stroke="#6B7280"
                strokeWidth="0.5"
              />
              <path
                d="M30 100 L70 95 L90 105 L85 125 L60 130 L35 125 Z"
                fill="none"
                stroke="#6B7280"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Location markers */}
          <div className="absolute" style={{ top: "45%", left: "30%" }}>
            <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>

          <div className="absolute" style={{ top: "35%", right: "35%" }}>
            <div className="w-4 h-4 bg-pink-500 rounded-full border-2 border-white"></div>
          </div>

          <div className="absolute" style={{ bottom: "30%", right: "20%" }}>
            <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 text-xs text-gray-400">WIS</div>
          <div className="absolute top-8 right-12 text-xs text-gray-400">
            MICH
          </div>
          <div className="absolute bottom-12 left-8 text-xs text-gray-400">
            MO.
          </div>
          <div className="absolute bottom-8 right-8 text-xs text-gray-400">
            TENN
          </div>
          <div className="absolute top-12 left-16 text-xs text-gray-400">
            ILL
          </div>
          <div className="absolute center text-xs text-gray-400">IND</div>
          <div className="absolute top-16 right-16 text-xs text-gray-400">
            OHIO
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
