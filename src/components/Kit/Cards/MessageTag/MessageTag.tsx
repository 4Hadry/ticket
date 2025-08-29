"use client";

import { Card, Typography, Row, Col } from "antd";
import { ArrowUpToLine } from "lucide-react";

const { Text } = Typography;

const MessageTag = () => {
  return (
    <div className="mx-auto min-w-2xl">
      <Card className="bg-[#05121E] rounded-xl border-0 text-white overflow-hidden p-0">
        {/* Body */}
        <div className="transition-all duration-300  cursor-pointer p-.5">
          <Row gutter={16} align="middle" className="text-white">
            {/* Left: Mail Icon */}
            <Col>
              <span className="h-12 w-12">
                <ArrowUpToLine strokeWidth={1.5} />
              </span>
            </Col>

            {/* Middle: Info */}
            <Col flex="auto">
              <Text className="text-white font-semibold text-sm sm:text-base">
                Invite Guests
              </Text>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default MessageTag;
