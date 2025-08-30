"use client";

import { Card, Col, Row, Tag, Typography } from "antd";
import clsx from "clsx";
import { Bookmark, CalendarDays } from "lucide-react";
import Image from "next/image";

const { Title, Text, Paragraph } = Typography;

type EventCardProps = {
  day: string;
  date: string;
  featured?: boolean;
  start: string;
  end: string;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
  className?: string;
};

export default function EventCard3({
  day,
  date,
  featured,
  start,
  end,
  title,
  location,
  description,
  price,
  image,
  className,
}: EventCardProps) {
  return (
    <Card
      bordered={false}
      className={clsx(
        "w-full flex items-center gap-6",
        "rounded-xl px-4 py-4",
        "bg-transparent border border-white/10",
        className
      )}
      bodyStyle={{ padding: 0 }}
    >
      <Row
        gutter={0}
        className="flex w-full items-stretch"
        wrap={false} // ❗ Important: Row wrap disable to keep justify working
        justify="space-between" // AntD way to do justify-between
      >
        {/* Left Date Section */}
        <Col
          flex="80px"
          className="flex flex-col items-center justify-center text-white py-6 border-r border-blue-600"
        >
          <Text className="text-white/60 text-2xl">{day}</Text>
          <Title level={4} className="!text-white !mb-0 text-2xl">
            {date}
          </Title>
        </Col>

        {/* Middle Content */}
        <Col flex="auto" className="px-6 py-4">
          <div className="flex items-center gap-4 mb-2">
            {featured && (
              <div className="flex items-center">
                <Tag
                  icon={<Bookmark />}
                  className="!w-8 !h-8 !flex !items-center !justify-center !rounded-full !bg-transparent !border-white/20 !text-white/80 !text-white"
                />
                <span className="text-white text-lg"> Featured</span>
              </div>
            )}
            <div className="flex items-center">
              <Tag
                icon={<CalendarDays />}
                className="!w-8 !h-8 !flex !items-center !justify-center !rounded-full !bg-transparent !border-white/20 !text-white/80 !text-white"
              />
              <span className="text-white text-base">
                {start} - {end}
              </span>
            </div>
          </div>

          <Title level={4} className="!text-white">
            {title}
          </Title>

          <Text strong className="!text-white/80 block mb-2">
            {location}
          </Text>

          <Paragraph className="!text-white/60 mb-4 line-clamp-1">
            {description}
          </Paragraph>

          <Text className="text-2xl text-white font-semibold">{price}</Text>
        </Col>

        {/* Right Image */}
        <Col flex="240px" className="relative flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="240px"
          />
        </Col>
      </Row>
    </Card>
  );
}
