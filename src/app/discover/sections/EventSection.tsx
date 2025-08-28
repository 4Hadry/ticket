"use client";

import { useState } from "react";
import {
  BankOutlined,
  HomeOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const tabs = [
  "Asia & Pacific",
  "Europe",
  "Africa",
  "North America",
  "South America",
];

const eventsData: Record<
  string,
  { city: string; events: number; icon: React.ReactNode; color: string }[]
> = {
  "Asia & Pacific": [
    { city: "Bangkok", events: 13, icon: <BankOutlined />, color: "#f97316" },
    { city: "Bengaluru", events: 24, icon: <HomeOutlined />, color: "#a16207" },
    {
      city: "Dubai",
      events: 11,
      icon: <EnvironmentOutlined />,
      color: "#db2777",
    },
    {
      city: "Hong Kong",
      events: 31,
      icon: <GlobalOutlined />,
      color: "#06b6d4",
    },
    {
      city: "Honolulu",
      events: 23,
      icon: <GlobalOutlined />,
      color: "#3b82f6",
    },
    { city: "Jakarta", events: 9, icon: <GlobalOutlined />, color: "#fb923c" },
    { city: "Manila", events: 11, icon: <GlobalOutlined />, color: "#14b8a6" },
    {
      city: "Melbourne",
      events: 12,
      icon: <GlobalOutlined />,
      color: "#22c55e",
    },
    { city: "Mumbai", events: 10, icon: <GlobalOutlined />, color: "#ef4444" },
    {
      city: "New Delhi",
      events: 10,
      icon: <GlobalOutlined />,
      color: "#f97316",
    },
    { city: "Seoul", events: 22, icon: <GlobalOutlined />, color: "#3b82f6" },
    {
      city: "Singapore",
      events: 42,
      icon: <GlobalOutlined />,
      color: "#16a34a",
    },
    { city: "Sydney", events: 11, icon: <GlobalOutlined />, color: "#eab308" },
    { city: "Taipei", events: 12, icon: <GlobalOutlined />, color: "#6366f1" },
    {
      city: "Tel Aviv-Yafo",
      events: 16,
      icon: <GlobalOutlined />,
      color: "#f97316",
    },
    { city: "Tokyo", events: 15, icon: <GlobalOutlined />, color: "#f43f5e" },
    {
      city: "Ho Chi Minh",
      events: 8,
      icon: <GlobalOutlined />,
      color: "#f87171",
    },
    {
      city: "Kuala Lumpur",
      events: 9,
      icon: <GlobalOutlined />,
      color: "#9333ea",
    },
  ],
  Europe: [
    { city: "London", events: 20, icon: <BankOutlined />, color: "#2563eb" },
    { city: "Paris", events: 18, icon: <HomeOutlined />, color: "#ec4899" },
  ],
  Africa: [
    { city: "Cairo", events: 12, icon: <BankOutlined />, color: "#eab308" },
    {
      city: "Cape Town",
      events: 10,
      icon: <GlobalOutlined />,
      color: "#22c55e",
    },
  ],
  "North America": [
    { city: "New York", events: 25, icon: <HomeOutlined />, color: "#3b82f6" },
    { city: "Toronto", events: 14, icon: <BankOutlined />, color: "#ef4444" },
  ],
  "South America": [
    { city: "São Paulo", events: 19, icon: <HomeOutlined />, color: "#ea580c" },
    {
      city: "Buenos Aires",
      events: 15,
      icon: <GlobalOutlined />,
      color: "#a855f7",
    },
  ],
};

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("Asia & Pacific");

  return (
    <div className=" text-white py-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">Explore Local Events</h2>

        {/* Custom Tabs */}
        <div className="flex justify-start gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition 
                ${
                  activeTab === tab
                    ? "bg-[#2d2d2d] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-6 justify-center">
          {eventsData[activeTab]?.map((event, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                style={{ background: event.color }}
              >
                {event.icon}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">{event.city}</p>
                <p className="text-xs text-gray-400">{event.events} Events</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
