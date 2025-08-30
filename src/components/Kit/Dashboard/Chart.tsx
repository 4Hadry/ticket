"use client";
import { Card, Typography, Row, Col } from "antd";
import { FlagOutlined, EyeOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Text } = Typography;

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 12 },
  { name: "Mar", value: 14 },
  { name: "Apr", value: 25 },
  { name: "May", value: 23 },
  { name: "Jun", value: 24 },
  { name: "Jul", value: 26 },
  { name: "Aug", value: 28 },
  { name: "Sep", value: 27 },
  { name: "Oct", value: 29 },
  { name: "Nov", value: 30 },
  { name: "Dec", value: 32 },
];

export default function AnalyticsCard() {
  return (
    <Card
      bordered={false}
      className="rounded-2xl p-4"
      style={{
        background: "linear-gradient(180deg, #0A1A2F 0%, #0E223A 100%)",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title */}
      <Row className="mb-3">
        <Col>
          <Text className="text-white font-medium text-[15px]">Page Views</Text>
        </Col>
      </Row>

      {/* Header Stats */}
      <Row
        gutter={24}
        className="mb-4 rounded-lg p-2"
        style={{
          background:
            "radial-gradient(100.06% 100.06% at 50% -0.06%, rgba(15, 27, 38, 0.5) 0%, rgba(55, 99, 140, 0.5) 100%)",
        }}
      >
        <Col>
          <Row gutter={8} align="middle">
            <Col>
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-[#2B3B54]">
                <EyeOutlined className="text-[#6B7FFF]" />
              </div>
            </Col>
            <Col>
              <Text className="text-white text-base font-semibold block leading-tight">
                721
              </Text>
              <Text className="text-gray-400 text-[11px]">24 hours</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={8} align="middle">
            <Col>
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-[#2B3B54]">
                <FlagOutlined className="text-yellow-400" />
              </div>
            </Col>
            <Col>
              <Text className="text-white text-base font-semibold block leading-tight">
                125
              </Text>
              <Text className="text-gray-400 text-[11px]">Medium Priority</Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={8} align="middle">
            <Col>
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-[#2B3B54]">
                <FlagOutlined className="text-red-400" />
              </div>
            </Col>
            <Col>
              <Text className="text-white text-base font-semibold block leading-tight">
                110
              </Text>
              <Text className="text-gray-400 text-[11px]">Low Priority</Text>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Chart */}
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={true}
              horizontal={false}
              stroke="#2B3B54"
            />
            <XAxis
              dataKey="name"
              stroke="#888"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ffffff"
              strokeWidth={2}
              dot={{ r: 4, fill: "#fff", stroke: "#0A1A2F", strokeWidth: 2 }}
              activeDot={{
                r: 5,
                fill: "#fff",
                stroke: "#6B7FFF",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
