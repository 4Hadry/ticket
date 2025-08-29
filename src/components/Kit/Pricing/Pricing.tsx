"use client";
import React from "react";
import { Card, Typography, List, Avatar, Divider } from "antd";
import { CheckOutlined, SafetyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface PricingCardProps {
  title: string;
  price?: string;
  features: string[];
  buttonText?: string;
  variant?: "pro" | "outline";
  icon?: React.ReactNode;
  bgShade?: "light" | "medium" | "dark";
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  variant = "outline",
  icon,
  bgShade = "medium",
}) => {
  const bgMap: Record<string, string> = {
    light: "bg-[#0F1B2666]",
    medium: "bg-card",
    dark: "bg-black/90",
  };

  return (
    <Card
      bordered={false}
      className={`w-96 rounded-2xl text-white shadow-lg ${bgMap[bgShade]}`}
      bodyStyle={{ padding: 24 }}
    >
      {/* Icon */}
      <Avatar
        size={48}
        icon={icon || <SafetyOutlined />}
        className="bg-white/10 mb-4"
      />

      {/* Title + Price */}
      <Title level={4} className="!text-white !m-0">
        {title}
      </Title>
      {price ? (
        <Text className="!text-white text-2xl font-bold">
          {price}
          <span className="text-sm font-normal text-gray-300">/month</span>
        </Text>
      ) : (
        <Text className="!text-white text-xl font-semibold">
          Custom Pricing
        </Text>
      )}
      <Divider className="bg-white/20" />

      {/* Features */}
      <List
        dataSource={features}
        renderItem={(item) => (
          <List.Item className="!border-none !p-1 !text-gray-200">
            <CheckOutlined className="text-white mr-2" />
            {item}
          </List.Item>
        )}
      />

      {/* Button */}
      {variant === "pro" ? (
        <button className="mt-4 w-full py-2 rounded-lg bg-white text-black font-medium hover:!bg-white/80 transition shadow-md">
          {buttonText || "Start Your Free Trial"}
        </button>
      ) : (
        <button className="mt-4 w-full py-2 rounded-lg border border-white text-white font-medium bg-transparent hover:bg-white/10 transition shadow-lg">
          {buttonText || "Start Your Free Trial"}
        </button>
      )}
    </Card>
  );
};

export default PricingCard;
