"use client";

import { useState } from "react";
import {
  BankOutlined,
  HomeOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Tabs, Typography, Row, Col, Avatar } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

const tabs = [
  "Asia & Pacific",
  "Europe",
  "Africa",
  "North America",
  "South America",
];
const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-") // space → dash
    .replace(/[^a-z0-9-]/g, "");
export const eventsData: Record<
  string,
  {
    city: string;
    slug: string;
    events: number;
    icon: React.ReactNode;
    color: string;
  }[]
> = {
  "Asia & Pacific": [
    {
      city: "Bangkok",
      slug: slugify("Bangkok"),
      events: 13,
      icon: <BankOutlined />,
      color: "#f97316",
    },
    {
      city: "Bengaluru",
      slug: slugify("Bengaluru"),
      events: 24,
      icon: <HomeOutlined />,
      color: "#a16207",
    },
    {
      city: "Dubai",
      slug: slugify("Dubai"),
      events: 11,
      icon: <EnvironmentOutlined />,
      color: "#db2777",
    },
    {
      city: "Hong Kong",
      slug: slugify("Hong Kong"),
      events: 31,
      icon: <GlobalOutlined />,
      color: "#06b6d4",
    },
    {
      city: "Honolulu",
      slug: slugify("Honolulu"),
      events: 23,
      icon: <GlobalOutlined />,
      color: "#3b82f6",
    },
    {
      city: "Jakarta",
      slug: slugify("Jakarta"),
      events: 9,
      icon: <GlobalOutlined />,
      color: "#fb923c",
    },
    {
      city: "Manila",
      slug: slugify("Manila"),
      events: 11,
      icon: <GlobalOutlined />,
      color: "#14b8a6",
    },
    {
      city: "Melbourne",
      slug: slugify("Melbourne"),
      events: 12,
      icon: <GlobalOutlined />,
      color: "#22c55e",
    },
    {
      city: "Mumbai",
      slug: slugify("Mumbai"),
      events: 10,
      icon: <GlobalOutlined />,
      color: "#ef4444",
    },
    {
      city: "New Delhi",
      slug: slugify("New Delhi"),
      events: 10,
      icon: <GlobalOutlined />,
      color: "#f97316",
    },
    {
      city: "Seoul",
      slug: slugify("Seoul"),
      events: 22,
      icon: <GlobalOutlined />,
      color: "#3b82f6",
    },
    {
      city: "Singapore",
      slug: slugify("Singapore"),
      events: 42,
      icon: <GlobalOutlined />,
      color: "#16a34a",
    },
    {
      city: "Sydney",
      slug: slugify("Sydney"),
      events: 11,
      icon: <GlobalOutlined />,
      color: "#eab308",
    },
    {
      city: "Taipei",
      slug: slugify("Taipei"),
      events: 12,
      icon: <GlobalOutlined />,
      color: "#6366f1",
    },
    {
      city: "Tel Aviv-Yafo",
      slug: slugify("Tel Aviv-Yafo"),
      events: 16,
      icon: <GlobalOutlined />,
      color: "#f97316",
    },
    {
      city: "Tokyo",
      slug: slugify("Tokyo"),
      events: 15,
      icon: <GlobalOutlined />,
      color: "#f43f5e",
    },
    {
      city: "Ho Chi Minh",
      slug: slugify("Ho Chi Minh"),
      events: 8,
      icon: <GlobalOutlined />,
      color: "#f87171",
    },
    {
      city: "Kuala Lumpur",
      slug: slugify("Kuala Lumpur"),
      events: 9,
      icon: <GlobalOutlined />,
      color: "#9333ea",
    },
  ],
  Europe: [
    {
      city: "London",
      slug: slugify("London"),
      events: 20,
      icon: <BankOutlined />,
      color: "#2563eb",
    },
    {
      city: "Paris",
      slug: slugify("Paris"),
      events: 18,
      icon: <HomeOutlined />,
      color: "#ec4899",
    },
  ],
  Africa: [
    {
      city: "Cairo",
      slug: slugify("Cairo"),
      events: 12,
      icon: <BankOutlined />,
      color: "#eab308",
    },
    {
      city: "Cape Town",
      slug: slugify("Cape Town"),
      events: 10,
      icon: <GlobalOutlined />,
      color: "#22c55e",
    },
  ],
  "North America": [
    {
      city: "New York",
      slug: slugify("New York"),
      events: 25,
      icon: <HomeOutlined />,
      color: "#3b82f6",
    },
    {
      city: "Toronto",
      slug: slugify("Toronto"),
      events: 14,
      icon: <BankOutlined />,
      color: "#ef4444",
    },
  ],
  "South America": [
    {
      city: "São Paulo",
      slug: slugify("São Paulo"),
      events: 19,
      icon: <HomeOutlined />,
      color: "#ea580c",
    },
    {
      city: "Buenos Aires",
      slug: slugify("Buenos Aires"),
      events: 15,
      icon: <GlobalOutlined />,
      color: "#a855f7",
    },
  ],
};

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("Asia & Pacific");

  return (
    <div className="text-white py-12">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <Title level={3} className="!text-2xl !font-semibold !text-white mb-6">
          Explore Local Events
        </Title>

        {/* Ant Design Tabs */}
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          className="
            [&_.ant-tabs-nav]:mb-10 
            [&_.ant-tabs-nav::before]:!hidden 
            [&_.ant-tabs-ink-bar]:!hidden
            [&_.ant-tabs-tab]:!px-3 
            [&_.ant-tabs-tab]:!py-1.5 
            [&_.ant-tabs-tab]:!rounded-md 
            [&_.ant-tabs-tab-btn]:!text-sm 
            [&_.ant-tabs-tab-btn]:!font-medium 
            [&_.ant-tabs-tab-active]:!bg-[#2d2d2d] 
            [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:!text-white 
            [&_.ant-tabs-tab-btn]:!text-gray-400 
            hover:[&_.ant-tabs-tab-btn]:!text-white
          "
          items={tabs.map((tab) => ({
            key: tab,
            label: tab,
          }))}
        />

        {/* Grid using Ant Design Row/Col */}
        <Row gutter={[32, 24]} justify="start">
          {eventsData[activeTab]?.map((event, idx) => (
            <Col xs={12} sm={8} md={6} key={idx}>
              <Link
                href={`/${event.slug}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/40 transition-all cursor-pointer"
              >
                <Avatar
                  size={40}
                  style={{ backgroundColor: event.color }}
                  icon={event.icon}
                />
                <div className="text-left">
                  <Text className="!text-sm !font-medium !text-white">
                    {event.city}
                  </Text>
                  <br />
                  <Text className="!text-xs !text-gray-400">
                    {event.events} Events
                  </Text>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
