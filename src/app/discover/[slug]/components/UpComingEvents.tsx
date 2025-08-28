"use client";

import { Card, Typography, Tag, Row, Col, Avatar } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Text } = Typography;

const UpcomingEvents = () => {
  return (
    <div className=" mx-auto w-full max-w-5xl">
      <div className="mb-10 h-px bg-white/10" />

      <h3 className="text-white text-xl font-bold mb-4">
        Upcoming Major Events
      </h3>

      {/* Event Card */}
      <Card
        className="bg-[#1a1a1a] rounded-xl border-0 text-white 
        transition-all duration-300 hover:bg-[#262626] hover:shadow-lg hover:scale-[1.01] cursor-pointer"
      >
        {/* Header (Month) */}
        <div className="mb-2">
          <Tag color="orange" className="rounded-full px-3 py-0.5">
            September
          </Tag>
        </div>

        {/* Event Details */}
        <Row gutter={16} align="middle" className="text-white">
          {/* Left: Logo */}
          <Col>
            <Avatar
              shape="square"
              size={60}
              className="bg-white"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Artificial_Intelligence_Logo.svg/1200px-Artificial_Intelligence_Logo.svg.png"
            />
          </Col>

          {/* Middle: Event Info */}
          <Col flex="auto">
            <Text className="text-white font-semibold text-base">
              Zurich AI Festival
            </Text>
            <br />
            <Text className="text-gray-400">19 Events · 240 Subscribers</Text>
          </Col>

          {/* Right: Location + Date */}
          <Col className="text-right flex gap-4">
            <Text className="text-gray-400 block">Zürich, Switzerland</Text>
            <Text className="text-gray-400">9/29 — 10/4</Text>
          </Col>

          {/* Arrow */}
          <Col>
            <RightOutlined className="text-gray-400 text-base" />
          </Col>
        </Row>
      </Card>
      <div className="mt-10 h-px bg-white/10" />
    </div>
  );
};

export default UpcomingEvents;
