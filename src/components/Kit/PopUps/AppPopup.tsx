"use client";
import React, { useState } from "react";
import { Modal, Button, Input, Typography } from "antd";
import { MehOutlined, LikeOutlined } from "@ant-design/icons";

const { Text } = Typography;

// ✅ Variants define
export type PopupVariant =
  | "confirm"
  | "success"
  | "verify"
  | "acceptChanges"
  | "message"
  | "terms";

// ✅ Props type define
interface AppPopupProps {
  variant: PopupVariant;
  open: boolean;
  onClose: () => void;
  onAction?: () => void; // optional for some variants
}

export const AppPopup: React.FC<AppPopupProps> = ({
  variant,
  open,
  onClose,
  onAction,
}) => {
  return (
    <Modal
      open={open}
      footer={null}
      closable={true}
      onCancel={onClose}
      centered
      className="custom-popup"
      styles={{
        mask: { backgroundColor: "rgba(0,0,0,0.7)" },
        body: { padding: 0, borderRadius: 16, overflow: "hidden" },
        content: {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
        },
      }}
    >
      <div className="bg-[#1e293b] rounded-2xl p-6 text-white">
        {/* ========== CONFIRM VARIANT ========== */}
        {variant === "confirm" && (
          <>
            <div className="flex items-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 shadow-md mr-2">
                <MehOutlined className="text-2xl text-yellow-400" />
              </div>
              <span className="text-white text-lg font-medium">
                Are you sure you want to deactivate?
              </span>
            </div>
            <Text className="text-gray-400 block mb-6">
              Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam
              nibh suscipit aliquam dolor.
            </Text>
            <div className="flex justify-between gap-3">
              <Button
                onClick={onClose}
                className="rounded-lg bg-white/40 py-5 border-none flex-1"
              >
                Reject
              </Button>
              <Button
                type="primary"
                className="rounded-lg py-5 text-black bg-[#ffff] hover:!bg-white/40 flex-1"
                onClick={onAction}
              >
                Accept
              </Button>
            </div>
          </>
        )}

        {/* ========== SUCCESS VARIANT ========== */}
        {variant === "success" && (
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-white/10 shadow-md mb-4">
              <MehOutlined className="text-3xl text-yellow-400" />
            </div>
            <span className="text-white text-lg font-medium block mb-6">
              Your order has been placed
            </span>
            <div className="flex justify-between gap-3">
              <Button
                onClick={onClose}
                className="rounded-lg bg-white/40 py-5 border-none flex-1"
              >
                Undo
              </Button>
              <Button
                type="primary"
                className="rounded-lg py-5 text-black bg-[#ffff] hover:!bg-white/40 flex-1"
                onClick={onAction}
              >
                Thanks
              </Button>
            </div>
          </div>
        )}

        {/* ========== VERIFY VARIANT ========== */}
        {variant === "verify" && (
          <>
            <h2 className="text-lg font-semibold mb-2">
              We need to verify your identity
            </h2>
            <Text className="text-gray-400 text-sm block mb-6">
              We take certain actions for the safety of our users.
            </Text>
            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-400">
                Your Password
              </label>
              <Input.Password
                placeholder="Enter your password"
                className="rounded-lg bg-white border-none p-2"
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="primary"
                className="rounded-lg px-8 py-5 text-black bg-[#ffff] hover:!bg-white/40"
                onClick={onAction}
              >
                Continue
              </Button>
            </div>
          </>
        )}

        {/* ========== ACCEPT CHANGES VARIANT ========== */}
        {variant === "acceptChanges" && (
          <>
            <div className="flex items-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 shadow-md mr-2">
                <MehOutlined className="text-2xl text-yellow-400" />
              </div>
              <span className="text-white text-lg font-medium">
                Accept changes?
              </span>
            </div>
            <Text className="text-gray-400 block mb-6">
              Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam
              nibh suscipit aliquam dolor.
            </Text>
            <div className="flex justify-end gap-3">
              <Button
                onClick={onClose}
                className="rounded-lg bg-white/40 w-36 py-5 border-none"
              >
                Reject
              </Button>
              <Button
                type="primary"
                className="rounded-lg py-5 text-black bg-[#ffff] hover:!bg-white/40 w-44"
                onClick={onAction}
              >
                Accept
              </Button>
            </div>
          </>
        )}

        {/* ========== MESSAGE VARIANT ========== */}
        {variant === "message" && (
          <>
            <div className="flex items-center mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 shadow-md mr-2">
                <LikeOutlined className="text-2xl text-green-400" />
              </div>
              <span className="text-white text-lg font-medium">
                Changes saved successfully
              </span>
            </div>
            <Text className="text-gray-400 block mb-3">
              Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam
              nibh suscipit aliquam dolor.
            </Text>
            <a
              href="#"
              className="text-white font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                console.log("Learn more clicked");
              }}
            >
              Learn more
            </a>
          </>
        )}

        {/* ========== TERMS VARIANT ========== */}
        {variant === "terms" && (
          <>
            <h2 className="text-lg font-semibold mb-2">Terms and agreements</h2>
            <Text className="text-gray-400 text-sm block mb-6">
              Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam
              sit ultrices enim cursus. Leo sapien, pretium duis est eu volutpat
              interdum eu non. Odio eget nullam elit laoreet. Libero at felis
              nam at orci venenatis rutrum nunc. Etiam mattis ornare
              pellentesque iaculis enim.
            </Text>
            <Text className="text-gray-400 text-sm block mb-6">
              Felis eu non in aliquam egestas placerat. Eget maecenas ornare
              venenatis lacus nunc, sit arcu. Nam pharetra faucibus eget
              facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam
              blandit eu ipsum.
            </Text>
            <div className="flex justify-end gap-3">
              <Button
                onClick={onClose}
                className="rounded-lg bg-white/40 w-36 py-5 border-none"
              >
                Nope
              </Button>
              <Button
                type="primary"
                className="rounded-lg py-5 text-black bg-[#ffff] hover:!bg-white/40 w-44"
                onClick={onAction}
              >
                I Agree
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
