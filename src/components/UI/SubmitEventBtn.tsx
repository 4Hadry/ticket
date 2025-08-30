"use client";
import { Button } from "antd";
import { Plus, Signal } from "lucide-react";

interface SubmitEventActionsProps {
  show?: boolean;
}

export default function SubmitEventActions({
  show = true,
}: SubmitEventActionsProps) {
  if (!show) return null;

  return (
    <div className="flex items-center gap-4">
      <Button
        type="primary"
        icon={<Plus size={18} />}
        className="flex items-center p-5 text-lg bg-card"
      >
        Submit Event
      </Button>

      <span className="bg-card p-3 rounded-lg">
        <Signal size={20} className="text-white cursor-pointer" />
      </span>
    </div>
  );
}
