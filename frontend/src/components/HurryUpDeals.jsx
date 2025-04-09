import React from "react";

const HurryUpDeals = () => {
  return (
    <div className="py-8 px-4 bg-white mt-10">
      <h2 className="text-2xl font-bold mb-6  md:ml-30  md:mr-30">Hurry Up Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AirPods Experience */}
        <div className="bg-gray-900 rounded-xl h-64 p-6 flex items-center justify-between gap-4 relative overflow-hidden md:ml-30"> 
          <div className="z-10 text-left text-white max-w-[60%]">
            <h3 className="text-2xl font-bold mb-3"> Experience</h3>
            <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow">
              Shop Now
            </button>
          </div>
          <img
          src="./src/assets/PC-BANER-1.svg"
          lt="AirPods"
          className="w-80 h-auto z-10" />
          {/* Overlay (oscurecer fondo) */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-xl z-0"></div>
        </div>

        {/* Wireless Charger */}
        <div className="bg-purple-100 rounded-xl h-64 p-6 flex items-center justify-between gap-4 md:mr-30"> 
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              New 3 in 1 <br /> Wireless 
            </h3>
            <p className="text-gray-600 mb-4">Save up to 50% off on new arrivals.</p>
            <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow">
              Shop Now
            </button>
          </div>
          <img
            src="/wireless-charger.png"
            alt="3 in 1 Wireless Charger"
            className="w-36 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HurryUpDeals;
