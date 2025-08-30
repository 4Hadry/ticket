"use client";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

type Variant = "normal" | "medium" | "semibold" | "bold";
type Size = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

interface DisplayProps {
  size: Size;
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

// Font Size + Line Height mapping
const fontSizeMap: Record<Size, string> = {
  "2xl": "text-7xl leading-[80px]", // 72px/80px
  xl: "text-6xl leading-[72px]", // 60px/72px
  lg: "text-5xl leading-[60px]", // 48px/60px
  md: "text-4xl leading-[52px]", // 36px/52px
  sm: "text-3xl leading-[44px]", // 30px/44px
  xs: "text-2xl leading-[36px]", // 24px/36px
};

// Font Weight mapping
const fontWeightMap: Record<Variant, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

// Label for showing description
const labelMap: Record<Variant, string> = {
  normal: "Inter Regular",
  medium: "Inter Medium",
  semibold: "Inter Semibold",
  bold: "Inter Bold",
};

// Size label mapping
const sizeLabelMap: Record<Size, string> = {
  "2xl": "72px / 80px",
  xl: "60px / 72px",
  lg: "48px / 60px",
  md: "36px / 52px",
  sm: "30px / 44px",
  xs: "24px / 36px",
};

export default function Display({
  size,
  variant,
  children,
  className,
}: DisplayProps) {
  return (
    <div className="mb-6">
      {/* Main Text */}
      <Text
        className={`${fontSizeMap[size]} ${fontWeightMap[variant]} font-inter block text-white ${className}`}
      >
        {children}
      </Text>

      {/* Description */}
      {/* <Text type="secondary" className="text-sm mt-1 block">
        {labelMap[variant]} | {sizeLabelMap[size]}
      </Text> */}
    </div>
  );
}
