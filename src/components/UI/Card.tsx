"use client";

import Image from "next/image";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-card rounded-xl border border-white/5 hover:border-white/10 transition p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] cursor-pointer flex flex-col h-full">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-3">
        <Image
          src={"/assets/icons/feature.avif"}
          alt={title}
          width={40}
          height={40}
          className="rounded-md"
        />
        <Button
          size="middle"
          className="!bg-[#1F242B] !text-white/50 font-semibold hover:!bg-[#2B3139] rounded-full border-none"
        >
          Subscribe
        </Button>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <Title
            level={5}
            className="!text-base !font-medium !text-title_text !m-0 line-clamp-1"
          >
            {title}
          </Title>
          <Text className="!text-xs !text-light_text line-clamp-2">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
