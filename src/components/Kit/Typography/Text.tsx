"use client";
import React from "react";
import { Typography } from "antd";
import clsx from "clsx";

const { Text } = Typography;

type TextWeight = "normal" | "medium" | "semibold" | "bold";
type TextVariant = "xl" | "lg" | "md" | "sm" | "xs";

interface AppTextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  italic?: boolean;
  underline?: boolean;
  className?: string;
}

const sizeMap: Record<TextVariant, string> = {
  xl: "text-[20px] leading-[30px]",
  lg: "text-[18px] leading-[28px]",
  md: "text-[16px] leading-[24px]",
  sm: "text-[14px] leading-[20px]",
  xs: "text-[12px] leading-[18px]",
};

const weightMap: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const AppText: React.FC<AppTextProps> = ({
  children,
  variant = "xl",
  weight = "normal",
  italic = false,
  underline = false,
  className,
}) => {
  return (
    <Text
      className={clsx(
        sizeMap[variant],
        weightMap[weight],
        italic && "italic",
        underline && "underline",
        // "font-inter", // Tailwind config me font-inter add karna hoga
        className, // allow custom styles
        "text-white"
      )}
    >
      {children}
    </Text>
  );
};

export default AppText;
