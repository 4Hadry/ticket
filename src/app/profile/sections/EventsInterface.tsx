"use client";
import React from "react";
import { Avatar, Typography, Row, Col } from "antd";
import Image from "next/image";
import RightSidbar from "../components/RightSidbar";
import { EVENTS } from "@/lib/discoverData";

const { Title, Text } = Typography;

interface EventItem {
  id: number;
  title: string;
  date: string;
  day: string;
  time: string;
  endTime: string;
  authors: string;
  location: string;
  price?: string;
}

const EventsInterface: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-5xl text-white border-t border-white/10 mt-8">
      <Row gutter={0} wrap={false}>
        {/* Left Side - Events */}
        <Col flex="auto" className="p-8 pr-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Title level={2} className="!text-white !mb-0">
              Events
            </Title>
          </div>

          {/* Events List */}
          <div className="space-y-8">
            {EVENTS.map((event, index: number) => (
              <div key={event.id}>
                {/* Date Header */}
                {(index === 0 || EVENTS[index - 1].date !== event.date) && (
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-4"></div>
                    <Text className="!text-white font-medium text-lg">
                      {event.date}
                    </Text>
                    <Text className="text-gray-400 ml-2 text-lg">
                      {event.day}
                    </Text>
                  </div>
                )}

                {/* Event Card */}
                <div className="bg-card rounded-lg border border-gray-800 p-6 hover:bg-gray-750 transition-colors cursor-pointer ml-7">
                  <Row gutter={16} align="middle" wrap={false}>
                    {/* Left side - Event details */}
                    <Col flex="auto">
                      <div className="text-gray-400 text-sm mb-3">
                        <Text className="!text-white">{event.time}</Text>
                        <span className="mx-2">•</span>
                        <Text>{event.endTime}</Text>
                      </div>

                      <Title
                        level={4}
                        className="!text-white mb-4 !leading-tight hover:!text-blue-400 transition-colors"
                      >
                        {event.title}
                      </Title>

                      {/* Authors */}
                      <div className="flex items-center mb-4">
                        <div className="flex -space-x-2 mr-3">
                          <Avatar
                            size={24}
                            style={{ backgroundColor: "#f97316" }}
                          >
                            U
                          </Avatar>
                          {event.id === 2 && (
                            <Avatar
                              size={24}
                              style={{ backgroundColor: "#3b82f6" }}
                            >
                              A
                            </Avatar>
                          )}
                        </div>
                        <Text className="text-gray-300 text-sm">
                          {event.authors}
                        </Text>
                      </div>

                      {/* Location */}
                      <div className="flex items-center mb-4">
                        <Text className="text-gray-300 text-sm">
                          {event.location}
                        </Text>
                      </div>

                      {/* Price */}
                      {event.price && (
                        <Text className="!text-green-500 font-semibold">
                          {event.price}
                        </Text>
                      )}
                    </Col>

                    {/* Right side - Event image */}
                    <Col flex="none">
                      <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={"/assets/images/cover.png"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          width={200}
                          height={200}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </Col>

        {/* Right Sidebar */}
        <Col flex="300px">
          <RightSidbar />
        </Col>
      </Row>
    </div>
  );
};

export default EventsInterface;
