"use client";

import { Button } from "antd";
import { ReactNode } from "react";
import clsx from "clsx";

type CustomButtonProps = {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "large" | "medium";
  disabled?: boolean;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
};

export default function CustomButton({
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  icon,
  label,
  onlyIcon = false,
  onClick,
}: CustomButtonProps) {
  // 🎨 Colors
  const mainColor = color === "primary" ? "#FFFFFF" : "#DC2626";
  const hoverColor = color === "primary" ? "#CACACA" : "#B91C1C";

  // 🎨 Size
  const width = size === "large" ? "w-[440px]" : "w-[200px]";
  const padding = size === "large" ? "py-6 text-base" : "py-5  text-sm";

  // 🎨 Tailwind classes
  const styles = clsx(
    "inline-flex items-center justify-center font-normal transition-all duration-300 rounded-md",
    width,
    padding,
    {
      // ✅ Contained
      "text-secondry": variant === "contained" && !disabled,

      // ✅ Outlined
      "bg-transparent": variant === "outlined" && !disabled,

      // ✅ Text
      "bg-transparent underline-offset-2": variant === "text" && !disabled,

      // ✅ Disabled states
      "bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed":
        disabled && variant === "contained",
      "border border-gray-300 text-gray-400 cursor-not-allowed":
        disabled && variant === "outlined",
      "text-gray-400 cursor-not-allowed": disabled && variant === "text",

      // ✅ Icon only
      "p-2 aspect-square": onlyIcon,
    }
  );

  // 🎨 Inline styles (AntD override)
  const inlineStyle: React.CSSProperties = {};

  if (variant === "contained" && !disabled) {
    inlineStyle.background =
      color === "secondary"
        ? `linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)`
        : `linear-gradient(180deg, ${mainColor} 0%, ${hoverColor} 100%)`;

    inlineStyle.color = color === "secondary" ? "#FFF" : "#000"; // 🔥 text white for red btn
  }
  if (variant === "outlined" && !disabled) {
    inlineStyle.border = `1px solid ${mainColor}`;
    inlineStyle.color = mainColor;
  }
  if (variant === "text" && !disabled) {
    inlineStyle.color = mainColor;
  }

  return (
    <Button
      type="text"
      className={clsx(
        styles,
        // ✅ Hover effects
        !disabled &&
          variant === "contained" &&
          "hover:brightness-70 hover:shadow-md hover:scale-[1.02]",
        !disabled &&
          variant === "outlined" &&
          "hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02]",
        !disabled && variant === "text" && "hover:text-gray-700 hover:underline"
      )}
      icon={icon}
      disabled={disabled}
      onClick={onClick}
      style={inlineStyle}
    >
      {!onlyIcon && label}
    </Button>
  );
}
