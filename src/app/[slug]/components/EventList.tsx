"use client";
import { Button, Typography, Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import EventCard from "../../../components/Kit/Cards/EventCard";
import SubmitEventActions from "@/components/UI/SubmitEventBtn";

const { Title, Text } = Typography;

interface EventListProps {
  events: any[];
  showActions?: boolean;
}

export default function EventList({
  events,
  showActions = true,
}: EventListProps) {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Row
        className="w-full max-w-4xl mt-10 px-10"
        justify="space-between"
        align="middle"
      >
        <Col>
          <Title level={2} className="!text-white !m-0">
            Events
          </Title>
        </Col>

        <Col>
          <Row gutter={16} align="middle">
            <Col>
              {showActions && <SubmitEventActions show={showActions} />}
            </Col>
            <Col>
              {/* Search Icon Box */}
              <Button
                shape="circle"
                icon={<SearchOutlined className="text-white" />}
                className="bg-card border-none"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Timeline Events */}
      <div className="col-span-10 md:col-span-7 flex relative flex-col gap-10 sm:gap-16 mt-6 sm:mt-10 px-4 sm:px-10">
        {/* Vertical dotted line */}
        <div className="absolute pl-1.5 top-2 bottom-0 opacity-25 z-0">
          <div
            className="w-[2px] sm:w-[3px] h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, gray 0px, gray 8px, transparent 8px, transparent 16px)",
            }}
          />
        </div>

        {events.map((event, index) => (
          <div key={event.id} className="relative flex flex-col">
            {/* Timeline Label */}
            <Row
              align="middle"
              gutter={8}
              className="mb-3 sm:mb-4 relative z-10"
            >
              <Col>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border border-gray-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"></div>
                </div>
              </Col>
              <Col>
                <Text className="!text-gray-400 !text-xs sm:!text-sm !font-medium">
                  {index === 0
                    ? "Today"
                    : index === 1
                    ? "Yesterday"
                    : "Earlier"}
                </Text>
              </Col>
            </Row>

            {/* Event Card */}
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
