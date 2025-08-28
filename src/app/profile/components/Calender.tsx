"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Calendar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const Calender = () => {
  const [viewType, setViewType] = useState("upcoming");
  const [value, setValue] = useState<Dayjs>(dayjs());

  // ✅ Custom header for Ant Design Calendar
  const headerRender = ({ value, onChange }: any) => {
    const current = value.clone();

    const prevMonth = () => {
      const newValue = current.subtract(1, "month");
      setValue(newValue);
      onChange(newValue);
    };

    const nextMonth = () => {
      const newValue = current.add(1, "month");
      setValue(newValue);
      onChange(newValue);
    };

    return (
      <div className="flex items-center justify-between px-3 py-2">
        {/* Left: Month + Year */}
        <h3 className="text-white font-semibold">
          {current.format("MMMM YYYY")}
        </h3>

        {/* Right: Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-1 rounded hover:bg-white/10 text-white"
          >
            <LeftOutlined />
          </button>
          <button
            onClick={nextMonth}
            className="p-1 rounded hover:bg-white/10 text-white"
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="mb-4 flex justify-center">
      <div className="w-[270px] border border-gray-700 p-2">
        <div className="overflow-hidden">
          <Calendar
            value={value}
            onChange={(val) => setValue(val)}
            fullscreen={false}
            headerRender={headerRender}
            className={`
                text-white
                [&_.ant-picker-panel]:bg-transparent 
                [&_.ant-picker-body]:bg-transparent 
                [&_.ant-picker-content]:bg-transparent 
                [&_.ant-picker-cell]:bg-transparent
                [&_.ant-picker-cell-inner]:bg-transparent 
                [&_.ant-picker-calendar-date]:bg-transparent
              `}
          />
        </div>

        {/* Toggle Buttons */}
        <div className="flex mt-4">
          <button
            className={`flex-1 py-2 px-4 text-xs font-medium rounded-l-lg transition-colors ${
              viewType === "upcoming"
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setViewType("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`flex-1 py-2 px-4 text-xs font-medium rounded-r-lg transition-colors ${
              viewType === "past"
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setViewType("past")}
          >
            Past
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
