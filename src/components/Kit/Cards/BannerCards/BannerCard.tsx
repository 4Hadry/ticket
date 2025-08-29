"use client";

import { Card, Typography, Row, Col, Avatar } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Text } = Typography;

// 👉 Type definitions (Best Practice)
interface BannerCardProps {
  month?: string;
  logo?: string;
  title?: string;
  stats?: string;
  location?: string;
  dateRange?: string;
}

// 👉 Reusable BannerCard Component
const BannerCard: React.FC<BannerCardProps> = ({
  month = "September",
  logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Artificial_Intelligence_Logo.svg/1200px-Artificial_Intelligence_Logo.svg.png",
  title = "Zurich AI Festival",
  stats = "19 Events · 240 Subscribers",
  location = "Zürich, Switzerland",
  dateRange = "9/29 — 10/4",
}) => {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Card
        className="bg-secondary rounded-xl border-0 text-white overflow-hidden p-0"
        bodyStyle={{ padding: 0 }}
      >
        {/* Header */}
        <div className="w-full bg-[#05121E] px-4 py-2">
          <Text className="text-white font-semibold">{month}</Text>
        </div>

        {/* Body */}
        <div className="transition-all duration-300 hover:bg-[#05121E] hover:shadow-lg hover:scale-[1.01] cursor-pointer p-4">
          <Row gutter={16} align="middle" className="text-white">
            {/* Left: Logo */}
            <Col>
              <Avatar
                shape="square"
                size={60}
                className="bg-white"
                src={logo}
              />
            </Col>

            {/* Middle: Event Info */}
            <Col flex="auto">
              <Text className="text-white font-semibold text-base">
                {title}
              </Text>
              <br />
              <Text className="text-gray-400">{stats}</Text>
            </Col>

            {/* Right: Location + Date */}
            <Col className="text-right flex gap-4">
              <Text className="text-gray-400 block">{location}</Text>
              <Text className="text-gray-400">{dateRange}</Text>
            </Col>

            {/* Arrow */}
            <Col>
              <ArrowRightOutlined className="text-gray-400 text-base" />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default BannerCard;
