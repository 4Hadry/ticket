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
  className?: string;
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
  className,
}: CustomButtonProps) {
  // 🎨 Size
  const width = size === "large" ? "w-[440px]" : "w-[200px]";
  const padding = size === "large" ? "py-6 text-base" : "py-5 text-sm";

  // 🎨 Base Tailwind classes
  const styles = clsx(
    "inline-flex items-center justify-center font-normal transition-all duration-300 rounded-md",
    width,
    padding,
    {
      // ✅ Contained
      "text-black": variant === "contained" && color === "primary" && !disabled,
      "text-white":
        variant === "contained" && color === "secondary" && !disabled,

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

  // 🎨 Inline styles (gradient fix)
  const inlineStyle: React.CSSProperties = {};

  if (variant === "contained" && !disabled) {
    inlineStyle.background =
      color === "secondary"
        ? "linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)"
        : "linear-gradient(180deg, #FFFFFF 0%, #CACACA 100%)";

    inlineStyle.color = color === "secondary" ? "#FFF" : "#000";
  }
  if (variant === "outlined" && !disabled) {
    inlineStyle.border = `1px solid ${
      color === "secondary" ? "#DC2626" : "#ffff"
    }`;
    inlineStyle.color = color === "secondary" ? "#DC2626" : "#fff";
  }
  if (variant === "text" && !disabled) {
    inlineStyle.color = color === "secondary" ? "#DC2626" : "#ffff";
  }

  return (
    <Button
      type="text"
      className={clsx(
        styles,
        // ✅ Hover effects
        !disabled &&
          variant === "contained" &&
          "hover:brightness-90 hover:shadow-md hover:scale-[1.02]",
        !disabled &&
          variant === "outlined" &&
          "hover:bg-gray-100 hover:shadow-sm hover:scale-[1.02]",
        !disabled &&
          variant === "text" &&
          "hover:text-gray-700 hover:underline",
        className
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
