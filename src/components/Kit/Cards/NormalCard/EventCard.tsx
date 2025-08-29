"use client";

import { Card, Row, Col, Typography, Avatar } from "antd";
import Image from "next/image";

const { Title, Text } = Typography;

interface EventCardProps {
  id: number;
  date?: string;
  day?: string;
  showDateHeader?: boolean; // control if date header should show
  time: string;
  endTime?: string;
  title: string;
  authors?: string;
  authorsAvatars?: { name: string; color: string }[];
  location?: string;
  price?: string;
  image?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  date,
  day,
  showDateHeader = false,
  time,
  endTime,
  title,
  authors,
  authorsAvatars = [],
  location,
  price,
  image = "/assets/images/cover.png",
}) => {
  return (
    <div key={id}>
      {/* Date Header */}
      {showDateHeader && (
        <div className="flex items-center mb-6">
          <div className="w-3 h-3 bg-gray-500 rounded-full mr-4"></div>
          <Text className="!text-white font-medium text-lg">{date}</Text>
          {day && <Text className="text-gray-400 ml-2 text-lg">{day}</Text>}
        </div>
      )}

      {/* Event Card */}
      <Card className="bg-card rounded-lg border border-gray-800 hover:bg-gray-750 transition-colors cursor-pointer ml-7 p-6">
        <Row gutter={16} align="middle" wrap={false}>
          {/* Left side - Event details */}
          <Col flex="auto">
            {/* Time */}
            <div className="text-gray-400 text-sm mb-3">
              <Text className="!text-white">{time}</Text>
              {endTime && (
                <>
                  <span className="mx-2">•</span>
                  <Text>{endTime}</Text>
                </>
              )}
            </div>

            {/* Title */}
            <Title
              level={4}
              className="!text-white mb-4 !leading-tight hover:!text-blue-400 transition-colors"
            >
              {title}
            </Title>

            {/* Authors */}
            {authors && (
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-3">
                  {authorsAvatars.map((a, idx) => (
                    <Avatar
                      key={idx}
                      size={24}
                      style={{ backgroundColor: a.color }}
                    >
                      {a.name}
                    </Avatar>
                  ))}
                </div>
                <Text className="text-gray-300 text-sm">{authors}</Text>
              </div>
            )}

            {/* Location */}
            {location && (
              <div className="flex items-center mb-4">
                <Text className="text-gray-300 text-sm">{location}</Text>
              </div>
            )}

            {/* Price */}
            {price && (
              <Text className="!text-green-500 font-semibold">{price}</Text>
            )}
          </Col>

          {/* Right side - Event image */}
          <Col flex="none">
            <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EventCard;
