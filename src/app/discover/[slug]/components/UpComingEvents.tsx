"use client";

import { Card, Typography, Tag, Row, Col, Avatar } from "antd";
import { RightOutlined } from "@ant-design/icons";
import BannerCard from "@/components/Kit/Cards/BannerCards/BannerCard";

const { Text } = Typography;

const UpcomingEvents = () => {
  return (
    <div className=" mx-auto w-full max-w-5xl">
      <div className="mb-10 h-px bg-white/10" />

      <h3 className="text-white text-xl font-bold mb-4">
        Upcoming Major Events
      </h3>

      {/* Event Card */}
      <BannerCard />
      <div className="mt-10 h-px bg-white/10" />
    </div>
  );
};

export default UpcomingEvents;
