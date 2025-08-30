"use client";
import React from "react";
import { Avatar, Typography, Row, Col } from "antd";
import RightSidbar from "../components/RightSidbar";
import { Events } from "@/lib/discoverData";
import EventList from "@/app/events/bangkok/components/EventList";

const EventsInterface: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-5xl text-white border-t border-white/10 mt-8">
      <Row gutter={0} wrap={false}>
        {/* Left Side - Events */}
        <Col flex="auto" className="p-8 pr-4">
          <EventList events={Events} showActions={false} />
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
