"use client";

import { Button, Alert, Switch, Radio, Checkbox, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

type Variant = "contained" | "outlined" | "text";
type State = "default" | "loading" | "success" | "error" | "pending";
type ComponentType = "button" | "alert" | "toggle" | "radio" | "checkbox";

interface UIComponentProps {
  type: ComponentType;
  variant?: Variant;
  state?: State;
  label?: string;
  checked?: boolean;
  onChange?: (value: any) => void;
  size?: "small" | "middle" | "large";
}

export default function UIComponent({
  type,
  variant = "contained",
  state = "default",
  label,
  checked,
  onChange,
  size = "middle",
}: UIComponentProps) {
  // 🔹 Button Case
  if (type === "button") {
    return (
      <Button
        type={
          variant === "contained"
            ? "primary"
            : variant === "outlined"
            ? "default"
            : "text"
        }
        loading={state === "loading"}
        size={size}
      >
        {label}
      </Button>
    );
  }

  // 🔹 Alert Case
  if (type === "alert") {
    return (
      <Alert
        message={label}
        type={
          state === "success"
            ? "success"
            : state === "error"
            ? "error"
            : "warning"
        }
        showIcon
      />
    );
  }

  // 🔹 Toggle (Switch)
  if (type === "toggle") {
    return <Switch checked={checked} onChange={onChange} />;
  }

  // 🔹 Radio
  if (type === "radio") {
    return <Radio checked={checked}>{label}</Radio>;
  }

  // 🔹 Checkbox
  if (type === "checkbox") {
    return <Checkbox checked={checked}>{label}</Checkbox>;
  }

  return null;
}
