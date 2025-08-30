"use client";

import { Card, Row, Col, Avatar, Typography } from "antd";
import Image from "next/image";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

type Attendee = {
  color: string;
  icon?: React.ReactNode;
};

type EventCardProps = {
  time: string;
  title: string;
  author: string;
  location: string;
  attendees: Attendee[];
  attendeesCount: number;
  poster: string;
};

export default function EventCard({
  time,
  title,
  author,
  location,
  attendees,
  attendeesCount,
  poster,
}: EventCardProps) {
  return (
    <Card className="ml-4 relative !bg-[#1a1a1a] !border-[#2c2c2c] rounded-lg mb-6 max-w-full sm:max-w-3xl">
      <Row gutter={16}>
        {/* Left side - Event details */}
        <Col flex="auto">
          <Text className="!text-gray-400 text-sm mb-2 block">{time}</Text>

          <Title level={4} className="!text-white mb-3 !leading-snug">
            {title}
          </Title>

          {/* Author */}
          <Row align="middle" className="mb-3">
            <Avatar
              size={24}
              style={{ backgroundColor: "#f97316" }}
              icon={<UserOutlined />}
              className="mr-2"
            />
            <Text className="!text-gray-300 text-sm">By {author}</Text>
          </Row>

          {/* Location */}
          <Row align="middle" className="mb-3">
            <EnvironmentOutlined className="text-gray-400 mr-2 text-sm" />
            <Text className="!text-gray-300 text-sm">{location}</Text>
          </Row>

          {/* Attendees */}
          <Row align="middle">
            <Avatar.Group
              maxCount={4}
              maxStyle={{ color: "#fff", backgroundColor: "#3b82f6" }}
            >
              {attendees.map((item, idx) => (
                <Avatar
                  key={idx}
                  style={{ backgroundColor: item.color }}
                  icon={item.icon}
                />
              ))}
            </Avatar.Group>
            <Text className="!text-gray-400 text-sm ml-2">
              +{attendeesCount}
            </Text>
          </Row>
        </Col>

        {/* Right side - Event poster */}
        <Col flex="200px">
          <Image
            src={poster}
            alt="Event Poster"
            width={200}
            height={120}
            className="rounded-md object-cover"
          />
        </Col>
      </Row>
    </Card>
  );
}
