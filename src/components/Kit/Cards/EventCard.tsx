"use client";
import Image from "next/image";
import { Card, Typography, Avatar, Tag, Row, Col } from "antd";

const { Title, Text } = Typography;

export default function EventCard({ event }: { event: any }) {
  return (
    <Card
      className="ml-3 sm:ml-6 max-w-full sm:max-w-3xl rounded-xl bg-[#222529] shadow-lg relative z-10 border-none"
      bodyStyle={{ padding: "1rem" }}
    >
      <Row gutter={[16, 16]} align="middle">
        {/* Left Content */}
        <Col xs={24} sm={16} className="text-white flex flex-col gap-2">
          {/* Time */}
          <Text className="!text-xs sm:!text-sm opacity-70">
            Live {event.time}
          </Text>

          {/* Title */}
          <Title level={5} className="!text-base sm:!text-lg !text-white !m-0">
            {event.title}
          </Title>

          {/* Author */}
          <Row align="middle" gutter={8}>
            <Col>
              <Avatar
                src={
                  <Image
                    src={event.avatar}
                    alt={event.author}
                    width={24}
                    height={24}
                  />
                }
                size={24}
                className="border border-white/20"
              />
            </Col>
            <Col>
              <Text className="!text-xs sm:!text-sm !text-white">
                By {event.author}
              </Text>
            </Col>
          </Row>

          {/* Participants */}
          <Row align="middle" gutter={8}>
            <Col>
              <div className="flex flex-row relative">
                {[1, 2, 3].map((i) => (
                  <Avatar
                    key={i}
                    src={
                      <Image
                        src={event.avatar}
                        alt={`avatar${i}`}
                        width={28}
                        height={28}
                      />
                    }
                    size={28}
                    className={`border border-white/20 ${
                      i > 1 ? "-ml-2 sm:-ml-3" : ""
                    }`}
                  />
                ))}
              </div>
            </Col>
            <Col>
              <Text className="!text-xs sm:!text-sm !text-white">
                {event.place}
              </Text>
            </Col>
          </Row>

          {/* Price + Place */}
          <Row align="middle" gutter={8}>
            <Col>
              <Tag
                color="green"
                className="!text-[10px] sm:!text-xs !rounded-xl px-2 py-0.5 sm:py-1"
              >
                {event.price}
              </Tag>
            </Col>
            <Col>
              <Text className="!text-xs sm:!text-sm !text-white">
                {event.place}
              </Text>
            </Col>
          </Row>
        </Col>

        {/* Right Side Image */}
        <Col xs={24} sm={8} className="flex justify-end">
          <Image
            className="w-20 h-20 sm:w-40 sm:h-40 bg-slate-50 bg-opacity-20 rounded-md object-cover"
            src={event.cover}
            alt={event.title}
            width={160}
            height={160}
          />
        </Col>
      </Row>
    </Card>
  );
}
