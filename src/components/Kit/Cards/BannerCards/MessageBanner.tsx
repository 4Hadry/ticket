"use client";

import { Card, Typography, Row, Col, Avatar } from "antd";
import { MailOpen } from "lucide-react";

const { Text } = Typography;

const MessageBanner = () => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <Card className="bg-secondary rounded-xl border-0 text-white overflow-hidden p-0">
        {/* Body */}
        <div className="transition-all duration-300  cursor-pointer p-1">
          <Row gutter={16} align="middle" className="text-white">
            {/* Left: Mail Icon */}
            <Col>
              <span className="h-12 w-12">
                <MailOpen className="text-lg text-white w-full h-full" />
              </span>
            </Col>

            {/* Middle: Info */}
            <Col flex="auto">
              <Text className="text-white font-semibold text-sm sm:text-base">
                No Invites Sent
              </Text>
              <br />
              <Text className="text-gray-400 text-xs sm:text-sm">
                You can invite subscribers, contacts and past guests to the
                event.
              </Text>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default MessageBanner;
