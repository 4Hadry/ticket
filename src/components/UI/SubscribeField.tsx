import { Button, Input } from "antd";
import React from "react";

const SubscribeField = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <Input
          size="large"
          placeholder="me@email.com"
          className="!bg-[#1C1C1C] !border-[#2C2C2C] !text-white !placeholder-[#A9AFB8] rounded-full"
        />
        <Button
          size="large"
          type="default"
          className="rounded-full px-6 font-medium"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeField;
