"use client";
import { Card, Typography, Row, Col, Tag } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ArrowUpRight } from "lucide-react";

const { Text } = Typography;

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: number | string;
  percentage?: number;
  isIncrease?: boolean;
  duration: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  percentage,
  isIncrease = true,
  duration,
}) => {
  return (
    <Card
      bordered={false}
      className="w-[261px] h-[143px] rounded-xl p-2"
      style={{
        background:
          "radial-gradient(100.06% 100.06% at 50% -0.06%, rgba(15, 27, 38, 0.5) 0%, rgba(55, 99, 140, 0.5) 100%)",
      }}
    >
      {/* Main vertical container */}
      <Row className="h-full space-y-5">
        {/* Top row: icon + title */}
        <Row gutter={2} align="middle">
          <Col>
            <Tag
              icon={icon}
              className="!w-8 !h-8 !flex !items-center !justify-center !rounded-full !bg-transparent !border-white/20 !text-white/80 !text-white"
            />
          </Col>
          <Col>
            <Text className="text-white text-xl font-normal">{title}</Text>
          </Col>
        </Row>

        {/* Bottom row: value + percentage + duration */}
        <Row align="bottom" gutter={6}>
          <Col>
            <Text className="text-white text-[22px] font-semibold leading-none">
              {value}
            </Text>
          </Col>

          {percentage !== undefined && (
            <Col>
              <Row gutter={4} align="middle">
                <Col>
                  <span
                    className={`flex items-center gap-1 text-[11px] font-medium ${
                      isIncrease ? "text-white" : "text-red-400"
                    }`}
                  >
                    {isIncrease ? (
                      <ArrowUpRight />
                    ) : (
                      <ArrowDownOutlined className="text-[10px]" />
                    )}
                    {percentage}%
                  </span>
                </Col>
                <Col>
                  <span className="text-gray-300 text-[14px] font-normal">
                    {duration}
                  </span>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Row>
    </Card>
  );
};

export default StatsCard;
