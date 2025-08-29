"use client";

import { useState } from "react";
import { Input, Button } from "antd";
import { GoogleOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function LoginPage() {
  const [usePhone, setUsePhone] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-sm text-center border border-white/10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10">
            <MailOutlined className="text-xl text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-white mb-1">
          Welcome to Luma
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Please sign in or sign up below.
        </p>

        {/* Input + Toggle */}
        <div className="mb-4 text-left">
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm font-semibold text-gray-400">
              {usePhone ? "Phone Number" : "Email"}
            </label>
            <button
              onClick={() => setUsePhone(!usePhone)}
              className="text-xs font-bold text-gray-400 hover:text-white transition"
            >
              {usePhone ? "Use Email" : "Use Phone Number"}
            </button>
          </div>

          <Input
            size="large"
            prefix={usePhone ? <PhoneOutlined /> : <MailOutlined />}
            placeholder={usePhone ? "Enter your phone" : "you@email.com"}
            className="!bg-transparent !text-white !border-gray-600 hover:!border-gray-400 focus:!border-white [&::placeholder]:!text-white"
          />
        </div>

        {/* Continue with Button */}
        <Button
          type="primary"
          size="large"
          block
          className="!bg-white !text-black !rounded-md !font-medium hover:!bg-gray-200 mb-4"
        >
          Continue with {usePhone ? "Phone" : "Email"}
        </Button>

        {/* OR Divider */}
        <div className="flex items-center mb-4">
          <div className="flex-1 h-[1px] bg-gray-700" />
          <span className="px-2 text-xs text-gray-500">or</span>
          <div className="flex-1 h-[1px] bg-gray-700" />
        </div>

        {/* Google Button */}
        <Button
          icon={<GoogleOutlined />}
          size="large"
          block
          className="!bg-[#2d2d2d] !text-gray-300 !rounded-md hover:!bg-[#3a3a3a] border-none"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
