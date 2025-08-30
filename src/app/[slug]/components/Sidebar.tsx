"use client";
import Image from "next/image";
import { Typography, Card } from "antd";
import SubscribeField from "@/components/UI/SubscribeField";

const { Title, Paragraph } = Typography;

export default function Sidebar({ cities }: any) {
  return (
    <div className="col-span-2 mt-10 flex max-w-md space-y-6 flex-col">
      {/* City Icon */}
      <div className="flex justify-start">
        <Image
          className="w-14 h-14 bg-[#e39936] rounded-full border-4 border-white/20 shadow-md"
          src="https://images.lumacdn.com/discovery/bangkok-icon.png"
          alt={cities.city}
          width={112}
          height={112}
        />
      </div>

      {/* City Title */}
      <Title
        level={1}
        className="!text-white !text-4xl !m-0 !text-start !tracking-tight"
      >
        {cities.city}
      </Title>

      {/* Description */}
      <Paragraph className="!text-gray-300 !text-lg !leading-relaxed !text-start">
        Discover the hottest events in {cities.city}, and get notified of new
        events before they sell out.
      </Paragraph>

      {/* Subscribe Field */}
      <div className="flex flex-col space-y-4">
        <SubscribeField />
      </div>

      {/* Placeholder Card */}
      <Card
        className="w-full h-48 rounded-xl bg-gray-800/40 border border-white/10 flex items-center justify-center"
        bodyStyle={{ padding: 0 }}
      >
        <span className="text-gray-500">Map Coming Soon</span>
      </Card>
    </div>
  );
}
