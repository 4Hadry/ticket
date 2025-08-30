"use client";

import Image from "next/image";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Tag, Row, Col, Button } from "antd";
import { Users } from "lucide-react";
import clsx from "clsx";
import AppText from "../../Typography/Text";
import CustomButton from "../../Buttons/Buttons";

type EventCardProps = {
  monthDay: string;
  weekday: string;
  time: string;
  city: string;
  guests: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  onManage?: () => void;
  className?: string;
};

export default function EventCard2({
  monthDay,
  weekday,
  time,
  city,
  guests,
  title,
  imageUrl,
  imageAlt = "event",
  onManage,
  className,
}: EventCardProps) {
  return (
    <Row
      align="middle"
      justify="space-between"
      gutter={16}
      className={clsx(
        "w-full rounded-xl px-4 py-4 bg-transparent border border-white/10",
        className
      )}
    >
      {/* Left section */}
      <Col flex="auto">
        <Row gutter={16} align="middle">
          {/* Date */}
          <Col>
            <div className="w-[84px] text-right text-2xl space-y-3">
              <div className="leading-[20px] text-white/90">{monthDay}</div>
              <div className="leading-[20px] text-white/60">{weekday}</div>
            </div>
          </Col>

          {/* Blue accent */}
          <Col>
            <div className="w-[2px] h-40 rounded-full bg-[#669AFD]" />
          </Col>

          {/* Meta + Content */}
          <Col flex="auto">
            <div className="flex flex-col gap-3">
              {/* Meta row */}
              <Row gutter={[12, 12]} align="middle" wrap={true}>
                <Col>
                  <div className="flex items-center gap-1">
                    <Tag
                      icon={<ClockCircleOutlined />}
                      className="!w-8 !h-8 !flex !items-center !justify-center 
                                 !rounded-full !bg-transparent !border-white/20 !text-white/80"
                    />
                    <span className="text-white text-base sm:text-lg">
                      {time}
                    </span>
                  </div>
                </Col>

                <Col>
                  <div className="flex items-center gap-1">
                    <Tag
                      icon={<EnvironmentOutlined />}
                      className="!w-8 !h-8 !flex !items-center !justify-center 
                                 !rounded-full !bg-transparent !border-white/20 !text-white/80"
                    />
                    <span className="text-white text-base sm:text-lg">
                      {city}
                    </span>
                  </div>
                </Col>

                <Col>
                  <div className="flex items-center gap-2">
                    <Tag
                      icon={<Users size={14} />}
                      className="!w-8 !h-8 !flex !items-center !justify-center 
                                 !rounded-full !bg-transparent !border-white/20 !text-white/80"
                    />
                    <span className="text-white text-base sm:text-lg">
                      {guests}
                    </span>
                  </div>
                </Col>
              </Row>

              {/* Title */}
              <AppText variant="xl" weight="semibold" className="!text-2xl">
                {title}
              </AppText>

              {/* Action */}
              <CustomButton
                onClick={onManage}
                label="Manage Event"
                variant="contained"
                color="primary"
              />
            </div>
          </Col>
        </Row>
      </Col>

      {/* Right Image */}
      <Col flex="220px">
        <div className="relative w-[220px] h-[120px] rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      </Col>
    </Row>
  );
}
