"use client";

import React from "react";
import { Button, Input, Avatar, Row, Col, Card, Typography } from "antd";
import Image from "next/image";
import {
  SearchOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import EventCard from "@/components/Kit/Cards/EventCards/EventCard";
import EventList from "@/app/[slug]/components/EventList";
import { Events } from "@/lib/discoverData";

type Nearby = {
  title: string;
};
export const avatarData = [
  { color: "#3b82f6", icon: <UserOutlined /> },
  { color: "#10b981", icon: <UserOutlined /> },
  { color: "#8b5cf6", icon: <UserOutlined /> },
  { color: "#ef4444", icon: <UserOutlined /> },
];

const { Title, Text } = Typography;

const NearbyEvents = ({ title }: Nearby) => {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Row gutter={24}>
        {/* Left Side - Events */}
        <Col flex="auto">
          <EventList events={Events} showActions={false} />
        </Col>

        {/* Right Sidebar */}
        <Col flex="320px">
          <div className="p-6">
            {/* AI Section */}
            <Card className="!bg-[#1a1a1a] !border-[#2c2c2c] rounded-lg mb-6">
              <Row justify="start" className="mb-4">
                <Avatar size={64} style={{ backgroundColor: "#ec4899" }}>
                  <span className="text-white text-xl">{title}</span>
                </Avatar>
              </Row>

              <Title level={3} className="!text-white text-start mb-4">
                {title}
              </Title>
              <Text className="!text-gray-300 text-sm text-start mb-6 block leading-relaxed">
                Subscribe to stay up-to-date with the latest events, calendars
                and other updates.
              </Text>

              {/* Email Input */}
              <Input
                size="large"
                placeholder="me@email.com"
                className="!bg-[#1C1C1C] !border-[#2C2C2C] !text-white !placeholder-[#A9AFB8] rounded-full mb-3"
              />

              <Button
                type="primary"
                size="large"
                className="w-full rounded-full font-semibold bg-white text-black"
              >
                Subscribe
              </Button>
            </Card>

            {/* Map Section */}
            <Card
              className="w-full h-48 rounded-xl bg-gray-800/40 border border-white/10 flex items-center justify-center"
              bodyStyle={{ padding: 0 }}
            >
              <span className="text-gray-500">Map Coming Soon</span>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NearbyEvents;
