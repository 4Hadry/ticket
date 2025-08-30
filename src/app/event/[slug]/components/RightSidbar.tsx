"use client";
import SubmitEventActions from "@/components/UI/SubmitEventBtn";
import Calender from "./Calender";
import Map from "./Map";

const RightSidbar = () => {
  return (
    <div className="w-70 sticky top-0 max-h-screen overflow-y-auto mt-6">
      <div className="flex justify-center mb-2 ">
        <SubmitEventActions show={true} />
      </div>

      {/* ✅ Calendar Section */}
      <Calender />

      {/* ✅ Map Section  */}
      <Map />
    </div>
  );
};

export default RightSidbar;
