"use client";
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, Calendar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Calender from "./Calender";
import Map from "./Map";
import { Wifi } from "lucide-react";

const RightSidbar = () => {
  return (
    <div className="w-70 sticky top-0 max-h-screen overflow-y-auto mt-6">
      <div className="flex justify-between">
        <Button
          type="primary"
          className="bg-card border-gray-600 hover:bg-gray-200 mb-2 w-[75%]"
          style={{ backgroundColor: "#374151", borderColor: "#4B5563" }}
        >
          + Submit Event
        </Button>
        <Button
          type="primary"
          className="bg-card border-gray-600 hover:bg-gray-200 mb-2 w-[20%]"
          style={{ backgroundColor: "#374151", borderColor: "#4B5563" }}
        >
          <Wifi strokeWidth={1.5} />
        </Button>
      </div>

      {/* ✅ Calendar Section */}
      <Calender />

      {/* ✅ Map Section  */}
      <Map />
    </div>
  );
};

export default RightSidbar;
